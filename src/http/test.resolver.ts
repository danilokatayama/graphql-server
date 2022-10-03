import { Resolver, Query, Mutation } from '@nestjs/graphql';

@Resolver()
export class TestResolver {
  @Query(() => String)
  helloQuery() {
    return 'Hello World! (Query)';
  }

  @Mutation(() => String)
  helloMutation() {
    return 'Hello World! (Mutation)';
  }
}
