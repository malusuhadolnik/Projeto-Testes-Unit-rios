/* eslint-disable max-len */

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante através do qual será possível
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto que permite:

  - Ler o menu cadastrado;
  - Fazer pedidos;
  - Verificar o que foi pedido;
  - Somar o valor da conta.

  A estrutura deste código e deste objeto já está definida e você precisa implementá-la.
  Abaixo você verá uma série de testes e passos que irão guiar você e, que devem NECESSARIAMENTE ser realizados em ordem para o bom desenvolvimento do sistema.

  Desenvolvimento:
  - Uma função:
    createMenu()
  - Recebe um parâmetro que é um objeto, o menu:
    Exemplo: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.

  A função createMenu() então, retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE - FAÇA OS TESTES E PASSOS DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!

  BOAS PRÁTICAS TDD: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js` E VOLTE A ESTE ARQUIVO QUANDO FOR INDICADO!

*/

// PASSO 1: Crie uma função `createMenu()` que, recebendo um objeto como parâmetro, retorna esse objeto no seguinte formato:   //  { fetchMenu: () => objetoPassadoPorParametro }.
//
// Agora faça o TESTE 4 no arquivo `tests/restaurant.spec.js`.
//------------------------------------------------------------------------------------------

// PASSO 2: Adicione ao objeto retornado por `createMenu()` uma chave de nome `consumption` que, como valor inicial, tem um array vazio.
//
// Agora faça o TESTE 5 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 3: Crie uma função, separada da função `createMenu()`, que, ao receber uma string como parâmetro, 
// adiciona essa string ao array de `objetoRetornado.consumption`. Essa nova função será adicionada à chave `order`.
// 
// DICA PARA DESENVOLVIMENTO: 
// - Definir a função `createMenu()`
// - Definir o objeto que a `createMenu()` retorna, mas separadamente 
// - E depois, definir essa nova função que será atribuída a `order`.
// ```
// const restaurant = {}
//
// const createMenu = (myMenu) => // Lógica que edita o objeto `restaurant`
//
// const orderFromMenu = (request) => // Lógica que adiciona à chave `consumption` de `restaurant` a string recebida no parâmetro `request`. 
// // Essa função deve ser associada à chave `order` de `restaurant`
// ```
// Agora faça o TESTE 6 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 4: Adicione ao objeto retornado por `createMenu()` uma chave `pay` armazenando uma função
// que:
// - percorrerá item a item de `objetoRetornado.consumption`;
// - fará a soma do preço desses itens;
// - retornará o valor somado acrescido de 10%.
// DICA: para isso, você precisará percorrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.

// Passo 3
// function addStringtoComsumption(string) {
//   this.consumption.push(string);
//   return this;
// }
// Passo 1
let arrayConsumo = [];

const createMenu = (objectMenu) => {
    const restaurant = {
    fetchMenu: objectMenu,
    consumption: arrayConsumo,
    order: (string) => arrayConsumo.push(string), 
  };
  return restaurant;
}; 

let objetoRetornado = createMenu({ food: {}, drink: {} });

// Passo 4 
const chavesDrink = Object.keys(objetoRetornado.fetchMenu.drink);
const chavesFood = Object.keys(objetoRetornado.fetchMenu.food);
const catchaves = chavesDrink.concat(chavesFood);
const arrayComsumption = objetoRetornado.consumption; 

// passo 4.1: verificar quais itens de fetchMenu dão match com os pedidos em consumption
const matchConsumption = () => { 
  let matchesMenu = [];
  for (let i = 0; i < catchaves.length; i += 1) {
        arrayComsumption.forEach((element) => {
          if (catchaves[i] === element) matchesMenu.push(catchaves[i]);
      });
  }
 return matchesMenu;
};

let match = matchConsumption();
const entriesFood = Object.entries(objetoRetornado.fetchMenu.food);
const entriesDrink = Object.entries(objetoRetornado.fetchMenu.drink);
const entriesMenu = entriesFood.concat(entriesDrink);

// passo 4.2: pegar os valores de fetchmenu das chaves que deram match com consumption (variável match)
const pegamatches = () => {
  let armazena = [];
   for (let i = 0; i < entriesMenu.length; i += 1) {
         match.forEach((element) => {
           if (entriesMenu[i].includes(element)) armazena.push(entriesMenu[i]);
       });
   }
  return armazena;
};
let arrayDematches = pegamatches();

const getPrices = () => { // código inspirado no tutorial: https://www.samanthaming.com/tidbits/76-converting-object-to-array/
  let storage = [];
  arrayDematches.forEach(([key, value]) => {
  storage.push(value);
  });
  return storage;
};
let pricesStorage = getPrices();

// Passo 4.3: calcular valor total
const valorTotal = () => { 
  let armazenaSoma = 0; 
  for (let index = 0; index < pricesStorage.length; index += 1) {
    armazenaSoma += pricesStorage[index];
  }
  return Math.round(armazenaSoma + (armazenaSoma * 0.1));
};

objetoRetornado.pay = valorTotal(); // teoricamente add nova função à chave `order`.
console.log(objetoRetornado);

module.exports = createMenu;
