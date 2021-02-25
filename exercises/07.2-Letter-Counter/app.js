let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

var alfabeto = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var cont_letras = [];
var contador = 0;

par = par.toLowerCase();
par = par.replace(/\s+/g, '');
for(var i = 0;i < alfabeto.length;i++){
    contador = 0;
    for(var j =0;j<par.length;j++){
        if(par[j]==alfabeto[i]){
            contador = contador + 1;
        }
    cont_letras[i] = contador;    
    
    }

}
console.log(counts);
console.log();