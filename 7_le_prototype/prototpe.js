let Person = {
    firstname : "John",
    lastname :  "Doe",
    age : 25,
   present : function(){
        return `je m'appelle ${this.firstname} ${this.lastname} et j'ai ${this.age}`
    }
}
console.log(Person.present());