new Vue({
  el: '#desafio',
  data: {
    valor: 0
  },
  computed: {
    resultado() {
      return this.valor == 37 ? 'Valor Diferente' : 'Igual a 37'
    }
  },
  watch: {
    resultado() {
      setTimeout(() => {
        // PRESTAR ATENÇAO NA SINTAXE - EVITAR ERROS DE DIGITAÇAO
        this.valor = 0
      }, 5000)
    }
  }
})
