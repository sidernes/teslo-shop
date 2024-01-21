import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ApiTags } from '@nestjs/swagger';
// import { Auth } from '../auth/decorators';
// import { ValidRoles } from '../auth/interfaces';

@ApiTags('seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  // @Auth(ValidRoles.dbAdmin)
  executeSeed() {
    return this.seedService.runSeed();
  }
}
