import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../server';

chai.use(chaiHttp);

describe('Users test Suit', () => {
  // this is just a placeholder test case
  it('ensure the base route returns a response', async () => {
    const {
      body: { message },
    } = await chai.request(server).get('/');
    expect(message).to.equal('Welcome to Eventhome');
  });
});
