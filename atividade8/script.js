let contasorte = 0;
let contaazar = 0;

function sorte(){
     let min = 1;
    let max = 100;
    let div = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(div * aleatorio);

    let mostrar = document.getElementById('resultado');

    if(num > 50){
        contasorte++;
        mostrar.innerHTML = `<p>SORTE: ${contasorte}</p><p>AZAR: ${contaazar}</p><img src="https://img.magnific.com/psd-premium/lucky-em-portugues-clover-com-a-palavra-sorte-em-renderizacao-3d_363450-7386.jpg?semt=ais_hybrid&w=740&q=80">`;
    }else{
        contaazar++;
        mostrar.innerHTML = `<p>AZAR: ${contaazar}</p><p>SORTE: ${contasorte}</p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0GzXG76J3NrBrcV9UeDqjCM0IehEMZI_6x3ncrhJIjMPOKSbX6muZKCH&s=10">`;
    }
}
