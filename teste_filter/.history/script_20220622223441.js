const array=[
    [0,2,3]
    [0,2,4]
]

const arrayFiltrado=array.filter((value)=>{
    if(value[1]==3){
        return value
    }
})

console.log(arrayFiltrado)