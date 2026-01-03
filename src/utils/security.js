import DOMPurify from 'dompurify';

const SAFE_URL_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:']);

const resolveBaseOrigin = () => {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return 'http://localhost';
};

export const sanitizeHtml = (dirty = '') =>
  DOMPurify.sanitize(dirty, {
    USE_PROFILES: { html: true },
    ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto|tel):|[^a-z]|[a-z+.-]+(?:[^a-z+.-]|$))/i,
    FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed', 'link', 'meta', 'form'],
  });

export const sanitizeUrl = (value, { defaultValue = '', allowHash = true } = {}) => {
  if (!value) return defaultValue;

  const trimmed = String(value).trim();
  if (allowHash && trimmed.startsWith('#')) {
    return `#${trimmed.replace(/^#+/, '')}`;
  }

  try {
    const baseOrigin = resolveBaseOrigin();
    const parsed = new URL(trimmed, baseOrigin);

    if (SAFE_URL_PROTOCOLS.has(parsed.protocol)) {
      return parsed.toString();
    }
  } catch {
    // noop: fall through to defaultValue
  }

  return defaultValue;
};

export const sanitizeImageUrl = (value) =>
  sanitizeUrl(value, { defaultValue: '', allowHash: false });
