import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, UpdateDateColumn } from 'typeorm';
import { Banker } from './banker';
import { Transaction } from './transaction';
import { Person } from './utils/person';

@Entity('client')
export class Client extends Person {
  @Column({
    type: 'numeric',
  })
  ballance: number;

  @Column({
    default: true,
  })
  isActive: boolean;

  @Column({
    type: 'simple-json',
    nullable: true,
  })
  additionalInfo: {
    age: number;
    hairColor: string;
  }

  @Column({
    type: 'simple-array',
    default: [],
  })
  familyMembers: Array<string>;

  @OneToMany(
    () => Transaction,
    transaction => transaction.client
  )
  @JoinColumn({
    name: 'transaction_id',
  })
  transactions: Transaction[];

  @ManyToMany(
    () => Banker,
  )
  bankers: Banker[];

  @Column({
    type: 'time with time zone',
    nullable: true,
  })
  ttt: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
