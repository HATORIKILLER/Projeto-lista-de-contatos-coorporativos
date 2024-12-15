let Nome = document.getElementById("Nome");
let Sobrenome = document.getElementById("Sobrenome");
let Contato =document.getElementById("Contato");
let botao = document.getElementById ("btn");
let ListaContatos = [];

botao.addEventListener("click", function(){
ListaContatos.push(Nome.value);
ListaContatos.push(Sobrenome.value);
ListaContatos.push(Contato.value);
console.log (ListaContatos);
Nome.value="";
Sobrenome.value="";
Contato.value="";

document.getElementById ("text").innerHTML = ListaContatos .join("<br><br>");
})