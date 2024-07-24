import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { DatabaseService } from 'src/database/database.service';
export declare class CourseService {
    private database;
    constructor(database: DatabaseService);
    create(createCourseDto: CreateCourseDto, id: string): Promise<{
        id: string;
        title: string;
        desc: string | null;
        cover: string | null;
        duration: string | null;
        price: string;
        mode: import(".prisma/client").$Enums.Mode;
        userId: string;
        createAt: Date;
        updatedAt: Date;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCourseDto: UpdateCourseDto): string;
    remove(id: number): string;
}
