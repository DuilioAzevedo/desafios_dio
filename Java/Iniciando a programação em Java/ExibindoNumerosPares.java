/*Desafios
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

import java.util.Scanner;
import java.util.stream.IntStream;

public class ExibindoNumerosPares {
    public static void main(String[] args) {
        int number = new Scanner(System.in).nextInt();
        getPositivePairsUntilNumber(number).forEach(System.out::println);
    }

    public static IntStream getPositivePairsUntilNumber(int number) {
        IntStream pairNumbers = IntStream.rangeClosed(1, number);
        return pairNumbers.filter(x -> x % 2 == 0);
    }
}