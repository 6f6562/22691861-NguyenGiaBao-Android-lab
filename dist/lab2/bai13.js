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
exports.handleError = void 0;
const bai5_1 = require("./bai5");
const handleError = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, bai5_1.simulateTask)(1000);
        console.log("Bai 13:", result);
    }
    catch (error) {
        console.error("Bai 13 Error:", error);
    }
});
exports.handleError = handleError;
