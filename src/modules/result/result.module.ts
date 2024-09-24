import { forwardRef, Module } from '@nestjs/common';
import { ResultService } from './services/result.service';
import { ResultController } from './controllers/result.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Result } from './entities/result.entity';
import { Service } from './entities/service.entity';
import { UserModule } from '../user/user.module';
import { ServiceService } from './services/service.service';
import { ServiceController } from './controllers/service.controller';
import { ResultCategory } from './entities/result-category.entity';
import { CategoryService } from './entities/category-service.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Result,
      ResultCategory,
      CategoryService,
      Service,
    ]),
    forwardRef(() => UserModule),
  ],
  controllers: [ResultController, ServiceController],
  providers: [ResultService, ServiceService],
  exports: [TypeOrmModule],
})
export class ResultModule {}
