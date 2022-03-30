/* eslint-disable no-unused-vars */
interface IOrganizationObject {
  organizationId: number,
  objectId: number,
  name: string
};

enum OrganizationObjectError {
  MISSING_ORG_ID = 'Missing organizationId field',
  MISSING_OBJ_ID = 'Missing objectId field',
  MISSING_NAME = 'Missing name field'
}

/**
 * Validates an object as OrganizationObject.
 * @param { any } object The object to validate.
 * @return { Array<OrganizationObjectError> }
 * An array containing validaton errors.
 */
const validateOrganizationObject = (object: any): Array<OrganizationObjectError> => {
  const missingOrganizationIdProp = !('organizationId' in object);
  const missingObjectIdProp = !('objectId' in object);
  const missingNameProp = !('name' in object);

  const errors: Array<OrganizationObjectError> = [];

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

export {
  IOrganizationObject,
  validateOrganizationObject,
  OrganizationObjectError,
};
