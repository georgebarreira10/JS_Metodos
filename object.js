var carro = new Object();

carro.modelo = "Uno";
carro.ano = 1999;
carro.transmissao = "CVT"

//exibe o objeto com todos os atributos e valores
//{ modelo: 'Uno', ano: 1999, transmissao: 'CVT' }
console.log(carro)
console.log(carro.ano)

//lista todos os nomes de todos os atributos do objeto
console.log(Object.keys(carro))

//lista todos os valores de todos os atributos do objeto
console.log(Object.values(carro))