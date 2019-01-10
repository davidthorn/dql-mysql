"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise = function (executor) {
    return new Promise(executor);
};
