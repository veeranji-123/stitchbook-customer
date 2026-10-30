const { coreUrl, internalToken } = require('./config');

async function forward(req, res, targetPath, { internal = false } = {}) {
  const headers = { 'content-type': 'application/json' };
  if (req.headers.authorization) headers.authorization = req.headers.authorization;
  if (internal) headers['x-internal-token'] = internalToken;
  const init = { method: req.method, headers };
  if (req.method !== 'GET' && req.method !== 'HEAD') init.body = JSON.stringify(req.body ?? {});
  try {
    const response = await fetch(`${coreUrl}${targetPath}`, init);
    const text = await response.text();
    res.status(response.status);
    res.type(response.headers.get('content-type') || 'application/json');
    return res.send(text);
  } catch (e) {
    return res.status(502).json({ error: 'Core service unavailable' });
  }
}

module.exports = { forward };
