 /*Klasse Car repräsentiert ein Auto mit grundlegenden Eigenschaften.*/
class Car {
    /*Konstruktor für die Car-Klasse.*/
    constructor(brand, model, yearOfManufacture = null, seats = 5) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.seats = seats;
    }

    /* Gibt eine Beschreibung des Autos zurück.*/
    getDescription() {
        return `${this.brand} ${this.model}, ${this.yearOfManufacture} ${this.seats}`;
    }
}

/*Klasse ElectricCar erstellt und erbt von Car.*/
class ElectricCar extends Car {
    /*Konstruktor für die ElectricCar-Klasse.*/
    constructor(brand, model, yearOfManufacture = null, seats = 5, batteryRange) {
        super(brand, model, yearOfManufacture, seats);
        this.batteryRange = batteryRange;
    }

    /*Gibt eine beschreibung des Elektroauto zurück.*/
    getDescription() {
        return `${this.brand} ${this.model}, ${this.yearOfManufacture} ${this.seats} ${this.batteryRange}`;
    }
}


const tesla = new ElectricCar('Tesla', 'Model 3', 2024, 5, 80)
const description = tesla.getDescription()

const h1 = document.getElementsByTagName('h1')[0] // array
h1.innerText = description