const ensureMessage = (msg, id) => {
  if (typeof msg === 'object' && typeof msg.id !== 'undefined') return msg;

  return {
    id,
    defaultMessage: id,
  };
};

export { ensureMessage };
