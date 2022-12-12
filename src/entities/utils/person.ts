import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  middleName: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    unique: true,
    length: 10,
  })
  cardNumber: string;
}
