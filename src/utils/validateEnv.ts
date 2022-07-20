import { cleanEnv, str, port } from 'envalid';

function validateEnv(): void {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ['development', 'production'],
        }),
        MONGODB_HOST: str(),
        MONGO_DATABASE: str(),
        MONGODB_PORT: str(),
        PORT: port({ default: 3000 }),
    });
}

export default validateEnv;
