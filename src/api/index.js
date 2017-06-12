const apiroot = '/service/api';

export function sendData(payload) {
  const { customer, image, items, payment, settings } = payload;
  const url = apiroot + '/orders';
  var myHeaders = new Headers();

  myHeaders.append('Content-Type', 'application/json; charset=utf-8');

  return image
          .get()
          .then(function(data) {
            if (data.image && data.image !== 'data:,') {
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
            }
            else {
              const error = new Error(`Image error: no image`);
              throw error;
            }
          });
}

function fetchBase(url) {
  return fetch(url)
           .then(checkStatus)
           .then(parseJSON);

}

export function fetchTexts(project) {
  const url = apiroot + `/signs/texts/${project}`;

  return fetchBase(url);
}

export function fetchPrices(project) {
  const url = apiroot + `/signs/prices/${project}`;

  return fetchBase(url);
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
