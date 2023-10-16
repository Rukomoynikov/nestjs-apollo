import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, MaxLength } from 'class-validator';

@InputType()
export class CreateUserDto {
  @Field()
  @MaxLength(255)
  @IsEmail()
  email: string;

  @Field()
  @MaxLength(255)
  password: string;

  @Field()
  @MaxLength(255)
  name: string;

  @Field({ defaultValue: 'user' })
  @MaxLength(255)
  status: string;
}
