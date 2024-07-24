import { IsString } from "class-validator";

export class CreateCourseDto {
    @IsString()
    title: string
    // @IsString()
    // cover?: string
    @IsString()
    duration: string
    @IsString()
    desc: string
    @IsString()
    price: string
}
