const server = process.env.NODE_ENV === 'development' ? 'https://betaoffers.sandviks.com' : '';
const apiroot = `${server}/service/api`;

export function sendData(payload) {
  const { customer, image, items, payment, settings } = payload;
  const url = apiroot + '/orders';
  var myHeaders = new Headers();

  myHeaders.append('Content-Type', 'application/json; charset=utf-8');

  return image
          .then(function(data) {
            return fetch(url, {
                    method: 'post',
                    headers: myHeaders,
                    body: JSON.stringify({
                      project: settings.project || 'NTN',
                      email: customer.email,
                      name: customer.name,
                      address: customer.address,
                      zip: customer.zip,
                      city: customer.city,
                      CreditCard: payment.type === 1 ? { number: payment.number, expires: payment.month + payment.year, ccv2: payment.ccv2 } : null,
                      signs: [{
                        image: data.image,
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
                            default:
                              return item;
                          }
                        })
                      }]
                    })
                  })
                  .then(checkStatus)
                  .then(parseJSON);
              });
}

export function fetchTexts(project) {
  const url = apiroot + `/signs/texts/${project}`;

  return fetch(url)
           .then(checkStatus)
           .then(parseJSON);
}

function checkStatus(response) {
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
