"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const interfaces_1 = require("../interfaces");
const router = new router_1.default();
router.post('/object', (ctx, next) => {
    const requestBody = ctx.request.body;
    const organizationObjectErrors = (0, interfaces_1.validateOrganizationObject)(requestBody);
    // Throw 404 if there are any errors in the request body.
    if (organizationObjectErrors.length > 0) {
        ctx.throw(404, organizationObjectErrors.join('\n'));
    }
    const organizationObject = requestBody;
    ctx.status = 200;
    console.log(`POST /object\n` +
        `Name: ${organizationObject.name}\n` +
        `Object ID: ${organizationObject.objectId}\n` +
        `Organization ID: ${organizationObject.organizationId}`);
});
exports.default = router;
