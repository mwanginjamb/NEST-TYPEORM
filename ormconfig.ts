import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions = {
    type: "sqlite",
    database: 'db',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: true, //  show be false for prod env.
    migrations: [
        'dist/src/db/migrations/*.js'
    ],
    cli: {
        migrationsDir: 'src/db/migrations'
    }
}

export default config;