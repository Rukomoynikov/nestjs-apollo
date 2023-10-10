import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { UserStatus } from '@prisma/client';

registerEnumType(UserStatus, {
  name: 'UserStatus',
});

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: number;

  @Field()
  email: string;

  @Field()
  status: UserStatus;
}
