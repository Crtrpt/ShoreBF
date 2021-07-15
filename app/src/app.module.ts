import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456Zz..*',
      database: 'shorebf',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
  ]
})
export class AppModule {}
