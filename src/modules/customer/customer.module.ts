import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CoreCustomerClient } from './clients/core-customer.client';

@Module({
  imports: [HttpModule],
  controllers: [CustomerController],
  providers: [CustomerService, CoreCustomerClient],
  exports: [CustomerService],
})
export class CustomerModule {}
