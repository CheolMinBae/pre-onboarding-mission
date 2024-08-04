const baseURL = '';

const request = async (url: string, options = {}) => {
  return await fetch(`${baseURL}${url}`, options);
};

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const getData = async (url: string, options = {}) => {
  return await request(url, { ...options, method: 'GET', headers }).then((r) => r.json());
};

export const postData = async (url: string, data: unknown, options = {}) => {
  return request(url, {
    ...options,
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });
};

export const patchData = async (url: string, data: unknown, options = {}) => {
  return request(url, {
    ...options,
    method: 'PATCH',
    headers,
    body: JSON.stringify(data),
  });
};

export const deleteData = async (url: string, options = {}) => {
  return request(url, {
    ...options,
    method: 'DELETE',
    headers,
  });
};
