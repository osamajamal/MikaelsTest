import {Alert} from 'react-native';

var base_url = 'https://gsmtasks.com/api/tasks/tasks/'; // Base url for all api

let header = {
  Authorization: 'Token  a82a8fc4a1a4af42751b310441e26dd6c4a91895', // Get token from GMS Authentication api hardcoded
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json',
};

export var createTask = address => {
  let url = base_url;
  return new Promise(function (resolve, reject) {
    try {
      let body = {
        account:
          'https://gsmtasks.com/api/tasks/accounts/3380cd67-40b2-4ccf-8321-5f58a2b8f4d0/', // hardcoded
        category: 'drop_off', // hardcoded
        address: address,
      };

      body = JSON.stringify(body);
      let requestConfig = {
        method: 'POST',
        headers: header,
        body: body,
      };
      fetch(url, requestConfig)
        .then(r => {
          console.log('SuccessfullResult=>', r);
          r.json()
            .then(res => {
              resolve(res);
            })
            .catch(e => {
              console.log('Incorrect JSON');
            });
        })
        .catch(e => {
          reject(e);
        });
    } catch (e) {
      console.log(e);
    }
  });
};

export var getlistTask = () => {
  let url = base_url;

  return async (dispatch, getState) => {
    const length = await new Promise(function (resolve, reject) {
      let requestConfig = {
        method: 'GET',
        headers: header,
      };

      fetch(url, requestConfig)
        .then(r => {
          r.json()
            .then(res => {
              dispatch({
                type: 'ALLLIST-TASK',
                payload: res,
              });
              resolve(res.length);
              console.log('successsfull');
              // console.log(res);
            })
            .catch(e => {
              console.log('Incorrect JSON');
            });
        })
        .catch(e => {
          console.log('Incorrect JSON');
          reject(e);
        });
    });
  };
};
