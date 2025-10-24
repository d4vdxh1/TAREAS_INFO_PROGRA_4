//Ejercicio 1
function ejercicio1(){
    var nombre = 'David';
    var edad = 20;
    var ciudad = 'Asunción';
    document.getElementById('resultado1').innerHTML = 'Nombre: '+nombre+'\nEdad: '+edad+'\nCiudad: '+ciudad;
}

//Ejercicio 2
function ejercicio2(){
    var edad = document.getElementById('edadInput').value;
    var resultado = edad * 365;
    document.getElementById('resultado2').innerHTML='Tu edad en días es: ' + resultado;
}

//Ejercicio 3
function ejercicio3(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    if (num1>num2){
        document.getElementById('resultado3').innerHTML= num1 + ' es mayor que '+ num2;
    }else{
        document.getElementById('resultado3').innerHTML= num2 + ' es mayor que '+ num1;
    }
}

//Ejercicio 4
function ejercicio4(){
    var num = document.getElementById('numParImpar').value;
    if (num%2===0){
        document.getElementById('resultado4').innerHTML = num + ' es PAR';
    }else{
        document.getElementById('resultado4').innerHTML = num + ' es IMPAR';
    }
}

//Ejercicio 5
function ejercicio5(){
    var result = '';
    for (var i = 1; i <= 10; i++) {
        result += i + ' ';
    }
    document.getElementById('resultado5').innerHTML = result;
}

//Ejercicio 6
function ejercicio6(){
    var resutl = '';
    var num = 0
    while(num<=20){
        if(num%2===0){
            resutl += num + ' ';
        }
        num ++;
    }
    document.getElementById('resultado6').innerHTML = resutl;
}

//Ejercicio 7
function ejercicio7(){
    var num1 = parseInt(document.getElementById('numSuma1').value);
    var num2 = parseInt(document.getElementById('numSuma2').value);
    var suma  = num1 + num2;
    document.getElementById('resultado7').innerHTML = num1 +' + '+num2+' = '+ suma;
}

//Ejercicio 8
function ejercicio8(){
    var edad = parseInt(document.getElementById('edadMayor').value);
    if(edad>=18){
        document.getElementById('resultado8').innerHTML = 'Es mayor de edad';
    }else{
        document.getElementById('resultado8').innerHTML = 'NO es mayor de edad';
    }
}

//Ejercicio 9
function ejercicio9(){
    let frutas = ["Manzana", "Banana","Frutilla","Pera","Tomate"];
    var primero = frutas[0];
    var ultimo = frutas[frutas.length - 1];
    document.getElementById('array').innerHTML = '[' + frutas.join(', ') + ']';
    document.getElementById('resultado9').innerHTML = 'Primer elemento: '+primero+' | Ultimo elemento: '+ultimo;
}

//Ejercicio 10
function ejercicio10(){
    let numeros = [20,30,10,40,50,90,70,80,60];
    var suma = 0;
    for (let i =0;i<numeros.length;i++){
        suma += parseInt(numeros[i]);
    }
    document.getElementById('array2').innerHTML = '['+numeros.join(',')+']'
    document.getElementById('resultado10').innerHTML = 'La suma de los elemntos es ' + suma;
}