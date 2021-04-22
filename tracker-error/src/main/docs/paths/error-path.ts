export const error = {
  post: {
    tags: ['Inserir Log de error'],
    summary: 'API para realizar o log de error',
    description: 'Essa rota pode ser executada por **qualquer usuário**',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/errorParams'
          }
        }
      }
    },
    responses: {
      204: {
        description: 'Sucesso',
        content: {
          'application/json': {}
        }
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
