import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
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
    findOne(id: string): string;
    update(id: string, updateCourseDto: UpdateCourseDto): string;
    remove(id: string): string;
}
