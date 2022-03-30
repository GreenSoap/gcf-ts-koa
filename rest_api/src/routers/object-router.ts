import Router from '@koa/router';
import {
  IOrganizationObject,
  validateOrganizationObject,
} from '../interfaces';

const router = new Router();

router.post('/object', (ctx, next) => {
  const requestBody = ctx.request.body;
  const organizationObjectErrors = validateOrganizationObject(requestBody);

  // Throw 404 if there are any errors in the request body.
  if (organizationObjectErrors.length > 0) {
    ctx.throw(404, organizationObjectErrors.join('\n'));
  }

  const organizationObject: IOrganizationObject = requestBody;

  ctx.status = 200;
  console.log(`POST /object\n` +
  `Name: ${organizationObject.name}\n` +
  `Object ID: ${organizationObject.objectId}\n` +
  `Organization ID: ${organizationObject.organizationId}`);
});

export default router;
