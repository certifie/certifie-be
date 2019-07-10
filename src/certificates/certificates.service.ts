import { HttpException, Injectable } from '@nestjs/common';
import { CERTIFICATES } from '../mocks/ceritificates.mock';
import { Certificate } from './certificate.entity';
import { CreateСertificateDTO } from './dto/create-certificate.dto';

@Injectable()
export class CertificatesService {
  private certificates = CERTIFICATES;

  public getCertificates(): Promise<Certificate[]> {
    return new Promise<any>(resolve => resolve(this.certificates));
  }

  public getCertificate(certificateId: string): Promise<Certificate> {
    const id = Number(certificateId);
    return new Promise<any>(resolve => {
      const certificate = this.certificates.find(selectedCertificate => selectedCertificate.id === id);
      if (!certificate) {
        throw new HttpException('Certificate does not exist!', 404);
      }
      resolve(certificate);
    });
  }

  public updateCertificate(certificateDTO: CreateСertificateDTO, certificateId: string): Promise<Certificate> {
    const id = Number(certificateId);
    return new Promise<any>(resolve => {
      const index = this.certificates.findIndex(book => book.id === id);
      if (index === -1) {
        throw new HttpException('Certificate does not exist!', 404);
      }
      this.certificates[index] = {...certificateDTO};
      resolve(this.certificates[index]);
    });
  }

  public addCertificate(certificate: CreateСertificateDTO): Promise<Certificate[]> {
    return new Promise(resolve => {
      this.certificates = [...this.certificates, certificate];
      resolve(this.certificates);
    });
  }

  public deleteCertificate(certificateId: string): Promise<Certificate[]> {
    const id = Number(certificateId);
    return new Promise(resolve => {
      const index = this.certificates.findIndex(book => book.id === id);
      if (index === -1) {
        throw new HttpException('Certificate does not exist!', 404);
      }
      this.certificates = this.certificates.filter(certificate => certificate.id !== id);
      resolve(this.certificates);
    });
  }
}
