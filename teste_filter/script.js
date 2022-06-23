const array=[
    [0,2,3],
    [0,2,4]
]

const arrayFiltrado=array.filter(function(value){
    if(value[2]==3){
        return value
    }
})

console.log(arrayFiltrado)