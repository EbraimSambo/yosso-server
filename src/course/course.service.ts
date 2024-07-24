import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CourseService {
  constructor(private database: DatabaseService){}
  async create(createCourseDto: CreateCourseDto, id: string) {

    // const {cover,desc,duration,title,price} = createCourseDto
    const user = await this.database.user.findUnique({
      where:{
        id
      }
    })
    return await this.database.course.create({
      data:{ 
        ...createCourseDto,
        userId: id,
      }
    });
  }

  findAll() {
    return `This action returns all course`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
