"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationObjectError = exports.validateOrganizationObject = void 0;
;
var OrganizationObjectError;
(function (OrganizationObjectError) {
    OrganizationObjectError["MISSING_ORG_ID"] = "Missing organizationId field";
    OrganizationObjectError["MISSING_OBJ_ID"] = "Missing objectId field";
    OrganizationObjectError["MISSING_NAME"] = "Missing name field";
})(OrganizationObjectError || (OrganizationObjectError = {}));
exports.OrganizationObjectError = OrganizationObjectError;
/**
 * Validates an object as OrganizationObject.
 * @param { any } object The object to validate.
 * @return { Array<OrganizationObjectError> }
 * An array containing validaton errors.
 */
const validateOrganizationObject = (object) => {
    const missingOrganizationIdProp = !('organizationId' in object);
    const missingObjectIdProp = !('objectId' in object);
    const missingNameProp = !('name' in object);
    const errors = [];
    if (missingOrganizationIdProp) {
        errors.push(OrganizationObjectError.MISSING_ORG_ID);
    }
    if (missingObjectIdProp) {
        errors.push(OrganizationObjectError.MISSING_OBJ_ID);
    }
    if (missingNameProp) {
        errors.push(OrganizationObjectError.MISSING_NAME);
    }
    return errors;
};
exports.validateOrganizationObject = validateOrganizationObject;
