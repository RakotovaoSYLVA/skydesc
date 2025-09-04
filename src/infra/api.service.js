// infra/api.service.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const headers = {
  "Content-Type": "application/json",
  // "Authorization": `Bearer ${token}`, // si JWT
};

export const apiService = {
  request: async ({ method, url, data }) => {
    const res = await fetch(`${BASE_URL}/${url}`, {
      method,
      headers,
      body: data ? JSON.stringify(data) : undefined,
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  },
};
