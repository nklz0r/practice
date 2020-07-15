class School {
    constructor(name, numberOfStudents) {
        this._name = name;
        this._numberOfStudents = numberOfStudents;
        this._level = '';
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set level(level) {
        this._level = level;
    }
    set numberOfStudents(number) {
        if(typeof number === 'number') {
            this.numberOfStudents = number;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
        
    }
    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
        
    }
    static pickSubtituteTeacher(teachers) {
      let randIndex =  Math.floor(Math.random()*teachers.length);
      return teachers[randIndex];
    }
}

class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, numberOfStudents);
        this.level = 'Primary';
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
    set pickupPolicy(string) {
        this._pickupPolicy = string;
    }
}

class Middle extends School {
    constructor(name, numberOfStudents) {
        super(name, numberOfStudents);
        this.level = 'Middle';
    }
}

class High extends School {
    constructor(name,numberOfStudents, sportsTeams) {
        super(name, numberOfStudents);
        this.level = 'High';
        this._sportsTeams = sportsTeams;
    }
    get sportsTeam() {
        return this._sportsTeams;
    }
    addSportsTeam(team) {
        this.sportsTeams.push(team);
    }
}

const teachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts();
console.log(School.pickSubtituteTeacher(teachers));
const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(lorraineHansbury);

// If you would like to continue working on this project, we have listed some avenues to build on your progress.

// Add more properties to each class (averageTestScores, schoolOverview, etc.)
// Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools