import Koa from 'koa';
import koaBody from 'koa-body';
import koaCors from '@koa/cors';
import Router from '@koa/router';
import objectRouter from './routers/object-router';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = 'Main API Endpoint';
});

app.use(koaCors({
  origin: '*',
}));
app.use(koaBody());
app.use(router.routes());
app.use(objectRouter.routes());

export { app };