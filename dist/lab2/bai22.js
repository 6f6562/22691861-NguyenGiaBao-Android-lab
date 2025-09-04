"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMultipleTodos = void 0;
const fetchMultipleTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    const ids = [1, 2, 3];
    for (const id of ids) {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const todo = yield response.json();
        console.log(`Bai 22 (todo ${id}):`, todo);
    }
});
exports.fetchMultipleTodos = fetchMultipleTodos;
