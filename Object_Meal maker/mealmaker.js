
const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
  
    // get appetizers() {
    //  return this._courses.appetizers;
    // },
    // get mains() {
    // return this._courses.mains;
    // },
    // get desserts() {
    //  return this._courses.desserts;
    // },
    // set appetizers(appetizers) {
    //      this._courses.appetizers = appetizers;
    // },
    // set mains(mains) {
    //     this._courses.mains = mains;
    //     },
    // set desserts(desserts) {
    //     this._courses.desserts = desserts;
    //     },
    // get courses() {
    //     return {
    //         appetizers: this.appetizers,
    //         mains: this.mains,
    //         desserts: this.desserts,
    //     }
    // },
    // addDishToCourse(courseName, dishName, dishPrice) {
    //     const dish = {
    //         name: dishName,
    //         price: dishPrice,
    //     };
    //   return  Array.from(this._courses[courseName]).push(dish)
    // },

    // getRandomDishFromCourse(courseName) {
    //     const dishes = this._courses[courseName];
    //     const randIndex = Math.floor(Math.random()*(2));
    //     return dishes[randIndex];
    // },
    // generateRandomMeal() {
    //     const appetizer = this.getRandomDishFromCourse('appetizer');
    //     const main = this.getRandomDishFromCourse('main');
    //     const dessert = this.getRandomDishFromCourse('dessert');
    //     const totalPrice = appetizer.price + main.price + dessert.price;
    //     return `Your meal wil be ${appetizer}, ${main} and ${dessert} for a total of ${totalPrice} bucks! Enjoy!`;
    // },

};

let arr = ['pew', 'pew', 'pew'];
menu._courses.appetizers.push(arr);
console.log(typeof menu._courses.appetizers);


console.log(typeof arr);
