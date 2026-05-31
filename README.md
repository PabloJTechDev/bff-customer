# bff-customer

Backend for Frontend para la experiencia customer de loyalty.

## Objetivo
Exponer payloads orientados a experiencia para el frontend, sin acoplar la UI al modelo interno del core.

## Stack
- NestJS
- TypeScript
- Axios / HttpModule

## Estado actual
MVP funcional con endpoints customer, health y readiness.

## Endpoints disponibles
- `GET /api/health`
- `GET /api/ready`
- `GET /api/v1/customer/home`
- `GET /api/v1/customer/profile-summary`
- `GET /api/v1/customer/wallet`

## Integración actual
Hoy el BFF funciona con mocks alineados al contrato del core, mientras el equipo Go implementa `core-customer`.

## Variables de entorno
Copiar `.env.example` y ajustar si corresponde:

```bash
cp .env.example .env
```

Variables principales:
- `PORT=3002`
- `CORE_CUSTOMER_BASE_URL=http://localhost:3001`

## Ejecutar localmente
```bash
npm install
npm run start:dev
```

## Build
```bash
npm run build
```

## Arquitectura
- patrón BFF
- arquitectura modular por feature
- integración hacia `core-customer`
- payloads diseñados por experiencia, no por CRUD

## Contratos relacionados
Ver documentación transversal en `../docs/architecture/` dentro del workspace principal:
- `customer-experience-map.md`
- `core-customer-contract.md`
- `architecture-decision.md`
