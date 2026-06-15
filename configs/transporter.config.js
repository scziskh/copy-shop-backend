const transporter = {
  from: "Copy Shop Site <order@site.copy-shop.ua>",
  to: "sale@copy-shop.ua",
  setSubject: (route, number) => `${subjects[route]}${number}`,
  setHtml: (route, data, number) => html[route](data, number),
};

module.exports = transporter;

const subjects = {
  callMe: "Заявка з сайту №",
  sendMail: "Заявка з сайту №",
  order: "Нове замовлення №",
};

// Функція для рендеру списку файлів
const renderFiles = (filePaths) => {
  if (!filePaths || !Array.isArray(filePaths) || filePaths.length === 0)
    return "";
  return `
    <div style="margin-top:20px; padding:15px; background:#f9f9f9; border-radius:8px;">
      <p style="margin:0 0 10px 0; font-weight:bold;">Прикріплені файли:</p>
      ${filePaths
        .map(
          (path, i) => `
        <a href="${path}" style="display:block; color:#007bff; text-decoration:none; margin:5px 0;">
          📥 Файл №${i + 1}
        </a>
      `,
        )
        .join("")}
    </div>`;
};

// Функція для генерації блоку доставки та оплати
const renderShippingAndPayment = (data) => {
  let shippingHtml = "";
  let paymentHtml = "";

  // 1. Логіка доставки
  const shippingType = data["shipping-type"];
  if (shippingType === "pickup") {
    // Точки самовивозу
    const locationName =
      data["shipping"] === "amosova" ? "вул. Амосова" : "ст.м. Дарниця";
    shippingHtml = `<p><b>Спосіб доставки:</b> Самовивіз (${locationName})</p>`;
  } else if (shippingType === "novapost") {
    const postType =
      data["post-type"] === "address"
        ? "Адресна доставка кур'єром"
        : "Доставка на відділення/поштомат";
    shippingHtml = `
      <p><b>Спосіб доставки:</b> Нова Пошта (${postType})</p>
      <p><b>Місто:</b> ${data["shipping-city"] || "Не вказано"}</p>
      <p><b>Адреса / Відділення:</b> ${data["shipping-address"] || "Не вказано"}</p>
    `;
  } else {
    shippingHtml = `<p><b>Спосіб доставки:</b> Не вказано</p>`;
  }

  // 2. Логіка оплати (Юр. особа / Фіз. особа)
  const paymentType = data["payment"];
  if (paymentType === "entity") {
    paymentHtml = `
      <p><b>Тип оплати:</b> Безготівковий (Юридична особа)</p>
      <div style="margin-top: 5px; padding-left: 10px; border-left: 2px solid #ccc; font-size: 13px; color: #555;">
        <p style="margin:2px 0;"><b>Організація:</b> ${data["payment-organization"] || "-"}</p>
        <p style="margin:2px 0;"><b>ІПН:</b> ${data["payment-itn"] || "-"}</p>
        <p style="margin:2px 0;"><b>ЄДРПОУ:</b> ${data["payment-edrpou"] || "-"}</p>
        <p style="margin:2px 0;"><b>Директор:</b> ${data["payment-director"] || "-"}</p>
        <p style="margin:2px 0;"><b>Юр. адреса:</b> ${data["payment-address"] || "-"}</p>
        <p style="margin:2px 0;"><b>Поштова адреса:</b> ${data["payment-post-address"] || "-"}</p>
        <p style="margin:2px 0;"><b>Телефон:</b> ${data["payment-phone"] || "-"}</p>
        <p style="margin:2px 0;"><b>Email:</b> ${data["payment-email"] || "-"}</p>
        <p style="margin:2px 0;"><b>Банк:</b> ${data["payment-bank"] || "-"}</p>
        <p style="margin:2px 0;"><b>IBAN:</b> ${data["payment-iban"] || "-"}</p>
      </div>
    `;
  } else {
    paymentHtml = `<p><b>Тип оплати:</b> Готівка / Картка (Фізична особа)</p>`;
  }

  return `
    <div style="background:#fff; padding:15px; border-radius:8px; margin-top:15px; border:1px solid #ddd;">
      <h3 style="margin-top:0; color:#333; border-bottom:1px solid #eee; padding-bottom:5px;">Доставка та оплата</h3>
      ${shippingHtml}
      <div style="margin-top:10px;"></div>
      ${paymentHtml}
    </div>
  `;
};

// Стиль для карток замовлень
const itemStyle = `border:1px solid #ddd; padding:15px; border-radius:8px; margin-bottom:15px; background:#fff;`;

const html = {
  sendMail: ({ email2, name, message, filePaths, fullUrl }, number) => `
    <div style="font-family:sans-serif; max-width:600px; margin:auto; padding:20px;">
      <h2 style="color:#333;">Нове повідомлення №${number}</h2>
      <p><b>Від:</b> ${name} (${email2})</p>
      <p><b>Відправлено зі сторінки:</b> <a href="${fullUrl}">${fullUrl}</a></p>
      <p style="line-height:1.5;">${message}</p>
      ${renderFiles(filePaths)}
    </div>`,

  order: ({ data, cartItems, totalPrice }, number) => `
    <div style="font-family:sans-serif; max-width:600px; margin:auto; padding:20px; background:#f4f4f4;">
      <h1 style="text-align:center;">Замовлення №${number}</h1>
      <h2 style="text-align:center;">Сума: ${parseFloat(totalPrice).toFixed(2)} грн.</h2>
      
      ${cartItems
        .map(
          (item) => `
        <div style="${itemStyle}">
          <h3 style="margin-top:0; color:#444;">${item.name}</h3>
          <ul style="padding-left:20px; color:#555;">
            ${Object.entries(item.params)
              .map(([key, val]) =>
                typeof val !== "object" ? `<li><b>${key}</b> ${val}</li>` : "",
              )
              .join("")}
          </ul>
          ${renderFiles(item.filePaths)}
          <p style="text-align:right; font-weight:bold; color:#000;">Ціна: ${item.price} грн.</p>
        </div>
      `,
        )
        .join("")}

      <div style="background:#fff; padding:15px; border-radius:8px; border:1px solid #ddd;">
        <h3 style="margin-top:0; color:#333; border-bottom:1px solid #eee; padding-bottom:5px;">Дані покупця</h3>
        <p style="margin:5px 0;"><b>Ім'я:</b> ${data["first-name"]} ${data["last-name"]}</p>
        <p style="margin:5px 0;"><b>Телефон:</b> ${data.phone}</p>
        <p style="margin:5px 0;"><b>Email:</b> ${data.email2}</p>
      </div>

      ${renderShippingAndPayment(data)}
      
    </div>`,
};
