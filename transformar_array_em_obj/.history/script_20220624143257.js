//cria array de array com a primeira linha sendo o cabeçalho
const arrayDeArrays = [
    ["data", "nome"],
    ["2022", "ANTONIO"],
    ["1201", "chico bento"]
]

let arrayDeObjs = []
for (let linha = 0; linha < arrayDeArrays.length; linha++) {
    let result= {}
    for(let coluna = 0; coluna<arrayDeArrays[linha].length; coluna++){
        result[arrayDeArrays[0][coluna]]=arrayDeArrays[linha][coluna]
        arrayDeObjs[linha]=result
    }
}
arrayDeObjs.shift()


console.log(arrayDeObjs)