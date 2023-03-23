class Tour {
    constructor(name, costOneDay, days, insurance) {
        this._name = name;
        this._costOneDay = costOneDay;
        this._days = days;
        this._insurance = insurance;
    }

    getName() {
        return this._name;
    }

    getCostOneDay() {
        return this._costOneDay;
    }

    getDays() {
        return this._days;
    }

    getInsurance() {
        return this._insurance;
    }

    getPrice() {
        return this._costOneDay * this._days + this._insurance;
    }
}

var tour = new Tour('Turkey', 1500, 7, 750);
console.log(tour.getName()); // afișează 'Turkey'
console.log(tour.getCostOneDay()); // afișează 1500
console.log(tour.getDays()); // afișează 7
console.log(tour.getInsurance()); // afișează 750
console.log(tour.getPrice()); // afișează 11250 = 1500*7+750

var tour1 = new Tour('Greece', 1200, 10, 500);
var tour2 = new Tour('Italy', 2000, 14, 800);

console.log('Informații despre turul 1:');
console.log('Nume tur:', tour1.getName());
console.log('Preț pe zi:', tour1.getCostOneDay());
console.log('Număr de zile:', tour1.getDays());
console.log('Preț asigurare:', tour1.getInsurance());
console.log('Preț total:', tour1.getPrice());

console.log('Informații despre turul 2:');
console.log('Nume tur:', tour2.getName());
console.log('Preț pe zi:', tour2.getCostOneDay());
console.log('Număr de zile:', tour2.getDays());
console.log('Preț asigurare:', tour2.getInsurance());
console.log('Preț total:', tour2.getPrice());

if (tour1.getPrice() < tour2.getPrice()) {
    var cheaperTour = tour1;
    var priceDifference = tour2.getPrice() - tour1.getPrice();
} else {
    var cheaperTour = tour2;
    var priceDifference = tour1.getPrice() - tour2.getPrice();
}

console.log('Turul mai ieftin este:', cheaperTour.getName());
console.log('Diferența de preț:', priceDifference);