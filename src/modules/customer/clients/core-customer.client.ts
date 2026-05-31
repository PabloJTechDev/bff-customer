import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import type { IntegrationStatusDto } from '../../../common/dto/integration-status.dto';

@Injectable()
export class CoreCustomerClient {
  private readonly logger = new Logger(CoreCustomerClient.name);
  private readonly baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl =
      this.configService.get<string>('CORE_CUSTOMER_BASE_URL') ??
      'http://localhost:3001';
  }

  getBaseUrl() {
    return this.baseUrl;
  }

  async ping(): Promise<IntegrationStatusDto> {
    try {
      await firstValueFrom(
        this.httpService.get(`${this.baseUrl}/health`, {
          timeout: 1500,
        }),
      );

      return {
        available: true,
        baseUrl: this.baseUrl,
        checkedAt: new Date().toISOString(),
      };
    } catch (error) {
      this.logger.debug(`Core customer unavailable at ${this.baseUrl}`);

      return {
        available: false,
        baseUrl: this.baseUrl,
        checkedAt: new Date().toISOString(),
      };
    }
  }
}
