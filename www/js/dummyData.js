var foodArr = {};
var foodItemDef = function(name, calories_kCal, Protein, Fat,Carb){

    this.name = name;
    this.cal = calories_kCal;
    this.pro = Protein;
    this.fat = Fat;
    this.carb = Carb;
   // this.fiber = Fiber;
   // this.NA = Sodium;
}


arr.push(new foodItemDef("Beer", 29, 0.24, 0, 1.64 ));
arr.push(new foodItemDef("Apple juice", 46, 0.1, 0.13, 11.3, 0.2, 4));
arr.push(new foodItemDef("Orange Juice", 41, 0, 0, 9.1, 0, 11));
arr.push(new foodItemDef("French Fries", 290, 3.31, 17, 39.5, 3.9, 618));
arr.push(new foodItemDef("Macaroni & cheese", 143, 5.01, 4.34, 21.08, 1.3, 288));
arr.push(new foodItemDef("Apple raw", 63, 0.2, 0.18, 15.22, 2.1, 1));
arr.push(new foodItemDef("Coffee Espresso", 9, 0.12, 0.18, 1.67, 0, 14));
arr.push(new foodItemDef("Cereal choco", 387, 5.1, 3.5, 85.1, 1.4, 515));
arr.push(new foodItemDef("Salmon", 208, 20.42, 13.42, 0, 0, 59));
arr.push(new foodItemDef("French Fries", 290, 3.31, 17, 39.5, 3.9, 618));
//in custom vision
arr.push(new foodItemDef("banana",105.4,1.3,0.4,27));
arr.push(new foodItemDef("oreo", 450, 6, 21, 75, 3, 56));
arr.push(new foodItemDef("coca_cola",140,0,0,39));  
arr.push(new foodItemDef("ribena",100,0,0,24.4));   //100
arr.push(new foodItemDef("ritz",80,1,4.5,10));
arr.push(new foodItemDef("Vita_Soy",70,4,2,10));    //100
arr.push(new foodItemDef("Canned_Lemon_Tea",36,0,0,8.7 )); //100
arr.push(new foodItemDef("Chocolate_Biscuit",500,5.4,24.9,27.3 ));//100   
arr.push(new foodItemDef("Cranberry_Juice",90,0,0,232 ));
arr.push(new foodItemDef("cup_noodles", 311,7.9,12.1,43));
arr.push(new foodItemDef("Green_Tea",16,0,0,3.8 )); //100
arr.push(new foodItemDef("Kumquat_Tea",31,0,0,7.3 )); //100
arr.push(new foodItemDef("Peach_Tea",30,0,0,7.6 )); //100
arr.push(new foodItemDef("prawn_cracker",385,2.5,1.2,89.8, ));//100 
arr.push(new foodItemDef("VLT",55,0,0,13.6 ));


//name, calories_kCal, Protein, Fat,Carb
/*
    arr.push(new foodItemDef("Cheese_Cracker", ));
    arr.push(new foodItemDef("Cream_Cracker", ));
    arr.push(new foodItemDef("Cubic_Pastry", ));
    arr.push(new foodItemDef("Grain_Cracker", ));
    arr.push(new foodItemDef("Grape_Juice", ));
    arr.push(new foodItemDef("Jacobs_Cracker", ));
    arr.push(new foodItemDef("Lemon_Cracker", ));
    arr.push(new foodItemDef("Peanut_Cracker", ));
    arr.push(new foodItemDef("Rice_Cracker", ));
    arr.push(new foodItemDef("saltine_cracker", ));
    arr.push(new foodItemDef("Wheat_Biscuit", ));
    */
//compares with food item array and returns the food item matched
function getMatch(image) {
    for (var i = 0; i < foodArr.length; i++){
        var result = foodArr[i].name.toLowerCase().indexOf(image.toLowerCase());
        if (result >= 0) {
            return foodArr[i];
        }
    }
    defaultDummy = new foodItemDef("Generic", 20, 1.24, 5, 1.64, 0, 4);
    return defaultDummy;
}
