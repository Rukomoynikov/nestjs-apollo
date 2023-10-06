import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateArticleInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  description?: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  body: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  published?: boolean = false;
}
