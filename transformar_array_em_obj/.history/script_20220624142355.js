//cria array de array com a primeira linha sendo o cabeçalho
const arrayDeArrays = [
    ["data", "nome"],
    ["2022", "ANTONIO"],
    ["1201", "chico bento"]
]

let arrayDeObjs = []
for (let index = 0; index < arrayDeArrays.length; index++) {
    let result= {}
    result[arrayDeArrays[0][0]]=arrayDeArrays[index][0]
    result[arrayDeArrays[0][1]]=arrayDeArrays[index][1]
    arrayDeObjs[index]=result
}


console.log(arrayDeObjs)