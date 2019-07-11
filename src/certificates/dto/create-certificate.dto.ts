import { IsString } from 'class-validator';

export class CreateСertificateDTO {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly authority: string;
}
