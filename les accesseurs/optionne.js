`use strict`
class User {
    #job;
    constructor(name, firstName, job) {
        this.name = name;
        this.firstName = firstName;
        this.#job = job;
    }
    get job() {
        return this.#job;
    }

    set job(newJob) {
        this.#job = newJob;
    }
    fullName(name, firstName) {
        return (`Je m'appelle en ce jour ${name} et mon nom de famille est ${firstName}`);
    }
}
export default User;