/**Desafio
Pedra-papel-tesoura-lagarto-Spock é uma expansão do clássico método de seleção em jogo de pedra-papel-tesoura. Atua sob o mesmo princípio básico, mas inclui outras duas armas adicionais: o lagarto (formado pela mão igual a uma boca de fantoche) e Spock (formada pela saudação dos vulcanos em Star Trek). Isso reduz as chances de uma rodada terminar em um empate. O jogo foi inventado por Sam Kass e Karen Bryla, como "Rock Paper Scissors Lizard Spock". As regras de vantagem são as seguintes:

Tesoura corta papel
Papel cobre pedra
Pedra derruba lagarto
Lagarto adormece Spock
Spock derrete tesoura
Tesoura prende lagarto
Lagarto come papel
Papel refuta Spock
Spock vaporiza pedra
Pedra quebra tesoura
Um dia, duas amigas, Fernanda e Marcia, decidiram apostar quem pagaria um almoço para o outro, com esta brincadeira. Sua missão será fazer um algoritmo que, baseado no que eles escolherem, informe quem irá ganhar ou se dará empate.

Entrada
Haverá diversos casos de teste. O primeiro número a ser lido será um inteiro, representando a quantidade de casos de teste. Cada caso de teste tem duas palavras, representando a escolha de Fernanda e de Marcia, respectivamente.

Saída
Para cada caso de teste, imprima quem venceu, ou se houve empate.

 
Exemplo de Entrada	Exemplo de Saída
3

spock spock

tesoura spock

lagarto spock

empate

Marcia

Fernanda */

const weaponAdvantages = {
    tesoura: ['papel',   'lagarto'],
    papel:   ['pedra',     'spock'],
    pedra:   ['lagarto', 'tesoura'],
    lagarto: ['papel',     'spock'],
    spock:   ['tesoura',   'pedra'],
}

let nCases = '';

while(true)
{
     nCases = gets() 
  

    if (!nCases || nCases === '' || nCases <= 0) break;
  


    for (let i = 1; i <= nCases; i++)
    {
        const [Fernanda, Marcia] = gets().split(' ') 
//        
        if (Fernanda === Marcia){
            console.log('empate')
        }
        else if (weaponAdvantages[Fernanda].includes(Marcia)) {
            console.log('fernanda');
        }
        else {
            console.log('marcia');
        }
    }
}
