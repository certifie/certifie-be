import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async getUsers(): Promise<any> {
    const users = await this.userRepository.find();
    return users.map(user => user.toResponseObject());
  }

  public async login(data: UserDTO): Promise<any> {
    const {username, password} = data;
    const user = await this.userRepository.findOne({where: { username }});
    if (!user || !(await user.comparePassword(password))) {
      throw new BadRequestException('Invalid username/password');
    }

    return user.toResponseObject();
  }

  public async register(data: UserDTO): Promise<any> {
    const { username } = data;
    let user = await this.userRepository.findOne({where: { username  }});
    if (user) {
      throw new BadRequestException(`User with username ${username} already exists!`);
    }

    user = await this.userRepository.create(data);
    await this.userRepository.save(user);
    return user.toResponseObject();
  }
}
