import type { IntegrationStatusDto } from '../../../common/dto/integration-status.dto';

export interface CustomerHomeResponseDto {
  customer: {
    id: string;
    firstName: string;
    fullName: string;
  };
  membership: {
    status: string;
    tier: {
      code: string;
      name: string;
    };
  };
  wallet: {
    availablePoints: number;
    expiringPoints: number;
    expiringAt: string;
  };
  tierProgress: {
    current: string;
    next: string;
    progressPercentage: number;
    missingPoints: number;
  };
  recentActivity: Array<{
    id: string;
    type: string;
    description: string;
    points: number;
    occurredAt: string;
  }>;
  primaryAction: {
    label: string;
    target: string;
  };
  source: 'mock' | 'core-customer';
  integrations: {
    coreCustomer: IntegrationStatusDto;
  };
}
