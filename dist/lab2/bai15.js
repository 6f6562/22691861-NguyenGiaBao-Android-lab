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
exports.callMultiAsyncFunc = void 0;
const bai14_1 = require("./bai14");
const callMultiAsyncFunc = () => __awaiter(void 0, void 0, void 0, function* () {
    const a = yield (0, bai14_1.multiplyBy3After1s)(2);
    console.log("Step 1:", a);
    const b = yield (0, bai14_1.multiplyBy3After1s)(a);
    console.log("Step 2:", b);
    const c = yield (0, bai14_1.multiplyBy3After1s)(b);
    console.log("Step 3:", c);
});
exports.callMultiAsyncFunc = callMultiAsyncFunc;
