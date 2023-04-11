function Vehicle(carMade, carModel, carType)
{
    this.made = carMade;
    this.model = carModel;
    this.type = carType;
}

// Vehicle.prototype.brand = "HP";
Vehicle.prototype.working = function()
{
    console.log("it i working fine.");
}

var carObj1 = new Vehicle("Toyota", "Corolla", "City Car");
var carObj2 = new Vehicle("Nissan", "Maxima", "LuxuryCar");
console.log(carObj1);
console.log("My Favourite Car Name is ", carObj2.model);
var isHave = "made" in carObj1;
console.log(isHave);
// console.log();

function Bikes()
{
    this.name = bikeName,
    this.company = bikeCompany,
    this.type = bikeType,
    this.mileagePerLtr = mPL

}