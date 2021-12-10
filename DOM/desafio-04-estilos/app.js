new Vue({
  el: '#desafio',
  data: {
    classe1: 'destaque',
    perigo: true,
    classe3: '',
    classe4: ''
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        //Se classe1 for = destaque recebe a outra classe caso nao recebe classe destaque
        this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
      }, 2000) // Aqui defino o intervalo
    },
    iniciarProgresso() {},
    setPerigo(event) {
      // Function que recebe o evento
      if (event.target.value == 'true') {
        //Se no evento for true vai setar pra true
        this.perigo = true
      } else if (event.target.value == 'false') {
        // Caso contrário aplica este perigo como falso
        this.perigo = false
      }
    }
  }
})
