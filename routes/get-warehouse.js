export const getWarehousesRoute = async (req, res) => {
  try {
    // DeliveryCity - це ідентифікатор міста, який повертає searchSettlements
    const { deliveryCityRef, searchString } = req.body;

    if (!deliveryCityRef) return res.json({ data: [] });

    const payload = {
      apiKey: process.env.NOVA_POSHTA_API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityRef: deliveryCityRef,
        FindByString: searchString || "", // Для пошуку конкретного відділення за номером
        Limit: "100",
        Page: "1",
      },
    };

    const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.success) {
      res.status(200).json({ data: data.data || [] });
    } else {
      res.status(400).json({ error: data.errors });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Помилка сервера при пошуку відділень" });
  }
};
