const form=document.querySelector("form")
form.onsubmit(()=>{
    const n1= document.getElementById("n1").value
    const n2=document.getElementById("n2").value
    const soma = n1+n2
    document.writeln(`A soma é ${soma}`)
})