// var aluno = "Kamilla";
// let aluno2 = "Kamilla";

// aluno = "Vitor";

// const aluno3 = "Kamilla";

// const variavel1 = false;

// objeto
let aluno = {
   nome: "Kamilla",
   nacionalidade: "Brasileira",
   nota: 9.5,
};

aluno.nome = "Vitor";
aluno.nota = 10;

// array

const medias = [1, "Kamilla", 3.4, { nome: "Vitor" }];

medias[1] = "Vitor";
medias[0] = 8;

// console.log(medias.length);

let valor1 = 40;
let valor2 = 2;

const resultado = valor1 % valor2;

// const name = document.getElementById("nameMain");
// console.log((name.innerText = "Vitor"));

function verificar(a, b) {
   let teste = a % b;
   console.log(teste);
}

const verificar2 = function (a, b) {
   let teste = a % b;
   console.log(teste);
};

// Arrow function

const verificar3 = (a, b) => {
   let teste = a % b;

   let local = "local";

   if (teste == 0) {
      console.log("O VALOR É DIVISIVEL POR 2");
   } else {
      console.log("O VALOR NÃO É DIVISIVEL POR 2");
   }
};

// console.log(local);

// verificar3(valor1, valor2);

// const button = document.getElementById("button");
// button.onclick = addValue;

function addValue() {
   // Obter minha tag HTML
   const result = document.getElementById("result");

   // Converter esse valor do tipo string para o tipo number

   const resultNumber = Number(result.innerText);

   // Realizar a operação matemática

   result.innerText = resultNumber + 1;

   // Chamar a funçao que vai alterar a cor
   changeValue();
}

function subValue() {
   // Obter minha tag HTML
   const result = document.getElementById("result");

   // Converter esse valor do tipo string para o tipo number

   const resultNumber = Number(result.innerText);

   // Realizar a operação matemática

   result.innerText = resultNumber - 1;

   // Chamar a funçao que vai alterar a cor
   changeValue();
}

function changeValue() {
   const result = document.getElementById("result");

   if (Number(result.innerText) > 0) {
      result.style.color = "green";
   }

   if (Number(result.innerText) === 0) {
      result.style.color = "#c4c4c4";
   }

   if (Number(result.innerText) < 0) {
      result.style.color = "red";
   }
}

let x = 1;
for (var i = 1; i <= 128; i += 1) {
   x += x;
   // console.log(x);
}

const array = [];
array.push(78);
array.pop();
array.push(44);
array.push(12);
array.push(18);
array.pop();
array.push(19);
array.pop();
array.pop();
array.push(12);
array.push(28);

// console.log(array);

const encodedString = "hlowrd_el_ol";
const numberOfRows = 2;

function decodeString(numberOfRows, encodedString) {
   const numberOfColumns = encodedString.length / numberOfRows;
   const matriz = new Array();
   const result = new Array();
   let count = 0;

   for (let row = 0; row < numberOfRows; row++) {
      const line = new Array();
      for (let column = 0; column < numberOfColumns; column++) {
         line.push(encodedString[count]);
         count++;
      }
      matriz.push(line);
   }

   let col = 0;

   for (let column = 0; column < numberOfColumns; column++) {
      col = column;
      for (let row = 0; row < numberOfRows; row++) {
         col < numberOfColumns && result.push(matriz[row][col]);

         col++;
      }
   }

   let letters = "";

   result.map((letter) => {
      console.log(letter);
      if (letter == "_") {
         letter = " ";
      }

      letters += letter;
   });

   console.log(letters);
}

decodeString(numberOfRows, encodedString);
const debts = [
   ["Blake", "Alex", "7"],
   ["Blake", "Alex", "3"],
   ["Alex", "Blake", "4"],
   ["Blake", "Alex", "1"],
   ["Alex", "Blake", "7"],
];

function smallestNegativeBalance(debts) {
   const names = new Array();

   debts.map((debt) => {
      names.push(debt[0]);
      names.push(debt[1]);
   });

   const transactions = names
      .filter((name, post) => {
         return names.indexOf(name) === post;
      })
      .map((name) => {
         return {
            name,
            value: 0,
         };
      });

   debts.map((debt) => {
      transactions.forEach((transaction) => {
         if (transaction.name === debt[0]) {
            transaction.value += -Number(debt[2]);
         }

         if (transaction.name === debt[1]) {
            transaction.value += Number(debt[2]);
         }
      });
   });

   const min = Math.min(
      ...transactions.map((transaction) => transaction.value)
   );
   const minTransactions = transactions.filter(
      (transaction) => transaction.value === min
   );

   const result = minTransactions.map((transaction) => transaction.name).sort();

   if (min == 0) {
      result.splice(0, result.length);
      result.push("Nobody has a negative balance");
      // console.log(result);
      return result;
   } else {
      // console.log(result);
      return result;
   }
}

smallestNegativeBalance(debts);
