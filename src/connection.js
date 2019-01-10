"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const promise_1 = require("./promise");
exports.connectionPromise = promise_1.promise((resolve) => {
    const connection = mysql_1.default.createConnection({
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
