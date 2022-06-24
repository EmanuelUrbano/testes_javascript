const arrayDeArrays = [
    ["data", "nome"],
    ["2022", "ANTONIO"],
    ["1201", "chico bento"]
]

const campoData= arrayDeArrays[0][0]
const campoNome = arrayDeArrays[0][1]

const arrayDeObjs= []

arrayDeObjs[0][campoData]=arrayDeArrays[1][0]
arrayDeObjs[0][campoNome]=arrayDeArrays[1][0]

console.log(arrayDeObjs)