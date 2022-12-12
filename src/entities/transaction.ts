import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from './client';

export enum TransactionTypes {
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
};

@Entity('transaction')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: TransactionTypes,
  })
  type: TransactionTypes;

  @Column({
    type: 'numeric',
  })
  amount: number;

  @ManyToOne(
    () => Client,
    client => client.transactions
  )
  @JoinColumn({
    name: 'client_id',
  })
  client: Client;
}
