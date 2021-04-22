import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'IOUU - Challenge (Calculator)',
    description: 'Essa é a documentação da API feita por Douglas Dennys para o desafio da IOUU.',
    version: '1.0.0',
    contact: {
      name: 'Douglas Dennys',
      email: 'douglasdennys45@gmail.com',
    }
  },
  servers: [{
    url: '/api',
    description: 'Servidor Principal'
  }],
  paths,
  schemas,
  components
}
