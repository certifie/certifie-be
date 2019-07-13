import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { CertificateDTOValidator } from '../certificates/validators/CertificateDTO.validator';

@Controller()
export class UserController {
  constructor(private readonly userSvc: UserService) {}

  @Get('users')
  async getUsers() {
    return await this.userSvc.getUsers();
  }

  @Post('login')
  async login(@Body(new CertificateDTOValidator()) data: UserDTO) {
    return await this.userSvc.login(data);
  }

  @Post('register')
  async register(@Body(new CertificateDTOValidator()) data: UserDTO) {
    return await this.userSvc.register(data);
  }

}
