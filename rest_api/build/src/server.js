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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const koa_1 = __importDefault(require("koa"));
const koa_body_1 = __importDefault(require("koa-body"));
const cors_1 = __importDefault(require("@koa/cors"));
const router_1 = __importDefault(require("@koa/router"));
const object_router_1 = __importDefault(require("./routers/object-router"));
const app = new koa_1.default();
exports.app = app;
const router = new router_1.default();
router.get('/', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = 'Main API Endpoint';
}));
app.use((0, cors_1.default)({
    origin: '*',
}));
app.use((0, koa_body_1.default)());
app.use(router.routes());
app.use(object_router_1.default.routes());
