let nota1trim;
let nota2trim;
let nota3trim;

function calcular(){
    nota1trim = Number(prompt("digite a nota do primeiro trimestre:"));
    nota2trim = Number(prompt("digite a nota do segundo trimestre"));

    resultado = 180 - (nota1trim + nota2trim);

    if(resultado <= 0){
        alert("parabêns! Você esta aprovado.");
    } else {
        alert("Você precissa se esforçar mais seu burro, você precissa tirar " + resultado + " no terceiro trimestre para ser aprovado.");
    }
}
