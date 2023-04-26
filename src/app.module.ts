import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { S3Module } from './s3/s3.module';

@Module({
  imports: [PostsModule, S3Module],
  controllers: [],
  providers: [],
})
export class AppModule {}
