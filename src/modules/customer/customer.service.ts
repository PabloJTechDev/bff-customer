import { Injectable } from '@nestjs/common';
import { CoreCustomerClient } from './clients/core-customer.client';
import {
  customerHomeMock,
  customerProfileSummaryMock,
  customerWalletMock,
} from './mocks/customer.mock';
import type { CustomerHomeResponseDto } from './dto/customer-home-response.dto';
import type { CustomerProfileSummaryResponseDto } from './dto/customer-profile-summary-response.dto';
import type { CustomerWalletResponseDto } from './dto/customer-wallet-response.dto';

@Injectable()
export class CustomerService {
  constructor(private readonly coreCustomerClient: CoreCustomerClient) {}

  async getHome(): Promise<CustomerHomeResponseDto> {
    const coreStatus = await this.coreCustomerClient.ping();

    return {
      ...customerHomeMock,
      source: coreStatus.available ? 'core-customer' : 'mock',
      integrations: {
        coreCustomer: coreStatus,
      },
    };
  }

  async getProfileSummary(): Promise<CustomerProfileSummaryResponseDto> {
    const coreStatus = await this.coreCustomerClient.ping();

    return {
      ...customerProfileSummaryMock,
      source: coreStatus.available ? 'core-customer' : 'mock',
      integrations: {
        coreCustomer: coreStatus,
      },
    };
  }

  async getWallet(): Promise<CustomerWalletResponseDto> {
    const coreStatus = await this.coreCustomerClient.ping();

    return {
      ...customerWalletMock,
      source: coreStatus.available ? 'core-customer' : 'mock',
      integrations: {
        coreCustomer: coreStatus,
      },
    };
  }

  async getReadiness() {
    const coreCustomer = await this.coreCustomerClient.ping();

    return {
      status: coreCustomer.available ? 'ready' : 'degraded',
      service: 'bff-customer',
      integrations: {
        coreCustomer,
      },
    };
  }
}
