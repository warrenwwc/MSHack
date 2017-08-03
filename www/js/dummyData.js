var foodArr = [];
var foodItemDef = function(name, calories_kCal, Protein, Fat,Carb){

    this.name = name;
    this.cal = calories_kCal;
    this.pro = Protein;
    this.fat = Fat;
    this.carb = Carb;
   // this.fiber = Fiber;
   // this.NA = Sodium;
}


foodArr.push(new foodItemDef("Beer 5% alc", 150,1.5,0,11.5 )); //bottle
foodArr.push(new foodItemDef("Apple juice", 120,0.4,0,29));     //bottle
foodArr.push(new foodItemDef("Orange Juice", 118, 3, 0, 0, 25)); //bottle
foodArr.push(new foodItemDef("French Fries", 290, 3.31, 17, 39.5, 3.9, 618)); //100
foodArr.push(new foodItemDef("Apple raw", 63, 0.2, 0.18, 15.22, 2.1, 1));
foodArr.push(new foodItemDef("Coffee Espresso Black", 1, 0.7, 0.11,  0));
foodArr.push(new foodItemDef("Cereal choco", 116,2,1,25)); //1 bowl
foodArr.push(new foodItemDef("banana",105.4,1.3,0.4,27));
foodArr.push(new foodItemDef("oreo", 160,2,7,25));//3 piece pack
foodArr.push(new foodItemDef("coca cola",161,2,0,40));  //can
foodArr.push(new foodItemDef("ribena",100,0,0,24.4));   //pack
foodArr.push(new foodItemDef("ritz",80,1,4.5,10));
foodArr.push(new foodItemDef("Vita Soy",175,10,5,25));    //pack
foodArr.push(new foodItemDef("Canned Lemon_Tea",126,0,0,25.21 )); //pack
foodArr.push(new foodItemDef("Chocolate Biscuit",160,2,6,24 ));  
foodArr.push(new foodItemDef("Cranberry Juice",90,0,0,232 ));
foodArr.push(new foodItemDef("cup noodles", 311,7.9,12.1,43));
foodArr.push(new foodItemDef("Green Tea",56,0,0,9 )); //pack
foodArr.push(new foodItemDef("Kumquat Tea",100,0,0,21 )); //pack
foodArr.push(new foodItemDef("Peach Tea",105,0,0,21 )); //pack
foodArr.push(new foodItemDef("prawn cracker",100,0,5,5 )); 
foodArr.push(new foodItemDef("VLT",55,0,0,13.6 ));
foodArr.push(new foodItemDef("Jacobs Cracker",120,4,4,22 )); //1 pack
foodArr.push(new foodItemDef("Lemon Cracker",140,1,7,18 )); //1 pack
foodArr.push(new foodItemDef("Peanut Cracker",190,4,9,23 ));
foodArr.push(new foodItemDef("Rice Cracker",73,0,3.2,11 ));
foodArr.push(new foodItemDef("saltine cracker",80,1.2,2,12 )); //6 cracker pack
foodArr.push(new foodItemDef("Wheat Biscuit", 70,1.6,2.8,14)); //4 cracker pack
foodArr.push(new foodItemDef("Cubic Pastry",50,1,3,6 ));
foodArr.push(new foodItemDef("Grain Cracker",60,1,1.5,10 ));
foodArr.push(new foodItemDef("Cheese Cracker",137,0,8,14 ));
foodArr.push(new foodItemDef("Cream Cracker", 140,3.2,4.4,22)); 
foodArr.push(new foodItemDef("Grape Juice", 142,0,0,36));


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
        if (image.toLowerCase().includes(foodArr[i].name.toLowerCase())) {
            return foodArr[i];
        }
    }
    defaultDummy = new foodItemDef("Generic", 20, 1.24, 5, 1.64, 0, 4);
    return defaultDummy;
}
