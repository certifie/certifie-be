import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CreateСertificateDTO } from './dto/create-certificate.dto';

@Controller('certificates')
export class CertificatesController {
  constructor(private certificatesSvc: CertificatesService) {}

  @Get()
  async getCertificates() {
    return await this.certificatesSvc.getCertificates();
  }

  @Get(':certificateId')
  async getCertificate(@Param('certificateId') certificateId) {
    return await this.certificatesSvc.getCertificate(certificateId);
  }

  @Put(':certificateId')
  async updateCertificate(@Body() createCertificateDTO: CreateСertificateDTO, @Param('certificateId') certificateId) {
    return await this.certificatesSvc.updateCertificate(createCertificateDTO, certificateId);
  }

  @Post()
  async addCertificate(@Body() createCertificateDTO: CreateСertificateDTO) {
    return await this.certificatesSvc.addCertificate(createCertificateDTO);
  }

  @Delete()
  async deleteCertificate(@Query() query) {
    return await this.certificatesSvc.deleteCertificate(query.certificateId);
  }
}
