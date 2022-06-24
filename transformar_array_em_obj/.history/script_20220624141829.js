//cria array de array com a primeira linha sendo o cabeçalho
const arrayDeArrays = [
    ["data", "nome"],
    ["2022", "ANTONIO"],
    ["1201", "chico bento"]
]

let arrayDeObjs = []
for (const iterator of arrayDeArrays) {
    let result= {}
    result[arrayDeArrays[0][0].toString()]=arrayDeArrays[iterator][0]
    arrayDeObjs[iterator]=result
}


console.log(arrayDeObjs)