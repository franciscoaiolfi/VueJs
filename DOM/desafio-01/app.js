new Vue({
  el: '#desafio',
  data: {
    nome: 'Adriana',
    idade: '28',
    imagem:
      'https://www.cupcom.com.br/wp-content/uploads/2020/10/IMAGENS-SITEuv-vuejs.jpg'
  },
  methods: {
    idadeVezes3() {
      return this.idade * 3
    },
    random() {
      return Math.random(0 - 3)
    }
  }
})
