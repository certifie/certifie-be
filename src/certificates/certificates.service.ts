import { Injectable, NotFoundException } from '@nestjs/common';
import { CertificateEntity } from './certificate.entity';
import { CreateСertificateDTO } from './dto/create-certificate.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CertificatesService {
  constructor(
    @InjectRepository(CertificateEntity)
    private readonly certificatesRepository: Repository<CertificateEntity>,
  ) {}

  public async getCertificates(): Promise<CertificateEntity[]> {
    return await this.certificatesRepository.find();
  }

  public async getCertificate(id: string): Promise<CertificateEntity> {
    const certificate = await this.certificatesRepository.findOne({ where: {id}});
    if (!certificate) {
      throw new NotFoundException('Certificate not found!');
    }
    return certificate;
  }

  public async updateCertificate(certificateDTO: CreateСertificateDTO, id: string): Promise<any> {
    await this.certificatesRepository.update({id}, certificateDTO);
    return await this.certificatesRepository.findOne({id});
  }

  public async addCertificate(certificateDTO: CreateСertificateDTO): Promise<CertificateEntity> {
    const certificate = await this.certificatesRepository.create(certificateDTO);
    await this.certificatesRepository.save(certificate);
    return certificate;
  }

  public async deleteCertificate(id: string): Promise<any> {
    const certificate = await this.certificatesRepository.findOne({ where: {id}});
    if (!certificate) {
      throw new NotFoundException('Certificate not found!');
    }

    await this.certificatesRepository.delete({id});
    return certificate;
  }
}
