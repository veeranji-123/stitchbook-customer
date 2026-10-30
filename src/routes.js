const express = require('express');
const { forward } = require('../core');
const { requireInternal } = require('../middleware/internal');

const router = express.Router();

router.post('/auth/register/user', (req, res) => forward(req, res, req.originalUrl));
router.post('/auth/login/user', (req, res) => forward(req, res, req.originalUrl));
router.get('/auth/user/:email', (req, res) => forward(req, res, req.originalUrl));
router.get('/auth/phone/:phone', (req, res) => forward(req, res, req.originalUrl));

router.get('/tailors', (req, res) => forward(req, res, req.originalUrl));
router.get('/tailors/:id/availability', (req, res) => forward(req, res, req.originalUrl));
router.get('/tailors/:id/stitching-speeds', (req, res) => forward(req, res, req.originalUrl));
router.get('/tailors/:id/ironing-services', (req, res) => forward(req, res, req.originalUrl));
router.get('/tailors/:id', (req, res) => forward(req, res, req.originalUrl));

router.post('/bookings', (req, res) => forward(req, res, req.originalUrl));
router.get('/bookings/customer', (req, res) => forward(req, res, req.originalUrl));
router.put('/bookings/:id/notes', (req, res) => forward(req, res, req.originalUrl));
router.get('/user/measurements', (req, res) => forward(req, res, req.originalUrl));
router.put('/user/measurements', (req, res) => forward(req, res, req.originalUrl));
router.get('/user/favorites', (req, res) => forward(req, res, req.originalUrl));
router.post('/user/favorites', (req, res) => forward(req, res, req.originalUrl));
router.delete('/user/favorites/:tailorId', (req, res) => forward(req, res, req.originalUrl));
router.get('/ratings/booking/:bookingId', (req, res) => forward(req, res, req.originalUrl));
router.get('/ratings/:tailorId', (req, res) => forward(req, res, req.originalUrl));
router.post('/ratings', (req, res) => forward(req, res, req.originalUrl));
router.get('/measurements', (req, res) => forward(req, res, req.originalUrl));
router.post('/measurements', (req, res) => forward(req, res, req.originalUrl));
router.get('/measurements/:id', (req, res) => forward(req, res, req.originalUrl));
router.put('/measurements/:id', (req, res) => forward(req, res, req.originalUrl));
router.delete('/measurements/:id', (req, res) => forward(req, res, req.originalUrl));
router.get('/bookings/measurements', (req, res) => forward(req, res, req.originalUrl));
router.get('/bookings/:id/measurements', (req, res) => forward(req, res, req.originalUrl));
router.post('/bookings/:id/measurements', (req, res) => forward(req, res, req.originalUrl));
router.get('/bookings/:id/ironing-items', (req, res) => forward(req, res, req.originalUrl));
router.post('/messages', (req, res) => forward(req, res, req.originalUrl));
router.get('/messages/:bookingId', (req, res) => forward(req, res, req.originalUrl));

router.get('/internal/shop-bookings/:tailorId', requireInternal, (req, res) => {
  const actorId = encodeURIComponent(req.query.actorId || '');
  return forward(req, res, `/internal/shop/bookings/${encodeURIComponent(req.params.tailorId)}?actorId=${actorId}`, { internal: true });
});

router.put('/internal/shop-bookings/:id/status', requireInternal, (req, res) => {
  return forward(req, res, `/internal/shop/bookings/${encodeURIComponent(req.params.id)}/status`, { internal: true });
});

router.put('/internal/shop-bookings/:id/notes', requireInternal, (req, res) => {
  return forward(req, res, `/internal/shop/bookings/${encodeURIComponent(req.params.id)}/notes`, { internal: true });
});

router.put('/internal/shop-bookings/:id/payment-status', requireInternal, (req, res) => {
  return forward(req, res, `/internal/shop/bookings/${encodeURIComponent(req.params.id)}/payment-status`, { internal: true });
});

module.exports = router;
