//& --------------------evitar la recarga de la pagina-------------------------
function submitForm(event){
    event.preventDefault();
}

//& -----------------código del cuadrado--------------------------
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " Cm.");
console.group("Cuadrados");//abre el grupo de log

function perimetroCuadrado(lado) {
    return lado * 4;
}


// console.log("El perimetro de mi cuadrado es: " + perimetroCuadrado + " Cm.");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado (lado){
    return lado * lado;
}
// console.log("El Area de mi cuadrado es: " + areaCuadrado + " Cm².");
console.groupEnd();//cierra los grupos del log

//&----------------código del triangulo---------------------------

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
// const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2;

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.group("Triángulos");
// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + " Cm, " + ladoTriangulo2 + " Cm, " + baseTriangulo + " Cm.");
// console.log("La altura del triangulo es: " + alturaTriangulo + " Cm.");
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + " Cm");
// console.log("El Area del triangulo es: " + areaTriangulo + " Cm².");
console.groupEnd();
//&----------------código del Círculos---------------------------

console.group("Círculos");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const PI = Math.PI;
// const perimetroCirculo = diametroCirculo * PI;
// const areaCirculo = (radioCirculo * radioCirculo) * PI;

// console.log("El radio del Círculo es: " + radioCirculo + " Cm.");
// console.log("El diametro del Círculo es: " + diametroCirculo + " Cm.");
// console.log("El perimetro del Círculo es: " + perimetroCirculo + " Cm.");
// console.log("El area del Círculo es: " + areaCirculo + " Cm².");
console.groupEnd();

function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

//========================================================================================
//& ---------------------Buttons Cuadrado--------------------------


function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    const calPerimetroP = document.getElementById("calPerimetroP");
    calPerimetroP.innerText = "El Perimetro del Cuadrado es: " + perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    const calAreaP = document.getElementById("calAreaP");
    calAreaP.innerText = "El Área del Cuadrado es: " + area;
}
//& ---------------------Buttons Triangulo-------------------------
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const lado1 = Number(input1.value)

    const input2 = document.getElementById("InputTriangulo2");
    const lado2 = Number(input2.value);

    const input3 = document.getElementById("InputTrianguloBase");
    const base = Number(input3.value);

    const perimetroT = perimetroTriangulo(lado1,lado2,base);

    const calPeriT = document.getElementById("calPeriT");
    calPeriT.innerText = "El Perimetro del Triangulo es: " + perimetroT;
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("InputTrianguloBase");
    const base = Number(input3.value);
    console.log(base);

    const inputA = document.getElementById("InputTrianguloAlto");
    const altura = Number(inputA.value);

    const area = areaTriangulo(base, altura);

    const calAreaT = document.getElementById("calAreaT");
    calAreaT.innerText = "El Área del Triangulo es: " + area;
}
//& ---------------------Buttons Circulo-------------------------
function calcularDiametroCirculo(){
    const input = document.getElementById("InputRadio");
    const radio = Number(input.value);

    const diametro = diametroCirculo(radio);
    const calDiameCir = document.getElementById("calDiameCir");
    calDiameCir.innerText = "El diametro del Circulo es de : "+ diametro;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const radio = Number(input.value);

    const perimetro = perimetroCirculo(radio);
    const calPeriCir= document.getElementById("calPeriCir");
    calPeriCir.innerText = "El Perimetro del Circulo es de: " + perimetro;
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const radio = Number(input.value);

    const area = areaCirculo(radio);
    const CalAreaCir = document.getElementById("CalAreaCir");
    CalAreaCir.innerText = "El Área del Circulo es de: " + area;
}