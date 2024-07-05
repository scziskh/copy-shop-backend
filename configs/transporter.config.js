const transporter = {
  from: "Copy Shop Site <mailtrap@demomailtrap.com>",
  to: "muzychukserhii@gmail.com",
  setSubject: (route, number) => {
    return `${subjects[route]}${number}`;
  },
  setHtml: (route, data, number) => {
    return html[route](data, number);
  },
};

module.exports = transporter;

const subjects = {
  callMe: "Заявка з сайту №",
  sendMail: "Заявка з сайту №",
  order: "Нове замовлення №",
};

const translation = {
  pickup: "Самовивіз",
  amosova: "вул. М. Амосова, 12",
  grinchenko: "вул. М. Грінченка, 4В",
  darnytsia: "вул. Краківська, 6А",
  novapost: 'Служба доставки "Нова Пошта"',
  address: "Адресна доставка",
  department: "Відділення / Поштомат",
  city: "Населений пункт",
  address: "Адреса доставки",
  department: "Номер відділення / поштомату",
  individual: "Фізична особа",
  entity: "Юридична особа або ФОП",
  FORMAT: {
    header: "Формат:",
    "85x55": "85х55 мм",
    "90x50": "90х50 мм",
    Eurobooklet: "Єврофлаєр (210x100)",
    Eurobooklet_2: "Єврофлаєр 2-x (210x200)",
    A6: "A6 (148x105)",
    A5: "A5 (210x148)",
    A4: "A4 (297x210)",
    A3: "A3 (420x297)",
  },
  PAPER: {
    header: "Папір:",
    80: "Папір офсетний 80г",
    130: "Папір крейдований 130г",
    150: "Папір крейдований 150г",
    170: "Папір крейдований 170г",
    200: "Папір крейдований 200г",
    250: "Папір крейдований 250г",
    300: "Папір крейдований 300г",
    "120DNS": "Ультра білий папір DNS 120г",
    "160DNS": "Ультра білий папір DNS 160г",
    "300DNS": "Ультра білий папір DNS 300г",
    "400DNS": "Ультра білий папір DNS 400г",
  },
  PRINTING: {
    header: "Друк:",
    COLOR: "Кольоровий друк",
    GRAYSCALE: "Чорно-білий друк",
  },
  LAMINATION: {
    header: "Ламінація:",
    NO_LAMINATION: "Без ламінації",
    "1_MATT": "Одностороння матова 27 мкм",
    "2_MATT": "Двостороння матова 27 мкм",
    "1_GLOSSY": "Одностороння глянсова 25 мкм",
    "2_GLOSSY": "Двостороння глянсова 25 мкм",
    "1_VELVET": "Одностороння оксамитова 27 мкм",
    "2_VELVET": "Двостороння оксамитова 27 мкм",
    "2_THICK_MATT": "Товста матова 75 мкм",
    "2_THICK_GLOSSY": "Товста глянсова 75 мкм",
  },
  SIDES: {
    header: "Кількість сторін:",
    1: "Односторонній друк",
    2: "Двосторонній друк",
  },
  CORNERS: {
    header: "Кути:",
    ROUND_CORNERS: "Заокруглені кути",
    RIGHT_CORNERS: "Прямі кути",
  },
  FOLDING: {
    header: "Фальцювання",
    0: "Без згину",
    1: "1 згин",
    2: "2 згини",
  },
  COUNT: {
    header: "Кількість:",
  },
  booklets: "Буклети",
  certificates: "Сертифікати, дипломи",
  books: "Книги",
  stickers: "Стікери",
  blanks: "Фірмові бланки",
  flyers: "Листівки, флаєри",
  tags: "Бірки",
  "standart-business-cards": "Візитівки «Стандарт»",
  "premium-business-cards": "Візитівки «Преміум»",
  "envelops-standart": "Конверти «Стандарт»",
  "envelops-premium": "Конверти «Преміум»",
  "standart-invitation-cards": "Листівки «Стандарт»",
  "premium-invitation-cards": "Листівки «Преміум»",
  hengers: "Хенгери",
  notepads: "Блокноти",
  folders: "Фірмові папки",
  diploms: "Дипломи",
  "staple-brochures": "Брошури на скобу",
  "spring-brochures": "Брошури на пружину",
  drawings: "Креслення",
  posters: "Плакати",
  banners: "Банери",
  holst: "Полотно",
  "big-stickers": "Великі наліпки",
  "wall-calendars": "Настінні календарі",
  "quarterly-calendars": "Квартальні календарі",
  "desktop-calendars": "Настільні календарі",
  photo: "Фотографії",
  packets: "Пакети",
  stickerbooks: "Стікербуки",
  stickerpacks: "Стікерпаки",
  batteryboxes: "Бокси для батарейок",
  menu: "Меню",
  rollup: "Конструкція Roll Up",
  spider: "Конструкція Павук",
  "envelops-craft": "Конверти Крафтові",
  tshirt: "Друк на футболках",
  "packets-banana": "Пакети Банан",
  cup: "Друк на чашках",
};

const html = {
  sendMail: (
    { email2, name, message, filePath },
    number
  ) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  dir="ltr"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title></title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if mso]>
<style type="text/css">
   ul {
margin: 0 !important;
}
ol {
margin: 0 !important;
}
li {
margin-left: 47px !important;
}

</style><![endif]
-->
  </head>
  <body class="body">
    <div dir="ltr" class="es-wrapper-color">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill>
        </v:background>
      <![endif]-->
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td class="esd-email-paddings" valign="top">
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
              >
                <tbody>
                  <tr>
                    <td class="esd-stripe" align="center">
                      <table
                        bgcolor="#ffffff"
                        class="es-content-body"
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="esd-structure es-p15t es-p20r es-p20l"
                              align="left"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="560"
                                      class="esd-container-frame"
                                      align="center"
                                      valign="top"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-image es-p10t es-p10b"
                                              style="font-size: 0px"
                                            >
                                              <a target="_blank"
                                                ><img
                                                  src="https://res.cloudinary.com/dllc7tavb/image/upload/c_limit,w_96/f_auto/q_auto/v1//assets/logo?_a=BAVFB+DW0"
                                                  alt=""
                                                  style="display: block"
                                                  width="100"
                                                  class="adapt-img"
                                              /></a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-text es-p10b es-m-txt-c es-text-6456"
                                            >
                                              <h1
                                                style="
                                                  font-size: 24px;
                                                  line-height: 100%;
                                                "
                                              >
                                                Нова заявка з сайту
                                              </h1>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              align="left"
                                              class="esd-block-text es-text-1889"
                                            >
                                              <p
                                                class="es-text-mobile-size-14"
                                                style="
                                                  font-size: 14px;
                                                  line-height: 150%;
                                                "
                                              >
                                                <strong
                                                  >Номер заявки:
                                                  ${number}</strong
                                                >
                                              </p>
                                              <p
                                                class="es-text-mobile-size-14"
                                                style="
                                                  font-size: 14px;
                                                  line-height: 150%;
                                                "
                                              >
                                                <strong
                                                  >Email:
                                                  <a href="mailto:${email2}"
                                                    >${email2}</a
                                                  ></strong
                                                >
                                              </p>
                                              <p
                                                class="es-text-mobile-size-14"
                                                style="
                                                  font-size: 14px;
                                                  line-height: 150%;
                                                "
                                              >
                                                <strong>Ім'я: ${name}</strong>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
              >
                <tbody>
                  <tr>
                    <td class="esd-stripe" align="center">
                      <table
                        bgcolor="#ffffff"
                        class="es-content-body"
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td class="esd-structure es-p20" align="left">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="560"
                                      class="esd-container-frame"
                                      align="center"
                                      valign="top"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-text es-p5t es-p15b es-p40r es-p40l es-m-p0r es-m-p0l"
                                            >
                                              <p style="font-size: 18px;">${message}</p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p10t es-p20r es-p20l"
                              align="left"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="560"
                                      class="es-m-p0r esd-container-frame"
                                      align="center"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="
                                          border-top: 2px solid #efefef;
                                          border-bottom: 2px solid #efefef;
                                        "
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="left"
                                              class="esd-block-text es-text-7523"
                                            >
                                              <p align="center">
                                                <span
                                                  class="es-text-mobile-size-24"
                                                  style="
                                                    font-size: 24px;
                                                    line-height: 150%;
                                                  "
                                                  >Прикріплений файл:</span
                                                >
                                              </p>
                                              <p align="center" style="font-size: 18px;">
                                                ${
                                                  filePath
                                                    ? `<a href="${filePath}"
                                                  >Посилання</a
                                                >`
                                                    : `Файли не вкладено`
                                                }
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>`,
  callMe: ({ phone, name }, number) => {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      dir="ltr"
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <meta charset="UTF-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta content="telephone=no" name="format-detection" />
        <title></title>
        <!--[if (mso 16)]>
          <style type="text/css">
            a {
              text-decoration: none;
            }
          </style>
        <![endif]-->
        <!--[if gte mso 9
          ]><style>
            sup {
              font-size: 100% !important;
            }
          </style><!
        [endif]-->
        <!--[if gte mso 9]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG></o:AllowPNG>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        <![endif]-->
        <!--[if mso]>
    <style type="text/css">
       ul {
    margin: 0 !important;
    }
    ol {
    margin: 0 !important;
    }
    li {
    margin-left: 47px !important;
    }
    
    </style><![endif]
    -->
      </head>
      <body class="body">
        <div dir="ltr" class="es-wrapper-color">
          <!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
              <v:fill type="tile" color="#fafafa"></v:fill>
            </v:background>
          <![endif]-->
          <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td class="esd-email-paddings" valign="top">
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    class="es-content"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td class="esd-stripe" align="center">
                          <table
                            bgcolor="#ffffff"
                            class="es-content-body"
                            align="center"
                            cellpadding="0"
                            cellspacing="0"
                            width="600"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="esd-structure es-p15t es-p20r es-p20l"
                                  align="left"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          width="560"
                                          class="esd-container-frame"
                                          align="center"
                                          valign="top"
                                        >
                                          <table
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  align="center"
                                                  class="esd-block-image es-p10t es-p10b"
                                                  style="font-size: 0px"
                                                >
                                                  <a target="_blank"
                                                    ><img
                                                      src="https://res.cloudinary.com/dllc7tavb/image/upload/c_limit,w_96/f_auto/q_auto/v1//assets/logo?_a=BAVFB+DW0"
                                                      alt=""
                                                      style="display: block"
                                                      width="100"
                                                      class="adapt-img"
                                                  /></a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  align="center"
                                                  class="esd-block-text es-p10b es-m-txt-c es-text-6456"
                                                >
                                                  <h1
                                                    style="
                                                      font-size: 24px;
                                                      line-height: 100%;
                                                    "
                                                  >
                                                    Нова заявка з сайту
                                                  </h1>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  align="left"
                                                  class="esd-block-text es-text-1889"
                                                >
                                                  <p
                                                    class="es-text-mobile-size-14"
                                                    style="
                                                      font-size: 14px;
                                                      line-height: 150%;
                                                    "
                                                  >
                                                    <strong
                                                      >Номер заявки:
                                                      ${number}</strong
                                                    >
                                                  </p>
                                                  <p
                                                    class="es-text-mobile-size-14"
                                                    style="
                                                      font-size: 14px;
                                                      line-height: 150%;
                                                    "
                                                  >
                                                    <strong
                                                      >Номер телефону:
                                                      <a href="tel:${phone}"
                                                        >${phone}</a
                                                      ></strong
                                                    >
                                                  </p>
                                                  <p
                                                    class="es-text-mobile-size-14"
                                                    style="
                                                      font-size: 14px;
                                                      line-height: 150%;
                                                    "
                                                  >
                                                    <strong>Ім'я: ${name}</strong>
                                                  </p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    class="es-content"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td class="esd-stripe" align="center">
                          <table
                            bgcolor="#ffffff"
                            class="es-content-body"
                            align="center"
                            cellpadding="0"
                            cellspacing="0"
                            width="600"
                          >
                            <tbody>
                              <tr>
                                <td class="esd-structure es-p20" align="left">
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          width="560"
                                          class="esd-container-frame"
                                          align="center"
                                          valign="top"
                                        >
                                          <table
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  align="center"
                                                  class="esd-block-text es-p5t es-p15b es-p40r es-p40l es-m-p0r es-m-p0l"
                                                >
                                                  <p style="font-size: 18px">
                                                    Перетелефонуйте, будь ласка, на
                                                    мій номер
                                                    <a href="tel:${phone}"
                                                      >${phone}</a
                                                    >
                                                  </p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </html>`;
  },
  order: ({ data, cartItems, totalPrice }, number) => {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title></title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if mso]>
 <style type="text/css">
     ul {
  margin: 0 !important;
  }

 </style><![endif]
--></head><body class="body"><div dir="ltr" class="es-wrapper-color"><!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#fafafa"></v:fill>
			</v:background>
		<![endif]--><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table cellpadding="0" cellspacing="0" class="es-content" align="center"><tbody><tr><td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600"><tbody><tr><td class="esd-structure es-p15t es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-image es-p10t es-p5b" style="font-size: 0px;"><a target="_blank" href="https://site.copy-shop.ua/"><img src="https://res.cloudinary.com/dllc7tavb/image/upload/c_limit,w_96/f_auto/q_auto/v1//assets/logo?_a=BAVFB+DW0" alt="" style="display:block" width="100" class="adapt-img"></a></td></tr><tr><td align="center" class="esd-block-text es-p10b es-m-txt-c es-text-6456"><h1 style="font-size:24px;line-height:100%">Нове замовлення на сайті</h1><h2>На суму: ${parseFloat(
      totalPrice
    ).toFixed(
      2
    )} грн.</h2></td></tr><tr><td align="left" class="esd-block-text es-text-1889"><p class="es-text-mobile-size-14" style="font-size:14px;line-height:150%"><strong>Номер замовлення: ${number}</strong></p><p class="es-text-mobile-size-14" style="font-size:14px;line-height:150%"><strong>Email: ${
      data.email2
    }</strong></p>
  <p class="es-text-mobile-size-14" style="font-size:14px;line-height:150%"><strong>Телефон: ${
    data.phone
  }</strong></p><p class="es-text-mobile-size-14" style="font-size:14px;line-height:150%"><strong>Ім'я: ${
      data["first-name"]
    }</strong></p><p class="es-text-mobile-size-14" style="font-size:14px;line-height:150%"><strong>Прізвище: ${
      data["last-name"]
    }</strong></p><p class="es-text-mobile-size-14" style="font-size:14px;line-height:150%"><strong>Доставка: ${
      translation[data["shipping-type"]]
    }</strong></p><p class="es-text-mobile-size-14" style="font-size:14px;line-height:150%"><strong>Місто: ${
      data["shipping-type"] === "pickup" ? "Київ" : data["shipping-city"]
    }</strong></p><p class="es-text-mobile-size-14" style="font-size:14px;line-height:150%"><strong>${
      data["post-type"] === "department" && data["shipping-type"] !== "pickup"
        ? "Номер поштомату / відділення:"
        : "Адреса:"
    } ${
      data["shipping-type"] === "pickup"
        ? translation[data.shipping]
        : data["shipping-address"]
    }</strong></p><p class="es-text-mobile-size-14" style="font-size:14px;line-height:150%"><strong>Платник: ${
      translation[data.payment]
    }</strong></p><p class="es-text-mobile-size-14" style="font-size:14px;line-height:150%"><strong>​</strong></p></td></tr>
    

    <tr>
      <td align="center" class="esd-block-spacer es-p20" style="font-size: 0">
          <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" class="es-spacer">
              <tbody>
                  <tr>
                      <td style="border-bottom: 1px solid #cccccc;; background: none; height: 1px; width: 100%; margin: 0px 0px 0px 0px"></td>
                  </tr>
              </tbody>
          </table>
      </td>
  </tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>
  
  
  ${cartItems.map(
    (
      item
    ) => `<table class="es-content" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
          <td class="esd-stripe" align="center" bgcolor="transparent">
              <table class="es-content-body" width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" align="center">
                
    <tbody><tr>
      <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
        <table cellpadding="0" cellspacing="0">
        
        <tbody><tr>
                
            <td width="560" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <h2>${translation[item.name]}</h2>
      </td>
  </tr><tr>
  <td align="left" class="esd-block-html">
    <ul class="esd-text">${Object.entries(item.params)
      .map(([name, value]) => {
        return `<li>${
          name === "COUNT"
            ? `${translation[name].header} ${value}`
            : `${translation[name].header} ${translation[name][value]}`
        }</li>`;
      })
      .join("")}</ul></td>
</tr>
${
  item.filePath
    ? `<tr>
      <td align="left" class="esd-block-text es-text-8098">
          <p style="font-size:18px;line-height:150%" align="center">Файл:&nbsp;<a href=${item.filePath} download style="font-size:18px;line-height:150%">Скачати</a></p> </td>
  </tr>`
    : ``
}
<tr>
      <td align="left" class="esd-block-text es-text-8098">
          <p style="font-size:18px;line-height:150%" align="center">Ціна:&nbsp;${
            item.price
          } грн.</p> </td>
  </tr>
  
</tbody></table>
            </td>
        
                
        </tr>
    
      </tbody></table>
      </td>
    </tr>
  
              </tbody></table>
          </td>
      </tr>
    </tbody></table>`
  )}
    
    
    ${
      data.payment === "entity"
        ? `<table class="es-content" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
          <td class="esd-stripe" align="center" bgcolor="transparent">
              <table class="es-content-body" width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" align="center">
                
    <tbody><tr>
      <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
        <table cellpadding="0" cellspacing="0">
        
        <tbody><tr>
                
            <td width="560" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="center" class="esd-block-spacer es-p20" style="font-size: 0">
          <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" class="es-spacer">
              <tbody>
                  <tr>
                      <td style="border-bottom: 1px solid #cccccc;; background: none; height: 1px; width: 100%; margin: 0px 0px 0px 0px"></td>
                  </tr>
              </tbody>
          </table>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
      </tbody></table>
      </td>
    </tr>
  
              </tbody></table>
          </td>
      </tr>
    </tbody></table><table class="es-content" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
          <td class="esd-stripe" align="center" bgcolor="transparent">
              <table class="es-content-body" width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" align="center">
                
    <tbody><tr>
      <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
        
    <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-left" align="left">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>Назва організації:</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-right" align="right">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text"><p>${data["payment-organization"]}</p></td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  
              </tbody></table>
          </td>
      </tr>
    </tbody></table><table class="es-content" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
          <td class="esd-stripe" align="center" bgcolor="transparent">
              <table class="es-content-body" width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" align="center">
                
    <tbody><tr>
      <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
        
    <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-left" align="left">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>ІПН:</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-right" align="right">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>${data["payment-itn"]}</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  
              </tbody></table>
          </td>
      </tr>
    </tbody></table><table class="es-content" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
          <td class="esd-stripe" align="center" bgcolor="transparent">
              <table class="es-content-body" width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" align="center">
                
    <tbody><tr>
      <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
        
    <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-left" align="left">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>ЄДРПОУ:</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-right" align="right">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>${data["payment-edrpou"]}</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  
              </tbody></table>
          </td>
      </tr>
    </tbody></table><table class="es-content" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
          <td class="esd-stripe" align="center" bgcolor="transparent">
              <table class="es-content-body" width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" align="center">
                
    <tbody><tr>
      <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
        
    <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-left" align="left">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>Директор:</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-right" align="right">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>${data["payment-director"]}</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  
              </tbody></table>
          </td>
      </tr>
    </tbody></table><table class="es-content" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
          <td class="esd-stripe" align="center" bgcolor="transparent">
              <table class="es-content-body" width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" align="center">
                
    <tbody><tr>
      <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
        
    <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-left" align="left">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>Юридична адреса:</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-right" align="right">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>${data["payment-address"]}</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  
              </tbody></table>
          </td>
      </tr>
    </tbody></table><table class="es-content" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
          <td class="esd-stripe" align="center" bgcolor="transparent">
              <table class="es-content-body" width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" align="center">
                
    <tbody><tr>
      <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
        
    <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-left" align="left">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>Поштова адреса:</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-right" align="right">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>${data["payment-post-address"]}</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  
              </tbody></table>
          </td>
      </tr>
    </tbody></table><table class="es-content" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
          <td class="esd-stripe" align="center" bgcolor="transparent">
              <table class="es-content-body" width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" align="center">
                
    <tbody><tr>
      <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
        
    <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-left" align="left">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>Номер телефону:</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-right" align="right">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>${data["payment-phone"]}</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  
              </tbody></table>
          </td>
      </tr>
    </tbody></table><table class="es-content" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
          <td class="esd-stripe" align="center" bgcolor="transparent">
              <table class="es-content-body" width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" align="center">
                
    <tbody><tr>
      <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
        
    <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-left" align="left">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>Email:</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-right" align="right">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>${data["payment-email"]}</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  
              </tbody></table>
          </td>
      </tr>
    </tbody></table><table class="es-content" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
          <td class="esd-stripe" align="center" bgcolor="transparent">
              <table class="es-content-body" width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" align="center">
                
    <tbody><tr>
      <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
        
    <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-left" align="left">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>Банк:</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-right" align="right">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>${data["payment-bank"]}</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  
              </tbody></table>
          </td>
      </tr>
    </tbody></table><table class="es-content" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
          <td class="esd-stripe" align="center" bgcolor="transparent">
              <table class="es-content-body" width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" align="center">
                
    <tbody><tr>
      <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
        
    <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-left" align="left">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>IBAN:</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
        <table cellpadding="0" cellspacing="0" class="es-right" align="right">
            
        <tbody><tr>
                
            <td width="270" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="left" class="esd-block-text">
          <p>${data["payment-iban"]}</p>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
        </tbody></table>
    <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  
              </tbody></table>
          </td>
      </tr>
    </tbody></table><table class="es-content" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
          <td class="esd-stripe" align="center" bgcolor="transparent">
              <table class="es-content-body" width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" align="center">
                
    <tbody><tr>
      <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
        <table cellpadding="0" cellspacing="0">
        
        <tbody><tr>
                
            <td width="560" class="esd-container-frame" align="left">
                <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody><tr>
      <td align="center" class="esd-block-spacer es-p20" style="font-size: 0">
          <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" class="es-spacer">
              <tbody>
                  <tr>
                      <td style="border-bottom: 1px solid #cccccc;; background: none; height: 1px; width: 100%; margin: 0px 0px 0px 0px"></td>
                  </tr>
              </tbody>
          </table>
      </td>
  </tr></tbody></table>
            </td>
        
                
        </tr>
    
      </tbody></table>
      </td>
    </tr>
  
              </tbody></table>
          </td>
      </tr>
    </tbody></table>`
        : ``
    }</td></tr></tbody></table></div></body></html>`;
  },
};
