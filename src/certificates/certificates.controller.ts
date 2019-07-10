import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CreateСertificateDTO } from './dto/create-certificate.dto';

@Controller('certificates')
export class CertificatesController {
  constructor(private certificatesSvc: CertificatesService) {}

  @Get()
  async getCertificates() {
    return await this.certificatesSvc.getCertificates();
  }

  @Get(':bookId')
  async getCertificate(@Param('bookId') bookId) {
    return await this.certificatesSvc.getCertificate(bookId);
  }

  @Post()
  async addCertificate(@Body() createCertificateDTO: CreateСertificateDTO) {
    return await this.certificatesSvc.addCertificate(createCertificateDTO);
  }

  @Delete()
  async deleteCertificate(@Query() query) {
    return await this.certificatesSvc.deleteCertificate(query.bookId);
  }
}
