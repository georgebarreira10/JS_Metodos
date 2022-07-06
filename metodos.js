function replace() {

    var nome = "José Ângelo Stefânio Antônio         ";
    console.log(`Nome original: ${nome}`)
    
    //(`Removendo espaços no final da linha: ${nome.trim()}`)
    console.log(nome.trim())
    
    //conta a quantidade d caracteres
    console.log(nome.length)
   
   //conta a quantidade de caracteres sem os espaços em branco
    console.log(nome.trim().length)

//Retira os espaços em branco e depois converte tudo para minusculo
console.log(nome.trim().toLowerCase())

//Retira os espaços em branco e depois converte tudo para maisculo
console.log(nome.trim().toUpperCase())

// substitui a string a ser procurado por outra apenas no primeiro caractere encontrado
console.log(nome.trim().replace('o', 'W'))

//substitui a string em todas as ocorrencias
console.log(nome.trim().replaceAll('o', "W").replaceAll("ô", "W"))
console.log(nome.trim().replaceAll('José', 'Hatshepsut'))

//retorna a posiçao do indice do array da string
console.log(nome.indexOf("elo"))
}

replace();