import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import type { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { registerAs } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const databaseConfig = registerAs('database', () => {
  return {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
    logging: process.env.DATABASE_LOGGING === 'true',
    ssl: process.env.DATABASE_SSL === 'true',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/database/migrations/*.js'],
    namingStrategy: new SnakeNamingStrategy(),
    autoLoadEntities: true,
  } as PostgresConnectionOptions & TypeOrmModuleOptions;
});
