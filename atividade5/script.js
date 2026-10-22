function maior(){
    let numero1;
    let numero2;

    numero1 = Number(prompt("Digite o primeiro número:"));
    numero2 = Number(prompt("Digite o segundo número:"));

    if(numero1 > numero2){
        alert("O número " + numero1 + " é maior que " + numero2 + ".");
    }else if(numero1 < numero2){
        alert("O " + numero1 + " é menor que " + numero2 + ".");
    }else{
        alert("Os números são iguais.");
    }
}
