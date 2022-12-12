import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, UpdateDateColumn } from 'typeorm';
import { Client } from './client';
import { Person } from './utils/person';

@Entity('banker')
export class Banker extends Person {
  @Column({
    unique: true,
    length: 10,
  })
  employeeNumber: string;

  @ManyToMany(
    () => Client,
  )
  @JoinTable({
    name: 'banker_clients',
    joinColumn: {
      name: 'banker',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'client',
      referencedColumnName: 'id',
    }
  })
  clients: Client[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
