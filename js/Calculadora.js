let calcula = []
document.getElementById("apagar").addEventListener("click",function(){
    document.getElementById("tela").value=""
    calcula.splice(0, calcula.length);
})
document.getElementById("nove").addEventListener("click",function(){
    document.getElementById("tela").value+=9
    calcula.push("9")
})
document.getElementById("oito").addEventListener("click",function(){
    document.getElementById("tela").value+=8
    calcula.push("8")
})
document.getElementById("sete").addEventListener("click",function(){
    document.getElementById("tela").value+=7
    calcula.push("7")
})
document.getElementById("seis").addEventListener("click",function(){
    document.getElementById("tela").value+=6
    calcula.push("6")
})
document.getElementById("cinco").addEventListener("click",function(){
    document.getElementById("tela").value+=5
    calcula.push("5")
})
document.getElementById("quatro").addEventListener("click",function(){
    document.getElementById("tela").value+=4
    calcula.push("4")
})
document.getElementById("tres").addEventListener("click",function(){
    document.getElementById("tela").value+=3
    calcula.push("3")
})
document.getElementById("dois").addEventListener("click",function(){
    document.getElementById("tela").value+=2
    calcula.push("2")
})
document.getElementById("um").addEventListener("click",function(){
    document.getElementById("tela").value+=1
    calcula.push("1")
})
document.getElementById("zero").addEventListener("click",function(){
    document.getElementById("tela").value+=0
    calcula.push("0")
})
document.getElementById("mais").addEventListener("click",function(){
    document.getElementById("tela").value+="+"
    calcula.push("+")
})
document.getElementById("menos").addEventListener("click",function(){
    document.getElementById("tela").value+="-"
    calcula.push("-")
})
document.getElementById("vezes").addEventListener("click",function(){
    document.getElementById("tela").value+="x"
    calcula.push("x")
})
document.getElementById("dividir").addEventListener("click",function(){
    document.getElementById("tela").value+="%"
    calcula.push("%")
})
document.getElementById("ponto").addEventListener("click",function(){
    document.getElementById("tela").value+="."
    calcula.push(".")
})

document.getElementById("arredondar").addEventListener("click",function(){
    let arr = Number(prompt("Coloque um número: "))
    alert(Math.round(arr))
})
document.getElementById("raiz").addEventListener("click",function(){
    let raiz = Number(prompt("Coloque um número: "))
    alert(Math.sqrt(raiz))
})
document.getElementById("potencia").addEventListener("click",function(){
    let num = Number(prompt("Coloque o número: "))
    let pot = Number(prompt("Coloque a potência: "))
    let potres = Math.pow(num,pot)
    alert(potres)
})
document.getElementById("igual").addEventListener("click",function(){
    let guardavalor = ``
    for(let i = 0;i<calcula.length;i++){
        let j = calcula[i]
        if(j == "+"){
            guardavalor+=`+`
        }
        else if(j == "%"){
            guardavalor+=`/`
        }
        else if(j == "-"){
            guardavalor+=`-`
        }
        else if(j == "x"){
            guardavalor+=`*`
        }
        else if(j == "."){
            guardavalor+=`.`
        }
        else(
            guardavalor+=`${calcula[i]}`
        )
    }
    document.getElementById("tela").value=eval(guardavalor)
})
