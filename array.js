const itens = [1.1, 2.2, 3.3, 4.4];

console.log(itens[0], itens[3]);
console.log(itens[4]);//Index indefinido, não da erro no codigo

itens[4] = 40;
console.log(itens);
console.log(itens.length);

itens.push({ id: 3 }, false, null, "texto");//equivalente ao .add()
console.log(itens);//recebe qualquer tipo

console.log(itens.pop());//equivalente ao .get()

delete itens[0];

console.log(itens);

console.log(typeof itens);