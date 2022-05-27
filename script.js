var num=document.getElementById('fnum')
var lista=document.getElementById('flista')
var res=document.querySelector('div#res')
var valores=[]

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
function inLista(n,l){
    if (l.indexOf(Number(n)) != -1 ){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item= document.createElement('option')
        item.text=`valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML= ''
       
    }else{
        window.alert ('valor invallido ou ja existente')
    } num.value = ''
    num.focus()
} 
function finalizar(){
    if(valores.length==0){
        window.alert ('adicione os valores antes de finalizar')
    }else{
        var tot= valores.length
        var max= Math.max(...valores)
        var min= Math.min( ...valores)  
        var soma=0
       
        for(var i=0;i<valores.length;i++){
        soma+=valores[i]}
        var dt= soma / valores.length
        res.innerHTML = ''
        res.innerHTML += `<P>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML+= `<p>o maior numero é ${max}<P/>`
        res.innerHTML+=`<p>o menor valor é ${min}<p/>`
        res.innerHTML+= `<p> a soma dos valores é igual a ${soma}`
        res.innerHTML+= `<p>A media dos valores é igual a ${dt}</p>`
        }
} 