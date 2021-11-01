/*Leia um número inteiro que representa um código de DDD para discagem interurbana. Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:

 


Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
DDD nao cadastrado

Entrada
A entrada consiste de um único valor inteiro.

Saída
Imprima o nome da cidade correspondente ao DDD existente na entrada. Imprima DDD nao cadastrado caso não existir DDD correspondente ao número digitado.

 
Exemplo de Entrada	Exemplo de Saída
11

Sao Paulo */

import java.util.Map;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class DDD {
    private static final Map<Object, Object> citiesMap = Stream.of(
            new Object[][]{
                    {61, "Brasilia"},
                    {71, "Salvador"},
                    {11, "Sao Paulo"},
                    {21, "Rio de Janeiro"},
                    {32, "Juiz de Fora"},
                    {19, "Campinas"},
                    {27, "Vitoria"},
                    {31, "Belo Horizonte"}
            }).collect(Collectors
            .toMap(ddd -> ddd[0], city -> city[1]));

    public static void main(String[] args) {
        System.out.println(getCorrespondingCityName(new Scanner(System.in).nextInt()));
    }

    public static String getCorrespondingCityName(int ddd) {
        if (citiesMap.containsKey(ddd))
            return (String) citiesMap.get(ddd);
        return "DDD nao cadastrado";
    }
}