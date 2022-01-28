/**Desafio
O professor Girafales organizou a confecção de um uniforme para as turmas da escola para comemorar o final do ano. Após algumas conversas, ficou decidido com os alunos que eles poderiam escolher a cor do uniforme entre branco ou vermelho. Assim sendo, Girafales precisa de sua ajuda para organizar as listas de quem quer o uniforme em cada uma das turmas, relacionando estas camisetas pela cor, tamanho (P, M ou G) e por último pelo nome.

Entrada
Cada caso de teste inicia com um valor N, (1 ≤ N ≤ 60) inteiro e positivo, que indica a quantidade de uniformes a serem feitas para aquela turma. As próximas N*2 linhas contém informações de cada um dos uniformes (serão duas linhas de informação para cada uniforme). A primeira linha irá conter o nome do estudante e a segunda linha irá conter a cor do uniforme ("branco" ou "vermelho") seguido por um espaço e pelo tamanho do uniforme "P" "M" ou "G". A entrada termina quando o valor de N for igual a zero (0) e esta valor não deverá ser processado.

Saída
Para cada caso de entrada deverão ser impressas as informações ordenadas pela cor em ordem ascendente, seguido pelos tamanhos em ordem descendente e por último por ordem ascendente de nome, conforme o exemplo abaixo.
 

 
Exemplo de Entrada	Exemplo de Saída
9
Maria Jose
branco P
Mangojata Mancuda
vermelho P
Cezar Torres Mo
branco P
Baka Lhau
vermelho P
JuJu Mentina
branco M
Amaro Dinha
vermelho P
Adabi Finho
branco G
Severina Rigudinha
branco G
Carlos Chade Losna
vermelho P
0

branco P Cezar Torres Mo
branco P Maria Jose
branco M JuJu Mentina
branco G Adabi Finho
branco G Severina Rigudinha
vermelho P Amaro Dinha
vermelho P Baka Lhau
vermelho P Carlos Chade Losna
vermelho P Mangojata Mancuda */

let totalUniformes = gets();

let pedidoCompleto = [];



// Cria lista completa de pedidos

for (var i = 0; i < totalUniformes; i++) {

 let aluno = gets();

 let pedido = gets().split(" ");

 let pedidoIndividual = [];

 pedidoIndividual.push(pedido[0]);

 pedidoIndividual.push(pedido[1]);

 pedidoIndividual.push(aluno);



 pedidoCompleto.push(pedidoIndividual);

}



// Organiza os pedidos por cor, tamanho e nome respectivamente

let pedidoOrganizado = [];



let camisasBrancas = pedidoCompleto.filter(pedido => pedido[0] === "branco");

 let camisasBp = camisasBrancas.filter(pedido => pedido[1] === "P");

   if (camisasBp.length !== 0) {

     camisasBp.sort();

     for (var i = 0; i < camisasBp.length; i++) {

       pedidoOrganizado.push(camisasBp[i].join(" "));

     } 

   }

 let camisasBm = camisasBrancas.filter(pedido => pedido[1] === "M");

   if (camisasBm.length !== 0) {

     camisasBm.sort();

     for (var i = 0; i < camisasBm.length; i++) {

       pedidoOrganizado.push(camisasBm[i].join(" "));

     } 

   }

 let camisasBg = camisasBrancas.filter(pedido => pedido[1] === "G");

   if (camisasBg.length !== 0) {

     camisasBp.sort();

     for (var i = 0; i < camisasBg.length; i++) {

       pedidoOrganizado.push(camisasBg[i].join(" "));

     } 

   }



let camisasVermelhas = pedidoCompleto.filter(pedido => pedido[0] === "vermelho");

 let camisasVp = camisasVermelhas.filter(pedido => pedido[1] === "P");

   if (camisasVp.length !== 0) {

     camisasVp.sort();

     for (var i = 0; i < camisasVp.length; i++) {

       pedidoOrganizado.push(camisasVp[i].join(" "));

     } 

   }

 let camisasVm = camisasVermelhas.filter(pedido => pedido[1] === "M");

   if (camisasVm.length !== 0) {

     camisasVm.sort();

     for (var i = 0; i < camisasVm.length; i++) {

       pedidoOrganizado.push(camisasVm[i].join(" "));

     } 

   }

 let camisasVg = camisasVermelhas.filter(pedido => pedido[1] === "G");

   if (camisasVg.length !== 0) {

     camisasBp.sort();

     for (var i = 0; i < camisasVg.length; i++) {

       pedidoOrganizado.push(camisasVg[i].join(" "));

     } 

   }



// Remove linhas vazias

let resposta = pedidoOrganizado.filter(string => string !== "" && string !== " ");



// Imprime os pedidos, linha por linha

for (var i = 0; i < totalUniformes; i++) {

 console.log(resposta[i]);

}