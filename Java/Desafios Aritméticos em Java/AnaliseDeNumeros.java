/*Desafio
Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos. Considere que o número zero é positivo, mas não pode ser considerado como positivo ou negativo.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.

 
Exemplo de Entrada	Exemplo de Saída
-5
0
-3
-4
12

3 par(es)
2 impar(es)
1 positivo(s)
3 negativo(s)*/

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class AnaliseDeNumeros {
    public static final int NUMBER_OF_ENTRIES = 5;
    private final List<Integer> numbers;
    private int pair = 0, negative = 0, positive = 0;

    public AnaliseDeNumeros(List<Integer> numbers) {
        this.numbers = numbers;
        analyzeNumbers();
    }

    public static void main(String[] args) {
        AnaliseDeNumeros numberAnalysis = readEntries();
        System.out.printf(
                "%d valor(es) par(es)\n%d valor(es) impar(es)\n%d valor(es) positivo(s)\n%d valor(es) negativo(s)",
                numberAnalysis.getPairs(),
                numberAnalysis.getOdd(),
                numberAnalysis.getPositives(),
                numberAnalysis.getNegatives()
        );
    }

    private static AnaliseDeNumeros readEntries() {
        Scanner scanner = new Scanner(System.in);
        return new AnaliseDeNumeros(IntStream.rangeClosed(1, NUMBER_OF_ENTRIES)
                .mapToObj(value -> scanner.nextInt())
                .collect(Collectors.toCollection(ArrayList::new)));
    }

    public int getOdd() {
        return NUMBER_OF_ENTRIES - this.pair;
    }

    public int getPositives() {
        return this.positive;
    }

    public int getNegatives() {
        return this.negative;
    }

    public int getPairs() {
        return this.pair;
    }

    private void analyzeNumbers() {
        this.numbers.forEach(number -> {
            this.pair += numberIsPair(number) ? 1 : 0;
            this.negative += numberIsNegative(number) ? 1 : 0;
            this.positive += numberIsPositive(number) ? 1 : 0;
        });
    }

    private static boolean numberIsPair(int number) {
        return number % 2 == 0;
    }

    private static boolean numberIsPositive(int number) {
        return number > 0;
    }

    private static boolean numberIsNegative(int number) {
        return number < 0;
    }
}