const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toEqual('function'); // Teste se productDetails é uma função.
    
    const retorno = productDetails('Alcool gel', 'Máscara');
    const retorno2 = Array.isArray(retorno);
    expect(retorno2).toBe(true); // Teste se o retorno da função é um array.
    
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2); // Teste se o array retornado pela função contém dois itens dentro.
    
    const itens = productDetails('Alcool gel', 'Máscara')
    const entradas = Object.entries(itens);
    expect(typeof entradas).toBe('object'); // Teste se os dois itens dentro do array retornado pela função são objetos.
    
    const item1 = itens[0];
    const item2 = itens[1];
    expect(item1).not.toBe(item2); // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
  });
});
