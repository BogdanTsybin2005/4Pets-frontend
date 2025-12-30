import axios from 'axios';

const normalizeUrl = (value) => (value || '').replace(/\/+$/, '');

const DEFAULT_BASE_URL = 'https://4-pets-backend.vercel.app';
const DEFAULT_PREFIX = '/api/v1';

const rawBaseUrl = normalizeUrl(import.meta.env.VITE_BACKEND_URL || DEFAULT_BASE_URL);
const hasApiSegment = /\/api($|\/)/i.test(rawBaseUrl);

const configuredPrefix = import.meta.env.VITE_BACKEND_PREFIX;
const prefixToUse = configuredPrefix === ''
  ? ''
  : configuredPrefix || (hasApiSegment ? '' : DEFAULT_PREFIX);

const normalizePrefix = (value) => {
  if (!value) return '';
  const cleaned = `/${String(value).replace(/^\/+/, '').replace(/\/+$/, '')}`;

  if (hasApiSegment || cleaned.startsWith('/api')) {
    return cleaned;
  }

  return cleaned === '/api' ? cleaned : `/api${cleaned}`;
};

const normalizedPrefix = normalizePrefix(prefixToUse);

export const API_BASE_URL = normalizeUrl(
  normalizedPrefix && !rawBaseUrl.endsWith(normalizedPrefix)
    ? `${rawBaseUrl}${normalizedPrefix}`
    : rawBaseUrl
);

const readStoredToken = () => {
  if (typeof localStorage === 'undefined') return '';
  try {
    const item = localStorage.getItem('token');
    if (!item) return '';
    try {
      return JSON.parse(item);
    } catch {
      return item;
    }
  } catch {
    return '';
  }
};

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = readStoredToken();
  if (token && token.includes('.') && !config.headers?.Authorization) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
});

export const buildAuthHeaders = (token) =>
  token && token.includes('.')
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};

export const extractToken = (payload = {}) => {
  const token =
    payload?.access_token ||
    payload?.token ||
    payload?.accessToken ||
    payload?.data?.access_token ||
    payload?.data?.token ||
    payload?.data?.accessToken;

  return typeof token === 'string' ? token : '';
};

export const extractUser = (payload = {}) => {
  const nestedData = payload?.data;
  const user =
    nestedData?.user ||
    nestedData?.profile ||
    nestedData ||
    payload?.user ||
    payload?.profile;

  if (user && typeof user === 'object' && !Array.isArray(user)) return user;
  return null;
};

export const getErrorMessage = (error, fallback = 'Ошибка сервера') =>
  error?.response?.data?.message ||
  error?.response?.data?.error ||
  error?.message ||
  fallback;

export default API_BASE_URL;
