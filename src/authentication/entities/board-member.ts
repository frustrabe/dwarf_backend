import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from './user';

@Entity()
export class BoardMemberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;
}
