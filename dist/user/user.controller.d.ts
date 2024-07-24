import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: import(".prisma/client").$Enums.Role;
        createAt: Date;
        updatedAt: Date;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        profile: {
            id: number;
            userId: string;
            phone: string | null;
            avatar: string | null;
            address: string | null;
            bio: string | null;
            verification: string | null;
            isVerificate: boolean | null;
        };
    } & {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        createAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        profile: {
            id: number;
            userId: string;
            phone: string | null;
            avatar: string | null;
            address: string | null;
            bio: string | null;
            verification: string | null;
            isVerificate: boolean | null;
        };
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: import(".prisma/client").$Enums.Role;
        createAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        createAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): string;
}
