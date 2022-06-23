const form=document.querySelector("form")
try{
    form.onsubmit((e)=>{
        e.preventDefault()
        const n1= document.getElementById("n1").value
        const n2=document.getElementById("n2").value
        const soma = n1+n2
        console.log(`A soma é ${soma}`)
    })

}catch{
    console.log("deu erro")
}