/*Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:


Perimetro = XX.X


Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem


Area = XX.X

Entrada
A entrada contém três valores reais.

Saída
O resultado deve ser apresentado com uma casa decimal.

 
Exemplo de Entrada	Exemplo de Saída
6.0 4.0 2.0

Area = 10.0

6.0 4.0 2.1

Perimetro = 12.1 */

fun main(args: Array<String>) {
    
    fun Double.format(digits: Int) = "%.${digits}f".format(this).replace(',','.')
    
   
         val (n1, n2, n3) = readLine()!!.split(" ")

   val a = n1.replace(",",".").toDouble()

   val b = n2.replace(",",".").toDouble()

   val c = n3.replace(",",".").toDouble()
    

//insira as variaveis de acordo com o calculo do perimetro e area 

    val p = ( a + b  +  c).format(1)

    val r = ( ( ( a + b ) * c   / 2 ) ).format(1)

    if ( c  < ( a + b ) &&  b < ( a + c ) &&  a < ( b + c ) ) println("Perimetro = $p")

    else println("Area = $r")
    
}