import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { hash } from 'bcryptjs';

@Injectable()
export class UserService {

  constructor(private database: DatabaseService) { }

  async create(createUserDto: CreateUserDto) {
    
    const {email,firstName,lastName,password:pws,phone} = createUserDto
    const veryUser = await this.database.user.findUnique({
      where:{
        email
      },
    })

    const verPhone = await this.database.profile.findUnique({
      where:{
        phone,
      }
    })

    if(verPhone)throw new ConflictException("phone") 
    if(veryUser) throw new ConflictException("email") 
      
    const create = await this.database.user.create({
      data: {
        email,
        firstName,
        lastName,
        password: await hash(pws, 12),
        profile:{
          create:{
            phone,
          }
        }
      }
    });

    const {password,...result} =create
    return result
  }

  findAll() {
    return this.database.user.findMany({
      include:{
        profile: true
      }
    });
  }

  async findOne(id: string) {
    const user = await this.database.user.findUnique({
      where:{
        id,
      },
      include:{
        profile: true
      }
    });

    if(!user) throw new NotFoundException("Usúraio não encontrado")
    
   const {password,...result}= user;
   return result
  }

  
  findByEmail(email: string) {
    return this.database.user.findUnique({
      where:{
        email,
      }
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const {firstName,lastName,phone} = updateUserDto
    return this.database.user.update({
      where:{
        id
      },
      data: updateUserDto
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
