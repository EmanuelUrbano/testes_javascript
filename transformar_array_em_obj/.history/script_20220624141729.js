//cria array de array com a primeira linha sendo o cabeçalho
const arrayDeArrays = [
    ["data", "nome"],
    ["2022", "ANTONIO"],
    ["1201", "chico bento"]
]

let arrayDeObjs = []
for (const iterator of arrayDeArrays) {
    let result= {}
    console.log(arrayDeArrays[0][0])
    result[arrayDeArrays[0][0]]=arrayDeArrays[iterator][0]
    console.log(result)
    arrayDeObjs[iterator]=result
}


console.log(arrayDeObjs)