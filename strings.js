const nome = "nomeA";
console.log(nome.charAt(4));
console.log(nome.charCodeAt(4));//codigo do caracter

console.log(nome.indexOf("o"));
console.log(nome.substring(1));//ignora o que está antes do index
console.log(nome.substring(0,3));

console.log("Texto ".concat(nome).concat("!"));
console.log("Texto " + nome + "!");

console.log(nome.replace(/\w/g, "a"));

console.log('ana,maria,pedro'.split(','));
