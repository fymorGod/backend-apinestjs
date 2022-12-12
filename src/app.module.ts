import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://fylip:231199@cluster0.k8xptum.mongodb.net/test')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
