import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('/email')
  getEmail(): string {
    return JSON.stringify({ email: this.appService.getEmail() })
  }

  @Get('/name')
  getName(): string {
    return JSON.stringify({ name: this.appService.getName() })
  }
}
