import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AuthService } from './auth.service';
import { UserModel } from './user.model';
import { CreateUserDto } from './dto/createUser.dto';
import { SignInDto } from "./dto/signIn.dto";
import { Request } from "express";

@Resolver(() => UserModel)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => [UserModel])
  async allUsers(): Promise<UserModel[]> {
    return this.authService.getAllUsers();
  }

  @Mutation(() => UserModel)
  async createUser(@Args('data') data: CreateUserDto): Promise<UserModel> {
    return this.authService.createUser(data);
  }

  @Mutation(() => UserModel)
  async signIn(@Args('data') data: SignInDto, @Context('req') request: Request) {
    const { user, token } = await this.authService.signIn(data)
    request.res?.cookie('jwt', token, {httpOnly: true})
    return user;
  }

  @Mutation(() => UserModel)
  async signOut(@Context('req') req: Request, @Context('user') user: UserModel) {
    req.res?.clearCookie('jwt', { httpOnly: true })
    return user
  }

  @Query(() => UserModel)
  async me(@Context('user') user: UserModel) {
    return user
  }
}
