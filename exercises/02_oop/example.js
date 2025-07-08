// const librarian = {
//   addBook(book, shelf) {
//     shelf.books.push(book);
//   },

//   findBook(title, shelf) {
//     return shelf.books.find((book) => book.title === title);
//   },
// };

// const shelf = {
//   books: [],
//   row: '',
//   col: '',

//   countBooks() {
//     return this.books.length;
//   },
// };

// const book2 = {
//   title: 'JavaScript',
//   author: 'David Flanagan',
// };

// const bookCover = {
//   book: book2,

//   showTitle() {
//     console.log(`Cover shows: ${this.book.title}`);
//   },

//   changeTitle(title) {
//     this.book.title = title;
//   },
// };

// controller

const order = {
  customer: 'James Brown',
  dish: 'Pizza',
};

const chef = {
  cookMeal(order, kitchen) {
    const meal = `Meal for ${order.customer}: ${order.dish}`;
    kitchen.meals.push(meal);
    console.log(meal + ' cooked');
  },
};

const kitchen = {
  meals: [],
};

const waiter = {
  takeOrder(customer, dish, chef, kitchen) {
    const order = { customer, dish };
    chef.cookMeal(order, kitchen);
  },

  serverMeal(kitchen) {
    const meal = kitchen.meals.pop();
    console.log('Serving meal:', meal);
  },
};

/*
Vehicle

Car

Truck

ElectricCar

Engine

Tire

Driver

Mechanic

We can make the following observations:

✅ A car is a kind of vehicle.
✅ A truck is a different kind of vehicle.
✅ An electric car is a kind of car.
✅ An engine is a part of both cars and trucks.
✅ A tire is a part of any vehicle.
✅ A driver operates vehicles like cars and trucks.
✅ A mechanic repairs parts of vehicles, like engines or tires.
*/