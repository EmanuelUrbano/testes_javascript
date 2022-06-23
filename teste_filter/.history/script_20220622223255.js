const array=[
    [0,2,3]
    [0,2,4]
]

const arrayFiltrado=array.filter((item)=>{
    if(item[2]==3){
        return item
    }
})

console.log(arrayFiltrado)