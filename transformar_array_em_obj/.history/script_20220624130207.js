const arrayDeArrays = [
    ["data", "nome"],
    ["2022", "ANTONIO"],
    ["1201", "chico bento"]
]

const campoData= arrayDeArrays[0].indexOf("data")
const campoNome = arrayDeArrays[0].indexOf("nome")



const arrayDeObjs= []

const linha1 = {
    data: arrayDeArrays[1][campoData],
    nome: arrayDeArrays[1][campoNome]
}

const linha2 = {
    data: arrayDeArrays[2][campoData],
    nome: arrayDeArrays[2][campoNome]
}

arrayDeObjs[0]= linha1
arrayDeObjs[1]=linha2



console.log(arrayDeObjs)