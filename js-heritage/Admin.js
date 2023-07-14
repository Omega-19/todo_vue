import User from "./heritage.js";

`use strict`
// créons la class Admin

class Admin extends User{
    constructor(name, firstName){
        super(name, firstName);
    }
    canEditArticles() {
        return true;
    }
}
export default Admin;

// //2em methode
// `use strict`
// // créons la class Admin

// import User from "./heritage.js";
// class Admin extends User {
// 	canEditArticles() {
// 		return true;
// 	}
// }


// let a1 = new Admin()
// console.log(a1.canEditArticles());

// export default Admin;