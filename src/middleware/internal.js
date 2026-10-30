const crypto = require('crypto');
const { internalToken } = require('./config');

function requireInternal(req, res, next) {
  const provided = req.headers['x-internal-token'];
  if (typeof provided !== 'string') return res.status(401).json({ error: 'Unauthorized' });
  const expectedBuf = Buffer.from(internalToken);
  const providedBuf = Buffer.from(provided);
  if (expectedBuf.length !== providedBuf.length || !crypto.timingSafeEqual(expectedBuf, providedBuf)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  return next();
}

module.exports = { requireInternal };
