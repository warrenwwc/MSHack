var foodArr = {};
var foodItemDef = function(name, calories_kCal, Protein, Fat,Carb,Fiber,Sodium){
    this.name = name;
    this.cal = calories_kCal;
    this.pro = Protein;
    this.fat = Fat;
    this.carb = Carb;
    this.fiber = Fiber;
    this.NA = Sodium;
}

arr.push(new foodItemDef("Beer", 29, 0.24, 0, 1.64, 0, 4));
arr.push(new foodItemDef("Apple juice", 46, 0.1, 0.13, 11.3, 0.2, 4));
arr.push(new foodItemDef("Orange Juice", 41, 0, 0, 9.1, 0, 11));
arr.push(new foodItemDef("French Fries", 290, 3.31, 17, 39.5, 3.9, 618));
arr.push(new foodItemDef("Macaroni & cheese", 143, 5.01, 4.34, 21.08, 1.3, 288));
arr.push(new foodItemDef("Apple raw", 63, 0.2, 0.18, 15.22, 2.1, 1));
arr.push(new foodItemDef("Coffee Espresso", 9, 0.12, 0.18, 1.67, 0, 14));
arr.push(new foodItemDef("Cereal choco", 387, 5.1, 3.5, 85.1, 1.4, 515));
arr.push(new foodItemDef("Oreo", 450, 6, 21, 75, 3, 56));
arr.push(new foodItemDef("Salmon", 208, 20.42, 13.42, 0, 0, 59));


//compares with food item array and returns the food item matched
var getMatch = function (image) {
    for (var i = 0; i < foodArr.length; i++){
        var result = foodArr[i].name.toLowerCase().indexOf(image.toLowerCase());
        if (result >= 0) {
            return foodArr[i];
        }
    }
    var defaultDummy = foodItemDef("Generic", 20, 1.24, 5, 1.64, 0, 4));
    return defaultDummy;
}
