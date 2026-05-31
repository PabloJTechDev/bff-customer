import type { IntegrationStatusDto } from '../../../common/dto/integration-status.dto';

export interface CustomerProfileSummaryResponseDto {
  customer: {
    id: string;
    documentType: string;
    documentNumberMasked: string;
    fullName: string;
    email: string;
    phoneMasked: string;
  };
  membership: {
    status: string;
    joinedAt: string;
    tier: {
      code: string;
      name: string;
    };
  };
  source: 'mock' | 'core-customer';
  integrations: {
    coreCustomer: IntegrationStatusDto;
  };
}
