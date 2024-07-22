import {IsEmail, IsString,IsEmpty, IsNotEmpty} from 'class-validator'
export class CreateUserDto {

    @IsString()
    firstName: string
    @IsString({message: "O campo tem de ser uma string"})
    @IsNotEmpty({message: "Campo obrigatorio"})
    lastName: string
    @IsEmail()
    email: string
    @IsString()
    phone: string
    @IsString()
    password: string
}
