import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CertificatesModule } from './certificates/certificates.module';
import { CertificateEntity } from './certificates/certificate.entity';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'certifie',
      synchronize: true,
      logging: true,
      entities: [CertificateEntity, UserEntity],
    }),
    CertificatesModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
