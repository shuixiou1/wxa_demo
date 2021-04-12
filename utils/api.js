
var apiDomain = "" ;

function baseApi(domain, url, params, method, headers) {
  return new Promise((resolve, reject) => {
    headers = Object.assign({
      'content-type': 'application/x-www-form-urlencoded',
    }, headers);
    wx.request({
      url: `${domain}${url}`,
      data: params,
      method: method || 'get',
      header: headers,
      success: function (res) {
        resolve(res.data);
      },
      fail: reject
    });
  });
};

export function fetchApi(url, params, method) {
  return baseApi(apiDomain, url, params, method);
};
export function getApi(url, params) {
  return fetchApi(url, params, "get");
};
export function postApi(url, params) {
  return fetchApi(url, params, "post");
};

