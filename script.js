const dividendo=Number(prompt("Informe o dividendo"))// "5"
const divisor=Number(prompt("Informe o divisor"))//"10 -> Number("1")

console.log(`Dividendo ${dividendo}`)
console.log(" Divisor " + divisor)

let resultado = 0

// Se o valor do divisor for igual a zero, não faz o calculo.
//Senão, piode seguir com o calculo.

if (divisor !=0){
    resultado = dividendo / divisor
}else{
    resultado = 1 
}
const mensagem = `a divisão de ${dividendo} por ${divisor} é igual a ${resultado}`
 
const elementoMensagem = document.createElement ("h1")
//<h1> mensagem </h1>
elementoMensagem.textContent= mensagem
document.body.appendChild(elementoMensagem)