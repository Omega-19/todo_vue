class User {
    #name;
    _job;
    #firstName;
    constructor(name, firstName , _job  = null) {
        // ...
        this._job = _job;
        this.#name = name;
        this.#firstName = firstName;
    }
    get job (){
        return this._job ;
    }
   
    fullName(name, firstName, _job) {
        return (`Je m'appelle en ce jour ${name} et mon nom de famille est ${firstName} en plus suis ravi d'être présent parmi vous.Je suis a tel ${_job}`);
    }
}

let h1 = new User()
console.log(h1.fullName("Erféro", "PATCHOUKA"));

export default User;