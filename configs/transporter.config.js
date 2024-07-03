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
};
