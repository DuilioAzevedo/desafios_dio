/**Desafios
Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

Entrada
Você receberá 1 valor inteiro N, onde N > 0.

Saída
Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 

 
Exemplo de Entrada	Exemplo de Saída
6	
2
4
6 */

valor = parseFloat(gets());
for (let num = 2; num <= valor ; num+= 2 ) {
  console.log(num);
}
