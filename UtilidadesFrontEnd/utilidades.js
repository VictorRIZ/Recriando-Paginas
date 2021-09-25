/*Arquivo destinado a colocar informações, utlidades, descobertas e coisas interessantes
sobre o JS, desde funtions, const, array, e por assim vai....*/ 

// 4 Ways to remove elements in array in JS

//1
//Using pop

const fruits = ['banana', 'orange', 'apple']
fruits.pop()
/*pop removes the last element from an array and returns it. 
If the array is empty, undefined is returned and 
the array is not modified.*/
//Resumindo, ficou assim: ['banana', 'orange']

//2
//Using shift()

const fruits = ['banana', 'orange', 'apple']
fruits.shift()
/*shift removes the first element from an array and returns it. 
If the array is empty, 
undefined is returned and the array is not modified.*/
//Resumindo, ficou assim: ['orange', 'apple']

//3
//Using splice(position, quantity)

const fruits = ['banana', 'orange', 'apple']
fruits.splice(1, 1)
/*splice Removes elements from an array and, if necessary, 
inserts new elements in their place, 
returning the deleted elements.*/
//Resumindo, ficou assim: ['banana', 'apple']

//4
//Using delete

const fruits = ['banana', 'orange', 'apple']
delete fruits[2]
console.log(fruits.length)
/*delete deletes elements from array and objects. It's necessary 
to put the position of the element. So, the object return undefined*/
//Resumindo, ficou assim: ['banana', 'orange', undefined] 

//Como funciona os events em JS

/*onClick
O elemento é clicado pelo usuário

onBlur
Remove o foco do elemento

onChange
Muda o valor do elemento

onFocus
O elemento é focado

onKeyPress
O usuário pressiona uma tecla sobre o elemento

onLoad
carrega o elemento por completo

onMouseOver
Define ação quando o usuário retira o mouse sobre o elemento

onSubmit
Define ação ao enviar um formulário
(Mais pra frente irei pesquisar sobre exemplos detalhados)
*/


