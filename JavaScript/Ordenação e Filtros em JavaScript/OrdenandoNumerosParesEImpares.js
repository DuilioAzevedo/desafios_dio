/**Desafio
Crie um programa onde você receberá valores inteiros não negativos como entrada.

Ordene estes valores de acordo com o seguinte critério:

Primeiro os Pares
Depois os Ímpares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.

Entrada
A primeira linha de entrada contém um único inteiro positivo N (1 < N < 10000) Este é o número de linhas de entrada que vem logo a seguir. As próximas N linhas terão, cada uma delas, um valor inteiro não negativo.

Saída
Exiba todos os valores lidos na entrada segundo a ordem apresentada acima. Cada número deve ser impresso em uma linha, conforme exemplo de saída abaixo.

 
Exemplo de Entrada	Exemplo de Saída
10
4
32
34
543
3456
654
567
87
6789
98

4
32
34
98
654
3456
6789
567
543
87 */

let totalItems = parseInt(gets());
let items = [];


for (let i = 0; i < totalItems; i++) {
  items.push(parseInt(gets()));
}


const even = items.filter(item => item % 2 === 0).sort((a, b) => a - b)
const odd = items.filter(item => item % 2 !== 0).sort((a, b) => b - a)


items = [...even, ...odd]
items.forEach(item => console.log(item))