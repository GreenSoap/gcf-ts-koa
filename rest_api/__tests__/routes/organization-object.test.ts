import request from 'supertest';
import {app} from '../../src/server';
import {IOrganizationObject} from '../../src/interfaces';
import config from '../../src/config';

let server: any;

beforeAll(() => {
  server = app.listen(config.port);
})


// This closes the server after the tests
afterEach((done) => {
  server.close();
  done();
});

describe('POST /object with IOrganizationObject body', () => {
  it('should respond with status code 200', () => {
    const body: IOrganizationObject = {
      organizationId: 12,
      objectId: 2,
      name: 'Printer',
    };

    request(server)
        .post('/object')
        .send(body)
        .expect(200);
  });
});

describe('POST /object with missing properties', () => {
  it('should respond with status code 404', () => {
    const body = {
      id: 12,
      printer: 'Printer 2',
    };

    request(server)
        .post('/object')
        .send(body)
        .expect(404);
  });
});
