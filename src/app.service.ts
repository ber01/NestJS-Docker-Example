import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  getEmail(): string {
    return 'ber01@naver.com'
  }

  getName(): string {
    return 'KyungHwan, Min'
  }
}
