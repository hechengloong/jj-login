const axios = require('axios');
const { merge } = require('./merge');

const defaultOptions = {
  method: 'GET',
  data: {},
  params: {},
  headers: {
    origin: 'https://juejin.cn',
    pragma: 'no-cache',
    referer: 'https://juejin.cn/',
    'sec-ch-ua':
      '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
  },
};

module.exports = function service(options) {
  return new Promise((resolve, reject) => {
    axios(merge(defaultOptions, options))
      .then((res) => {
        let data = res.data || {};
        if (data.err_no === 0 || data.code === 0) {
          resolve(data.data)
        } else {
          // message(data.err_msg)
          reject(data)
        }
      })
      .catch((err) => {
       console.log(err);
        reject(err)
      })
  })
};
