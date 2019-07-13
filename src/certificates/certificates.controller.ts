import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CreateСertificateDTO } from './dto/create-certificate.dto';
import { CertificateDTOValidator } from './validators/CertificateDTO.validator';

@Controller('certificates')
export class CertificatesController {
  constructor(private readonly certificatesSvc: CertificatesService) {}

  @Get()
  async getCertificates() {
    return await this.certificatesSvc.getCertificates();
  }

  @Get(':certificateId')
  async getCertificate(@Param('certificateId') certificateId) {
    return await this.certificatesSvc.getCertificate(certificateId);
  }

  @Put(':certificateId')
  async updateCertificate(@Body(new CertificateDTOValidator()) createCertificateDTO: CreateСertificateDTO, @Param('certificateId') certificateId) {
    return await this.certificatesSvc.updateCertificate(createCertificateDTO, certificateId);
  }

  @Post()
  async addCertificate(@Body(new CertificateDTOValidator()) createCertificateDTO: CreateСertificateDTO) {
    return await this.certificatesSvc.addCertificate(createCertificateDTO);
  }

  @Delete(':certificateId')
  async deleteCertificate(@Param('certificateId') certificateId) {
    return await this.certificatesSvc.deleteCertificate(certificateId);
  }
}
