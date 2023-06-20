console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 19;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = `Salvd`;


console.log(`\n Destinos possíveis:`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;


console.log(`Destino existe: `, destinoExiste);

if (podeComprar && destinoExiste) {
    console.log(`Boa viagem!`)
} else {
    console.log(`Desculpe, houve um erro!`)
}

for(let i=0;i<3;i++) {
    
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true
    }
}
