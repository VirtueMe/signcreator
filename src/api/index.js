function sendData() {
  console.info('what is happening?', fetch);
  return fetch('https://offers.sandviks.com/service/init/GBN/IB900600').then(function(response) {
    const json = response.json();
    
    return json;
  });
}

export default sendData;
