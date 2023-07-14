const array1 = [4, 5, 6];
const array2 = [1, 2, 3];

const array3 =array2.concat(array1);
const array4 =[...array2, ...array1];//spread operator est dans ce cas comparable a la concatenation.
console.log({array3});
console.log(array4);
console.log(typeof(array3));
console.log([...array1,7,8,9,10]);
console.log(...array2);


let arr1 = [1, 2, 3, 4, 5, 6];

let arr2 = [...arr1.splice(0,3)];

console.log(arr2);

console.log(..."yes");//renvoie un tableau avec chaque lettre

function add(a, b,c, ...args) {//cet écrit signifie le rest parameter 
    console.log(a);//2
    console.log(b);//3
    console.log(c);//4
    console.log(args);//retourne un tableau avec le reste des  données
}
add(2, 3, 4, 5, 6, 7);