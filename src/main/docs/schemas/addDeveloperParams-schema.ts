export const updateDeveloperParamsSchema = {
  type: 'object',
  properties: {
    nome: {
      type: 'string'
    },
    sexo: {
      type: 'string'
    },
    idade: {
      type: 'number'
    },
    hobby: {
      type: 'string'
    },
    datanascimento: {
      type: 'string'
    }
  }
}
