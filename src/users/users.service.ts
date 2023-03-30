import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardMemberEntity } from 'src/authentication/entities/board-member';
import { TenantEntity } from 'src/authentication/entities/tenant';
import { UserEntity } from 'src/authentication/entities/user';
import { Repository } from 'typeorm';
import { Role } from './role';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private tenantRepository: Repository<TenantEntity>,
    private boardMemberRepository: Repository<BoardMemberEntity>,
  ) {}

  async findUserById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { id: id } });
  }

  async findOne(username: string): Promise<UserEntity> {
    const result = await this.userRepository.findOne({
      where: { username: username },
      relations: { tenant: true },
    });
    return result;
  }

  async create(username: string, password: string): Promise<User> {
    return this.userRepository.save({ username, password }); // Never save passwords in clear text!
  }

  async create_tenant(
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    birthday: Date,
  ): Promise<TenantEntity> {
    const user: User = { username, password };
    const savedUser = await this.userRepository.save(user);
    const tenant = { firstname, lastname, birthday, user: savedUser };
    const savedTenant = await this.tenantRepository.save(tenant);

    return savedTenant;
    // An example to retrieve data with related data. Can be used for
  }

  async create_board_member(
    username: string,
    password: string,
    role: Role,
    phone: string,
  ): Promise<BoardMemberEntity> {
    const user: User = { username, password, role };
    const savedUser = await this.userRepository.save(user);
    const boardMember = { phone, user: savedUser };
    const savedBoardMember = await this.boardMemberRepository.save(boardMember);

    return savedBoardMember;
    // An example to retrieve data with related data. Can be used for
  }
}
