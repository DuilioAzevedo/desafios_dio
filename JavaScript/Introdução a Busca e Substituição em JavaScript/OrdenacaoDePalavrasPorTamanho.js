/**Desafio
Crie um algoritmo para ordenar um conjunto de palavras pelo seu tamanho. Seu programa deve receber um conjunto de palavras e retornar este mesmo conjunto ordenado pelo tamanho das palavras decrescente, se o tamanho das palavras for igual, deve-se ordernar por ordem alfabética.

Entrada
A primeira linha da entrada possui um único inteiro N, que indica o número de casos de teste. Cada caso de teste poderá conter de 1 a 50 palavras inclusive, e cada uma das palavras poderá conter entre 1 e 50 caracteres inclusive. Os caracteres poderão ser espaços, letras, ou números.

Saída
A saída deve conter o conjunto de palavras da entrada ordenado pelo tamanho das palavras e caso o tamanho das palavras for igual, deve-se ordernar por ordem alfabética.. Um espaço em branco deve ser impresso entre duas palavras.

 
Exemplo de Entrada	Exemplo de Saída
2
One three four mond at midnight
one three five

midnight three four mond One at
three five one */

var size = parseInt(gets())



for(let i=0; i<size; i++){

 let words =[]

  

 words = gets().split(' ')

  

 for(let i=0; i<words.length; i++){

  for(let j = i+1;j<words.length;j++ ){

   if(words[i].length<words[j].length){

    y = words[i]

    words[i]=words[j]

    words[j]=y

   }

  }

 }

 for(let i=0; i<words.length-1;i++){

  for(let j=i+1;j<words.length;j++){

  if(words[i].length == words[j].length){

   if(words[i].localeCompare(words[j])==1){

    y=words[i]

    words[i]=words[j]

    words[j]=y

   }

  }

  }

 }



console.log(words.join(' '))  

  

  

}