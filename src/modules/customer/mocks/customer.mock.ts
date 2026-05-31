export const customerHomeMock = {
  customer: {
    id: 'cust_001',
    firstName: 'Pablo',
    fullName: 'Pablo Valverde',
  },
  membership: {
    status: 'active',
    tier: {
      code: 'gold',
      name: 'Gold',
    },
  },
  wallet: {
    availablePoints: 15200,
    expiringPoints: 1200,
    expiringAt: '2026-06-30',
  },
  tierProgress: {
    current: 'Gold',
    next: 'Platinum',
    progressPercentage: 68,
    missingPoints: 3200,
  },
  recentActivity: [
    {
      id: 'trx_001',
      type: 'earn',
      description: 'Compra en comercio asociado',
      points: 450,
      occurredAt: '2026-05-28T12:30:00Z',
    },
  ],
  primaryAction: {
    label: 'Ver wallet',
    target: '/wallet',
  },
};

export const customerProfileSummaryMock = {
  customer: {
    id: 'cust_001',
    documentType: 'RUT',
    documentNumberMasked: '12.***.***-K',
    fullName: 'Pablo Valverde',
    email: 'pablo@example.com',
    phoneMasked: '+56 9 **** 1234',
  },
  membership: {
    status: 'active',
    joinedAt: '2025-07-14',
    tier: {
      code: 'gold',
      name: 'Gold',
    },
  },
};

export const customerWalletMock = {
  summary: {
    availablePoints: 15200,
    pendingPoints: 300,
    expiringPoints: 1200,
    expiringAt: '2026-06-30',
  },
  movements: [
    {
      id: 'mov_001',
      type: 'earn',
      category: 'purchase',
      description: 'Compra en tienda partner',
      points: 450,
      balanceAfter: 15200,
      occurredAt: '2026-05-28T12:30:00Z',
    },
    {
      id: 'mov_002',
      type: 'expire',
      category: 'expiration',
      description: 'Vencimiento mensual',
      points: -120,
      balanceAfter: 14750,
      occurredAt: '2026-05-01T00:00:00Z',
    },
  ],
  pagination: {
    page: 1,
    pageSize: 20,
    total: 138,
  },
};
