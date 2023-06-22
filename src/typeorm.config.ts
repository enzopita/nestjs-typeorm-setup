import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';

import { databaseConfig } from './config/database';

// Use ConfigModule to load database configuration from .env files
ConfigModule.forRoot({
  envFilePath: ['.env.development.local', '.env.development'],
});

const config = databaseConfig();
const dataSource = new DataSource(config);

export default dataSource;
