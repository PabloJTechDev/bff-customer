import { Controller, Get } from '@nestjs/common';
import { CustomerService } from './customer.service';
import type { CustomerHomeResponseDto } from './dto/customer-home-response.dto';
import type { CustomerProfileSummaryResponseDto } from './dto/customer-profile-summary-response.dto';
import type { CustomerWalletResponseDto } from './dto/customer-wallet-response.dto';

@Controller('v1/customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('home')
  getHome(): Promise<CustomerHomeResponseDto> {
    return this.customerService.getHome();
  }

  @Get('profile-summary')
  getProfileSummary(): Promise<CustomerProfileSummaryResponseDto> {
    return this.customerService.getProfileSummary();
  }

  @Get('wallet')
  getWallet(): Promise<CustomerWalletResponseDto> {
    return this.customerService.getWallet();
  }
}
