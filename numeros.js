const peso1 = 1.0;
const peso2 = Number('2.0');
console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.456;
const avaliacao2 = 5.432;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(1));//limita casa decimal (arredonda)
console.log(media.toString());//transforma em string
console.log(typeof media);

console.log(1 / 0);//Tipo Infinito
console.log("10" + 2)
//console.log(10.toFixed(2)) ERRO! aceita (10).toFixed



