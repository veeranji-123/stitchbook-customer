# stitchbook-customer

Customer service for StitchBook. It listens on port **3005**.

A customer signs in here, browses tailor and iron shops together, and creates a booking. The booking row stays in `stitchbook-core`. This service is the public owner of that create path.

The tailor service updates a booking by calling `/internal/shop-bookings` on this service. That route is not exposed by the gateway.

## Public routes

- `POST /api/auth/register/user`
- `POST /api/auth/login/user`
- `GET /api/tailors`
- `POST /api/bookings`
- `GET /api/bookings/customer`

## Run

```bash
cp .env.example .env
npm install
npm start
```
