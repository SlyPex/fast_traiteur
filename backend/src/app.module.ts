import { Module } from '@nestjs/common';
import { UserResModule } from './User_Res/userRes.module';


@Module({
  imports: [UserResModule],
})
export class AppModule {}
