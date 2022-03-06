class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    };
};

class Support extends TeamMember {
    groupSupportTime;
    designation = 'Support web dev';
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    };
};

class StudentCare extends TeamMember {
    care;
    designation = 'Support Student care';
    constructor(name, address, care) {
        super(name, address);
        this.care = care;
    };
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student)
    };
};

class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'Neptune app dev';
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version)
    };
};

const aamir = new Support('aamir', 'Bangladesh', `${11}am`);
console.log(aamir);
const salman = new Support('salman', 'Singapore', `${04}pm`);
console.log(salman);

const alai = new StudentCare('Alai', 'Banglava', 'sunday - thursday');
console.log(alai);

const ash = new NeptuneDev('ash', 'Malaysia', 'Android studio');
console.log(ash);
ash.releaseApp('1.5.7');
