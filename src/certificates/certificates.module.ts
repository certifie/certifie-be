import { Module } from '@nestjs/common';
import { CertificatesController } from './certificates.controller';
import { CertificatesService } from './certificates.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CertificateEntity } from './certificate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CertificateEntity])],
  controllers: [CertificatesController],
  providers: [CertificatesService],
})
export class CertificatesModule {}
