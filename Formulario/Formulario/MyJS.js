function mostraMensagem(par) {
    alert (par);
}
function soma(par1, par2) {
    var resultado;
    resultado = par1+par2;
    return resultado;
}
function guardaNota(){
    var nota=[];
    for(var i=0;i<10;i++) {
        nota[i]=10+i;
    }
    return nota;
}