//1 - crie uma função que exiba uma mensagem no console
mostrarMsg(mensagem = "Eu estou bem");

function mostrarMsg(mensagem){
    console.log(mensagem);
    // document.write(mensagem);
}



//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
let nome ="Lorena Nogueira";
mostrarNome(nome);

function mostrarNome(nome){
    console.log(nome);
}



//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
let brother = {
    nome: "Brian",
    idade: 16,
    gostoMusical: "pop"

}
mostrarDados(brother);
function mostrarDados(brother){
console.log(brother);
}



//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
let filme = "Filme: A Casa de Vidro   ";
let musica = "Música: House of Memories";

let someInfo = filme + musica;

info(someInfo);
function info(someInfo) {
    console.log(someInfo);
   }



//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

let triplo;

mostrarTriplo(triplo);
function mostrarTriplo(triplo){
    let num = 14;
     triplo = num *3;

   return triplo
}
console.log("Triplo do nº 14: " +mostrarTriplo());



//6 - crie uma função que verifique se uma  variável é true ou false

let x = true;
verificarValor(x);

function verificarValor(x){
    if(x = false){
        console.log("O valor de x é sim falso.");
    
    }else{
    console.log("O valor de x, na verdade, é verdadeiro.");
    }
}
























// ignore isto

// for(let x = 0; x <= 10; x++){
//     console.log(x);
// }

