import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeAddErrorController } from '@/main/factories/controllers/error/add-error-controller-factory'

export default (router): void => {
  router.post('/errors', adaptRoute(makeAddErrorController()))
}