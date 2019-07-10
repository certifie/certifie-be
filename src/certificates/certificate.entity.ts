import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Certificate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 25})
  title: string;

  @Column({length: 100})
  description: string;

  @Column({length: 100})
  authority: string;
}
