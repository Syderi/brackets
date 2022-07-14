module.exports = function check(str, bracketsConfig) {
  // module.exports = function check(str, bracketsConfig) {


  // let str = '([{}])';

  console.log('++++++++++++++================+++++++++++++');
  console.log(1, str);
  // console.log(2, bracketsConfig);
// let resultString;

  let brackets = ['()', '[]', '{}', '||', '12', '34', '56', '77', '88'];
//  for (let j = 0; j < str.length; j++) {
  // console.log('3++++++++++++++', j);
  for (let i = 0; i < brackets.length*2; i++) {
    // console.log(4, brackets[i]);

      do {
        brackets.forEach(element => {
                  //  console.log(5, str);
      str = str.replace(element, '');

      if (str.includes(`${brackets[i]}`)) {
        // console.log(8, str);
      };

      // console.log('6 -----------', str);
        });

      } while (str.includes(`${brackets[i]}`));
      // } while (str.includes(element));
    // if (str.includes(`${brackets[i]}`)) {
      // console.log(8, str);
    };


    console.log(9, str);
    return str.length === 0;
  // };
  }

      // do {
      //   // brackets.forEach(element => {
      //     console.log(8, brackets[i]);

      //     // resultString = str.replace(new RegExp(element,'g'), '');
          
      //     str.replace(`${brackets[i]}`, '');
      //     console.log(10, str);
      //   // });
      // } while (str.includes(`${brackets[i]}`));
    
  

//   console.log(20, str);
// return resultString.length === 0;

// }

//       const brackets = {
//         '}': '{',
//         ')': '(',
//         ']': '[',
//         '|': '|',
//       };

//       let strArray = str.split('');
//       console.log(5, strArray);
//       let stack = [];

//   for (let i = 0; i < strArray.length; i++) {
//     let currentSymbol = strArray[i];
//       if (righDirectionCheck(currentSymbol)) {
//         if (brackets[currentSymbol] !== stack.pop())  return false;
//       } else {
//         stack.push(currentSymbol);
//       }
//         // console.log(80, stack);
//           if (currentSymbol === '|') {

// //       |(|)

//              console.log(90, stack);
//              let dlinaStack = stack.length;
//              console.log(91, dlinaStack);
//              console.log(94, stack[dlinaStack-1]);


//             if (stack[dlinaStack-1] === stack[dlinaStack] && dlinaStack !== 1) {
//               stack.pop();
//               stack.pop();
//               console.log(95, stack);
//               // stack.pop();
             
//             };
//          };
      
//      }
   
// function righDirectionCheck(params) {
//   // const chekRigth = ['(', '[', '|'];
//   const chekRigth = ['}', ')', ']'];
//   return chekRigth.indexOf(params) > -1;
//   };

//   console.log(100, stack);
//  return stack.length === 0;
// }

// let [opening, closing] = bracketsConfig[i];

// Я проходил по строке циклом. Если текущая скобка открывающая - кладу в стек.  Если текущая 
// скобка закрывающая, а верхняя в стеке - подходящая к ней открывающая, то я выкидывал открывающую скобку из стека и переходил к следующей скобке. 
// Чтобы проверить, что закрывающая скобка подходит к открывающей, использовал эти переменные opening и closing, проходя циклом по массиву bracketsConfig. 


  // console.log('++++++++++++++================+++++++++++++');
  // console.log(str);
  // console.log(bracketsConfig);


  // let currentValue;
	// bracketsConfig.forEach(() => {
	// 	let count = bracketsConfig.length
	// 	while (count > 0) {
	// 		currentValue = bracketsConfig[count - 1].join('');
	// 		if (str.includes(currentValue)) {
	// 			str = str.replace(currentValue, '')
	// 		}
	// 		else {
	// 			count--
	// 		}
	// 	}
	// })
	// return str.length === 0 ? true : false




// ['()', '[]', '{}', '||', '12', '34','56', '77','88'];