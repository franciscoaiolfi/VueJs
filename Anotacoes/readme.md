# Propriedades do VueJs

Methods: Podemos passar métodos que serão executados durante um evento no HTML.
Exemplo:
--- Input pra alterar o título.

# Ponto Importante sobre o HTML - - -

Vue cria acessos diretos dentro do template, voce tem acesso direto. Aquilo que vai ser interpolado dentro do seu template, ele vai ler o que ta dentro, e vai susbtituir por um valor textual, pois o html é feito de valores textuais
que sao interpretados pelo navegador.

# DIRETIVAS

PROPRIEDADE PERSONALIZADA QUE NAO É NATIVA DO HTML - Vue usa para alterar valores dessas diretivas, diretivas é basicamente a nomenclatura utilizada pelo VUE.

V-once : Não espera expressão

Renderiza o elemento e componente somente uma vez. Em re-renderizações subsequentes, o elemento/componente e todos seus filhos serão tratados como conteúdo estático e pulados. Isso pode ser usado para otimizar o desempenho da atualização.

Usada para usar quando não necessitamos atualizar e verificar o conteúdo de um trecho de código!!!!!!

# Stop.propagation

# Se mudar o dado no Vue, Altera o HTML gerado!!!!

# Two-Way-Binding

Posso fazer por dois caminhos:

Alterando meu input com as duas propriedades
input
type="text"
v-bind:value="titulo"
v-on:input="titulo = $event.target.value"

Ou utilizando o v-model : V-model:"titulo".

# ------------------ SINTAXE REDUZIDA - SHORHANDS ---------------------------------

      No vue podemos simplificar a sintaxe ainda mais:

      No local onde tenho v-on:click -> @:click Vai funcionar e reduzir
      No local onde tenho v-bind:value=""   ->  :value=""  Vai funcionar e reduzir

# --------------------------------------------------------------------------------

# ------------------------ ARRAYS ------------------#

Estrutura capaz de armazenar conjuto de valores:
