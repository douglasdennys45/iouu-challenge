import app from '../../../src/main/config/app'

import request from 'supertest'

describe('Body Parser Middleware', () => {
  test('Should parse body as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      return res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Douglas Dennys' })
      .expect({ name: 'Douglas Dennys' })
  })
})
