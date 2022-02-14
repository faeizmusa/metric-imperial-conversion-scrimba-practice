let elValue=document.getElementById("my-value");
elValue.textContent= prompt('Insert number value for conversion'); //prompt for integer
mainValue= +elValue.textContent; //convert prompt to number type

//declaring the DOM
let elMeter=document.getElementById("meter"); 
let elLiter=document.getElementById("liter");
let elKilo=document.getElementById("kilo");

//function for all three conversion
let unitConvert=(el,unit1,unit2,ratio)=>{
    el.textContent=`${mainValue} ${unit1} = `+ (mainValue*ratio).toFixed(3)+ ` ${unit2} | ${mainValue} ${unit1} =` +(mainValue/ratio).toFixed(3)+` ${unit1}` ;
}

//calling the function
unitConvert(elMeter,'meters','feet',3.28084);
unitConvert(elLiter,'liters','gallons',0.264172)
unitConvert(elKilo,'kilos','pounds',2.20462)