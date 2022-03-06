class Support {
    name;
    designation = 'Support web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
};

const aamir = new Support('aamir', 'Bangladesh');
const salman = new Support('salman', 'Singapore');
console.log(aamir);
console.log(salman);

aamir.startSession();
salman.startSession();