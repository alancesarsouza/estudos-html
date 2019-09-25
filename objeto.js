//declaração de Object dentro de {}
const prod1 = {};

//inclusao de atributos aos objeto
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4999.99;
prod1['Desconto Especial'] = 0.40; //Evitar atributos com espaço

console.log(prod1);

//declaração de Object já com seus atributos
const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.99,

  outroObj: {

    atrib1: 1,

    obj: {
      atrib2: 2
    }
  }
}
console.log(prod2);