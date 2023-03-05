
//VETOR               
   // ÍNDICES: 0,1,2,3,4,5
const vetor = [1,2,3,4,5,6]

alert("Mostrando o valor do vetor no índice 3\nValor: " + vetor[3]);
// índice [3] pega valor 4

alert("Mostrando o valor do vetor no índice 5\nValor: " + vetor[5]);  
// índice [5] pega valor 6

alert("Mostrando o valordo vetor no índice 0\nValor: " + vetor[0]); 
// índice [0] pega valor 1

// MATRIZ
const matriz = [                  //  Índices
                                  //  Primiero valor ind linha; Segundo ind coluna 
                  ["A","B","C"],  //  [ [0][0], [0][1], [0][2] ]
                  ["D","E","F"]   //  [ [1][0], [1][1], [1][2] ]
               ]                  //  índices sempre começam no 0

alert("Mostrando Matriz completa:\nValores: " + matriz);
// mostrará a matriz inteira

alert("Mostrando valor dos índices[1][1] da matriz\nValor: " + matriz[1][1]);
// mostrará o E

alert("Valor dos índices[1][2] da matriz:\nValor: " + matriz[1][2]);



//FUNÇÕES DE ARRAYS

// Adionar um item no final do Array  ->  array.push()
// Remover um item do final do Array  ->  array.pop ()
// Adicionar em qualquer posição ->  splice(posição, qnts remove, itens)

// Adicionando o valor 5000 no final do array do vetor:
 vetor.push(5000)
 alert("Todo o vetor (novo valor do último Array): \n" + vetor)

// Removendo um item do final do Array
vetor.pop(5000)
alert("Todo o vetor (removendo o último Array): \n" + vetor)

// ADD um item em qualquer posição
vetor.splice(100.[1])
alert("Adicionando item no Array: \n" + vetor)

// Alterando um elemento no Arrya
vetor[2] = "50";
alert("Alterando o indice 2 do array. De 3 para 50:\nValor: " + vetor)

