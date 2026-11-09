function aleatorio(){
    let min = 1;
    let max = 100;
    let div = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(div * aleatorio);

    let mostrar = document.getElementById('resultado');
    mostrar.innerHTML = `<p>Acabei de pensar no número ${num}.</p>`;
    
    
//usei IA para colocar os memes, no index você vai escontrar: "<img id="meme" src="" style="display: none; width: 250px;">"
    if (num == 67){
    meme.src = "https://media.tenor.com/6COMq6z3l5oAAAAM/bosnov-67.gif";
    meme.style.display = "block";
    alert("você achou o 67");
}
else if (num == 42){
    meme.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Yy-fcNoTXy0_Os-TMCMO7AKZzoIy6GbLUz-WLNrTd81VJ_ksccPv3ps&s=10";
    meme.style.display = "block";
    alert("Você achou o 42");
}
else if (num == 13){
    meme.src = "https://i.pinimg.com/564x/c6/76/f1/c676f192c5cdac95e776aa09d46cb2ff.jpg";
    meme.style.display = "block";
    alert("Você vota no 13?");
}
else if (num == 22){
    meme.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYDe8rJ1Dj7DGpER9Eidn8cfDwS_pRSzkIR2xqEy0tKpXPI0X_8hjbmY&s=10";
    meme.style.display = "block";
    alert("Você vota no 22?");
}

}
