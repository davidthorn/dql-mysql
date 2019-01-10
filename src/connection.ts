import mysql from 'mysql';
import { promise } from './promise';

export const connectionPromise = promise<mysql.Connection>((resolve) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 32768,
        user: 'david',
        password: '',
        insecureAuth: false,
        debug: false,
        database: 'people'
    });
    resolve(connection);
});
