var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

// Create connection to database
var config =
    {
        userName: 'fat',
        password: 'EAT4ever',
        server: 'snapcount.database.windows.net',
        options:
        {
            database: 'Food' //update me
            , encrypt: true
        }
    };
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    }
   else {
       console.log('connected');
        matchAndQuery();
        queryDatabase();
        }
    }
);

function queryDatabase(query) {
    console.log('Reading rows from the Table...');
    /*SELECT FOOD_DES.Long_Desc, NUTR_DEF.NutrDesc, NUT_DATA.Nutr_Val
    FROM NUTR_DEF INNER JOIN (FOOD_DES INNER JOIN NUT_DATA ON FOOD_DES.NDB_No = NUT_DATA.NDB_No) ON NUTR_DEF.Nutr_No = NUT_DATA.Nutr_No
    WHERE((((NutrDesc) Like "*Energy*") OR ((NutrDesc) Like "*Protein*") OR ((NutrDesc) Like "*Carbohydrate*") OR ((NutrDesc) Like "*Sugars*") OR ((NutrDesc) Like "*Fiber*") OR  ((NutrDesc) Like "*Sodium*")  OR  ((NutrDesc) Like "*lipid*")) AND((FOOD_DES.Long_Desc) LIKE "*Coffee*") ) 
    ORDER BY FOOD_DES.Long_Desc, NUTR_DEF.SR_Order;
    */
    // Read all rows from table
    request = new Request(
        query, 
        function (err, rowCount, rows) {
            console.log(rowCount + ' row(s) returned');
            console.log(rows); 
            process.exit();
        }
    );

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);
}

/*function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function trimTrailingChars(s, charToTrim) {
    var regExp = new RegExp(charToTrim + "+$");
    var result = s.replace(regExp, "");

    return result;
}
*/ 
function matchAndQuery(name) {
   /* var splitedName = name.split();
    splitedNameFinal = [];
    for (var i in splitedName) {
        if (i.length > 2) {
            if (i.charAt(i.length - 1) === "s") {
                trimTrailingChars(i, s);
            }
            splitedNameFinal.push(i.toLowerCase);
            splitedNameFinal.push(capitalizeFirstLetter(i));
        }
    }*/
    var db_foodname = "SELECT FOOD FROM Food_Nut"; 
    var db_calorie = "SELECT CALORIE FROM Food_Nut WHERE FOOD Like \" * db_foodname * \"";
    var db_carb = "SELECT CARB FROM Food_Nut WHERE FOOD  Like \" * db_foodname * \"";
    var db_protein = "SELECT PROTEIN FROM Food_Nut WHERE FOOD  Like \" * db_foodname * \"";
    var db_fat = "SELECT FAT FROM Food_Nut WHERE FOOD  Like \" * db_foodname * \""; 
       
    /* var q1 = "SELECT FOOD_DES.Long_Desc, NUTR_DEF.NutrDesc, NUT_DATA.Nutr_Val FROM NUTR_DEF INNER JOIN (FOOD_DES INNER JOIN NUT_DATA ON FOOD_DES.NDB_No = NUT_DATA.NDB_No) ON NUTR_DEF.Nutr_No = NUT_DATA.Nutr_No WHERE((((NutrDesc) Like \" * Energy * \") OR ((NutrDesc) Like \" * Protein * \") OR ((NutrDesc) Like \" * Carbohydrate * \") OR ((NutrDesc) Like \" * Sugars * \") OR ((NutrDesc) Like \" * Fiber * \") OR  ((NutrDesc) Like \" * Sodium * \")  OR  ((NutrDesc) Like \" * lipid * \")) ";

    if (splitedNameFinal.length === 1) {
        var append = "AND ((FOOD_DES.Long_Desc) LIKE \"*";
        append.concat(splitedNameFinal[1]);
        append.concat("* \")) ");
        q1.concat(append);
    }
    else {
        var append2 = "AND (";
        for (var j in splitedNameFinal) {
            append2.concat(" (FOOD_DES.Long_Desc) LIKE \"*");
            append2.concat(j);
            append2.concat("* \")) OR");
            q1.concat(append2);
         }
        trimTrailingChars(q1, " OR");    //remove last OR and space
        q1.append(")");
    }
    q1.append(" ORDER BY FOOD_DES.Long_Desc, NUTR_DEF.SR_Order;");*/
    queryDatabase(db_foodname);
}