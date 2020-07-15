class Media {
    // All the common properties
    constructor(title) {
        this._title = title
        this._ratings = [];
        this._isCheckedOut = false;
    }
    // Getters and Setters
    get ratings() {
        return this._ratings;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get title() {
        return this._title;
    }
    set isCheckedOut(bool) {
        this._isCheckedOut = bool;
    }
// Methods
    getAverageRating() {
        let sum = this.ratings.reduce((a,b) => (a+b));
        let length = this.ratings.length;
        let avg = sum / length;
        return avg;
    }

    addRating(rating) {
        this.ratings.push(rating);
    }
    toggleCheckedOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }
};
// Child classes
class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;  
        this._pages = pages;
    }

    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
};

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
};

class CD extends Media {
    constructor(title, song) {
        super(title);
        this._song = song;
    }
};

const newMed = new Media('Donkey Hot');
const newBook = new Book('The Pyrates','Daniel Defoe',430);
const newMov = new Movie('Zeitgeist', 'Peter Joseph', 123)
const newCD = new CD('Ozzmosis', 'Perry Mason');
newMed.addRating(4);
newMed.addRating(5);
newMed.addRating(3);
newMed.addRating(1);
newMed.addRating(5);
newMed.addRating(5);
newMov.addRating(5);
newMov.addRating(4);
newMov.addRating(5);
newCD.toggleCheckedOutStatus();


console.log(newMed.ratings);
console.log(newMed.getAverageRating());
console.log(newBook);
console.log(newCD);


