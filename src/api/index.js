const beta = process.env.NODE_ENV === 'development' ? 'beta' : '';
const server = `https:/${beta}offers.sandviks.com`;

export function sendData(payload) {
  const { customer, image, items, payment, settings } = payload;
  const url = server + '/service/api/orders';

  return image
          .then(function(data) {
            return fetch(url, {
                    method: 'post',
                    body: JSON.stringify({
                      project: settings.project,
                      email: customer.email,
                      name: customer.name,
                      address: customer.address,
                      zip: customer.zip,
                      city: customer.city,
                      image: data.image,
                      CreditCard: payment.type === 1 ? { number: payment.number, expires: payment.month + payment.year, ccv2: payment.ccv2 } : null,
                      sign: {
                        settings: {
                          type: settings.type,
                          backplate: settings.backplate,
                          top: settings.top,
                          right: settings.right,
                          left: settings.left,
                          bottom: settings.bottom
                        },
                        items: items.map((item)=> {
                          switch (item.type) {
                            case 2:
                              return {
                                type: item.type,
                                value: item.value.map((image) => {
                                  return image.image
                                }),
                                scale: item.scale
                              };
                              break;
                            default:
                              return item;
                          }
                        })
                      }
                    })
                  })
                  .then(checkStatus)
                  .then(parseJSON);
              });
}


function checkStatus(response) {
  console.info('response: ', response);

  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}
