import { Injectable } from '@nestjs/common';
import { CustomerService } from './modules/customer/customer.service';

@Injectable()
export class AppService {
  constructor(private readonly customerService: CustomerService) {}

  getHealth() {
    return {
      status: 'ok',
      service: 'bff-customer',
    };
  }

  getReadiness() {
    return this.customerService.getReadiness();
  }
}
