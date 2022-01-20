"use strict";

// 133. The call and apply Methods //

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} fight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, "Jay G");
lufthansa.book(654, "John Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// call method, copies the this. functions //
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

// apply method

const flightData = [543, "George"];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(eurowings, ...flightData);
