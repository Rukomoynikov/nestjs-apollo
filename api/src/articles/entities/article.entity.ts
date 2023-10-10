import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Article {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string | null;

  @Field(() => String)
  body: string;

  @Field(() => Boolean)
  published: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
