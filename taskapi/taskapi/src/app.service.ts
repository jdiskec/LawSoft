import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCasos() {
    return [
      { id: 1, exp: '2024-001', cliente: 'Juan Carlos Mendoza' },
      { id: 2, exp: '2024-025', cliente: 'TechCorp S.A.' },
      { id: 3, exp: '2023-198', cliente: 'María López' }
    ];
  }
}
