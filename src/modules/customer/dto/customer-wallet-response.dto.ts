import type { IntegrationStatusDto } from '../../../common/dto/integration-status.dto';

export interface CustomerWalletResponseDto {
  summary: {
    availablePoints: number;
    pendingPoints: number;
    expiringPoints: number;
    expiringAt: string;
  };
  movements: Array<{
    id: string;
    type: string;
    category: string;
    description: string;
    points: number;
    balanceAfter: number;
    occurredAt: string;
  }>;
  pagination: {
    page: number;
    pageSize: number;
    total: number;
  };
  source: 'mock' | 'core-customer';
  integrations: {
    coreCustomer: IntegrationStatusDto;
  };
}
