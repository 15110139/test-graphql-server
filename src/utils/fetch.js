import fetchnode from 'node-fetch';
import ApiServices from '../config/ApiServices';

async function request(nameService, url, method, options) {
  const baseUrl = ApiServices[nameService];
  if (!baseUrl) return 'BASE_URL_NOT_EXIST';

  return fetchnode(`${baseUrl}${url}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Secret: 'abc',
    },
    body: options
      ? JSON.stringify({
        ...options,
      })
      : null,
  });
}

async function getResponse(req) {
  const response = await req;
  const data = await response.json();
  if (!data.success) throw data.message;
  return data.result;
}

export default nameService => ({
  post: (url, options) => getResponse(request(nameService, url, 'POST', options)),
  get: (url, options) => getResponse(request(nameService, url, 'GET', options)),
  put: (url, options) => getResponse(request(nameService, url, 'PUT', options)),
  delete: (url, options) => getResponse(request(nameService, url, 'DELETE', options)),
});
