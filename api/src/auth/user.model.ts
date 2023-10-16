import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { UserStatus } from '@prisma/client';

registerEnumType(UserStatus, {
  name: 'UserStatus',
});

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field()
  email: string;

  @Field({ defaultValue: 'user' })
  status: UserStatus;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
