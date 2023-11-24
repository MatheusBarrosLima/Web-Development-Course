const gameName = prompt("Digite o nome do jogo")
const gameGener = prompt("Digite o gênero do jogo")
const gameReleaseYear = prompt("Digite o ano de lançamento do jogo")

const game = {
    name: gameName,
    gener: gameGener,
    releaseYear: gameReleaseYear,

}

console.log(game.name);
console.log(game.gener);
console.log(game.releaseYear);