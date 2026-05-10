"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const API_URL = "https://copy-shop-backend.vercel.app";

export default function AdminPricingPage() {
  const [prices, setPrices] = useState([]);
  const [changedItems, setChangedItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/pricing-flat`)
      .then((res) => res.json())
      .then((data) => {
        setPrices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Помилка завантаження:", err);
        setLoading(false);
      });
  }, []);

  const handlePriceChange = (id, newPrice) => {
    setChangedItems((prev) => ({
      ...prev,
      [id]: newPrice,
    }));
  };

  const handleSave = async () => {
    const updates = Object.keys(changedItems).map((id) => ({
      id: Number(id),
      price: Number(changedItems[id]),
    }));

    if (updates.length === 0) return;
    setSaving(true);

    try {
      const res = await fetch(`${API_URL}/pricing`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ updates }),
      });

      if (res.ok) {
        alert("Ціни успішно оновлено!");
        setChangedItems({});
        setPrices((prev) =>
          prev.map((item) =>
            changedItems[item.id] !== undefined
              ? { ...item, price: changedItems[item.id] }
              : item,
          ),
        );
      } else {
        alert("Помилка при збереженні");
      }
    } catch (err) {
      console.error(err);
      alert("Помилка мережі");
    }
    setSaving(false);
  };

  if (loading) return <Wrapper>Завантаження прайсу...</Wrapper>;
  const hasChanges = Object.keys(changedItems).length > 0;

  // --- ЛОГІКА ГРУПУВАННЯ ---

  // 1. Групуємо прості списки (наприклад, матеріали або формати)
  const formatList = prices.filter((p) =>
    p.path.startsWith("digital_printing_formats."),
  );

  // 2. Групуємо таблиці з тиражами (наприклад, кольоровий друк)
  const digitalColorData = prices.filter((p) =>
    p.path.startsWith("digital_printing.color."),
  );

  // Створюємо унікальні колонки тиражів для таблиці "Цифровий друк (Колір)"
  const digitalColorQuantities = Array.from(
    new Set(digitalColorData.map((item) => item.qty)),
  ).sort((a, b) => a - b);

  // Створюємо рядки (наприклад: 'default', '5', '100')
  const digitalColorRows = Array.from(
    new Set(digitalColorData.map((item) => item.path.split(".").pop())),
  );

  return (
    <Wrapper>
      <Header>
        <h1>Прайс-листи (Copy Shop)</h1>
        <SaveButton
          $active={hasChanges}
          onClick={handleSave}
          disabled={saving || !hasChanges}
        >
          {saving ? "Збереження..." : "Зберегти зміни"}
        </SaveButton>
      </Header>

      <GridContainer>
        {/* === БЛОК 1: ТАБЛИЦЯ "ЦИФРОВИЙ ДРУК (КОЛІР)" === */}
        <SectionCard>
          <SectionTitle>Цифровий друк (Колір)</SectionTitle>
          <GridTable>
            <thead>
              <tr>
                <th>Заливка / Тип</th>
                {digitalColorQuantities.map((qty) => (
                  <th key={qty}>{qty} шт.</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {digitalColorRows.map((rowLabel) => (
                <tr key={rowLabel}>
                  <td className="row-label">
                    {rowLabel === "default"
                      ? "Стандарт"
                      : `Заливка ${rowLabel}%`}
                  </td>
                  {digitalColorQuantities.map((qty) => {
                    // Знаходимо конкретну ціну для цього рядка і цієї колонки (тиражу)
                    const cellData = digitalColorData.find(
                      (d) => d.path.endsWith(rowLabel) && d.qty === qty,
                    );

                    if (!cellData) return <td key={qty}>—</td>;

                    const currentValue =
                      changedItems[cellData.id] !== undefined
                        ? changedItems[cellData.id]
                        : cellData.price;
                    const isChanged = changedItems[cellData.id] !== undefined;

                    return (
                      <td key={cellData.id}>
                        <PriceInput
                          type="number"
                          step="0.01"
                          value={currentValue}
                          onChange={(e) =>
                            handlePriceChange(cellData.id, e.target.value)
                          }
                          $changed={isChanged}
                        />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </GridTable>
        </SectionCard>

        {/* === БЛОК 2: ПРОСТИЙ СПИСОК "ФОРМАТИ" === */}
        <SectionCard>
          <SectionTitle>Формати (націнка)</SectionTitle>
          <GridTable>
            <thead>
              <tr>
                <th>Формат</th>
                <th>Множник / Ціна</th>
              </tr>
            </thead>
            <tbody>
              {formatList.map((item) => {
                const label = item.path.split(".").pop();
                const currentValue =
                  changedItems[item.id] !== undefined
                    ? changedItems[item.id]
                    : item.price;
                const isChanged = changedItems[item.id] !== undefined;

                return (
                  <tr key={item.id}>
                    <td className="row-label">{label}</td>
                    <td>
                      <PriceInput
                        type="number"
                        step="0.01"
                        value={currentValue}
                        onChange={(e) =>
                          handlePriceChange(item.id, e.target.value)
                        }
                        $changed={isChanged}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </GridTable>
        </SectionCard>
      </GridContainer>
    </Wrapper>
  );
}

// === СТИЛІ (Styled Components) ===
const Wrapper = styled.div`
  padding: 30px;
  background-color: #f5f7f9;
  min-height: 100vh;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 24px;
    color: #1a1a1a;
    margin: 0;
  }
`;

const SaveButton = styled.button`
  background-color: ${(props) => (props.$active ? "#0066cc" : "#ccc")};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 6px;
  cursor: ${(props) => (props.$active ? "pointer" : "not-allowed")};
  transition: all 0.2s;
  font-weight: 500;
  box-shadow: ${(props) =>
    props.$active ? "0 2px 4px rgba(0,102,204,0.2)" : "none"};

  &:hover {
    background-color: ${(props) => (props.$active ? "#0052a3" : "#ccc")};
  }
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SectionCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  color: #333;
  margin-top: 0;
  margin-bottom: 15px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;
`;

const GridTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th {
    background-color: #fafbfc;
    padding: 12px;
    font-weight: 600;
    color: #444;
    border: 1px solid #eaeaea;
    font-size: 13px;
    text-align: center;

    &:first-child {
      text-align: left;
    }
  }

  td {
    padding: 8px;
    border: 1px solid #eaeaea;
    text-align: center;
  }

  .row-label {
    font-weight: 500;
    color: #333;
    text-align: left;
    background-color: #fafbfc;
    width: 200px;
  }

  tr:hover td:not(.row-label) {
    background-color: #f8f9fa;
  }
`;

const PriceInput = styled.input`
  padding: 8px;
  border: 1px solid ${(props) => (props.$changed ? "#0066cc" : "transparent")};
  border-radius: 4px;
  width: 80px;
  text-align: center;
  font-size: 14px;
  background-color: ${(props) => (props.$changed ? "#e6f2ff" : "transparent")};
  transition: all 0.2s;

  &:hover {
    border-color: #ccc;
  }
  &:focus {
    border-color: #0066cc;
    background-color: #fff;
    outline: none;
  }

  /* Прибираємо стрілочки для чисел */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
