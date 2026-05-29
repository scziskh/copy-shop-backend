const transporter = {
  from: "Copy Shop Site <order@site.copy-shop.ua>",
  to: "muzychukserhii@gmail.com",
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

      <div style="background:#fff; padding:15px; border-radius:8px;">
        <h3>Дані покупця:</h3>
        <p><b>Ім'я:</b> ${data["first-name"]} ${data["last-name"]}</p>
        <p><b>Телефон:</b> ${data.phone}</p>
        <p><b>Email:</b> ${data.email2}</p>
      </div>
    </div>`,
};
