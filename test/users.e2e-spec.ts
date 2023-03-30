/* import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Problem } from './../src/problems/entities/problem.entity';
import { CreateProblemDto } from './../src/problems/dto/create-problem.dto';
import { UserEntity } from 'src/authentication/entities/user';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  let userRepository: Repository<UserEntity>;
  let connection: Connection;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    userRepository = moduleFixture.get(getRepositoryToken(UserEntity));

    connection = moduleFixture.get(Connection);
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await moduleFixture.close();
  });

  describe('GET Users', () => {
    it('should retrieve all users (GET)', async () => {
      // Arrange
      await Promise.all([
        // need to create a create-user.dto.ts
        await userRepository.insert(new CreateUserDto('test1')),
        // need to create a create-user.dto.ts
        await userRepository.insert(new CreateUserDto('test2')),
      ]);

      // Act
      const { body }: { body: UserEntity[] } = await request(
        app.getHttpServer(),
      )
        .get('/users')
        .expect(200);

      // Assert (expect)
      expect(body.length).toEqual(2);
      expect(body[0].username).toEqual('//insert user here');
    });
  });

  describe('POST users', () => {
    it('should create a new user (POST)', async () => {
      // need to create a create-user.dto.ts
      const user = new CreateUserDto('test test 1');

      const { body }: { body: UserEntity } = await request(app.getHttpServer())
        .post('/users')
        .send(user)
        .expect(201);

      expect(body.username).toEqual('//insert user here');
    });
  });

  afterAll(() => {
    app.close();
  });
});
 */
