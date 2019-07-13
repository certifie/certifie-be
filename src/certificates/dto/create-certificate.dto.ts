import { IsNotEmpty, IsString } from 'class-validator';

export class CreateСertificateDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly authority: string;
}
