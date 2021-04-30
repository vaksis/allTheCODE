console.log("hello world");

function summa(x, y)
{
    if(isNaN(x) || isNaN(y)){
        return "anna lukuja";

    }else{
        console.log("annettu lukuja ")
        return x+y;
    }
}
console.log(summa(1, 2));
console.log(summa(-11111, 248763784));


console.log("_______________Tehtävä 1_____________");

function terve(name)
{
    let a = "hei olen " + name;
    return a;
}
console.log(terve("veeti"));

console.log("_______________Tehtävä 2______________");

function potency(nelio)
{
    let b = Math.pow(nelio, 2);
    return b;
}
console.log(potency(10));
console.log(potency(2));


console.log("________________Tehtävä 3_____________");

function ika(mature)
{
    if(mature >= 18){
        return "täysi ikäinen";
    }else if ( mature < 18){
        return "ala ikäinen";
    }else{
        return "unknown age";
    }
}
console.log(ika(25));


console.log("________________Tehtävä 4_____________");

function luvut(x, y)
{
    if(x < y){
        return `annetuista luvuista ${y} ja ${x} suurempi on ${y}`;
    }else if(x > y){
        return `annetuista luvuista ${y} ja ${x} suurempi on ${x}`;
    }else if(x == y){
        return `annetuista luvuista ${y} ja ${x} ovat täysin samat`;
    }
}
console.log(luvut(1, 7));

console.log(luvut(100, 10));

console.log(luvut(1, 1));


console.log("_______________Tehtävä 5____________");

function triangle(x,y)
{
    let area = (x * y)/2;
    return Math.round(area * 10)/10;
}
console.log(triangle(3.53, 19))
console.log(triangle(3, 186.32))

console.log("_______________Tehtävä 6____________");

function osamaara(jaettava, jakaja)
{
    var result = jaettava / jakaja;
    if(jakaja == 0){
        return("nollalla ei voida jakaa");
    }else{
       return result;
    }
}
console.log(osamaara(5.5, 6));
console.log(osamaara(10.0, 16))
console.log(osamaara(6,0))


console.log("_______________Tehtävä 7____________");

function ColorAnalysis(value) {

    if(value >= 380 && value <= 450)  {
        return "Violet";
    }else if(value > 450 && value <= 490){
        return "Blue";
    }else if(value > 490 && value <= 560){
        return "Green";
    }else if(value > 560 && value <= 590){
        return "yellow";
    }else if(value > 590 && value <= 630){
        return "Orange";
    }else if(value > 630 && value <= 760){
        return "red";
    }else {
        return null;
    } 
}
console.log(ColorAnalysis(400))
console.log(ColorAnalysis(570))
console.log(ColorAnalysis(640))
console.log(ColorAnalysis(1000))

console.log("_______________Tehtävä 8____________");

function TaxTrip(people, Km)
{
    let = taksa = null;
    if(people == 1 || people == 2){
        taksa = 1.6;
    }else if(people == 3 || people == 4){
        taksa = 1.9;
    }else if(people == 5 || people == 6){
        taksa = 2.0;
    }else if(people > 6){
        taksa = 2.2;
    }
    var cal = Km * taksa + 5.40; 
    return  `taksin hinta on ${cal}`;
}
console.log(TaxTrip(2, 4));
console.log(TaxTrip(3, 4));
console.log(TaxTrip(5, 6));
console.log(TaxTrip(8,7));


console.log("_______________Tehtävä 9____________");


function roundening(x)
{
    //WORK IN PROGRESS
    if(x >= 0){
        return Math.floor(x + 0.5);
    }else{
        return Math.ceil(x-0.5);
    }
}

console.log(roundening(3.07));
console.log(roundening(4.55));
console.log(roundening(-8.82));

console.log("_______________Tehtävä 10____________");


function productPrice(price, alv)
{
    let proesnttikerroin = 1;
    if (100 <=price  && price <=200){
        proesnttikerroin = 0.95;
    } else if(200 <=price && price<= 500){
        proesnttikerroin = 0.9;
    }else if(500 <=price && price<= 1000){
        proesnttikerroin = 0.85;
    }
    return price * proesnttikerroin * (alv + 1);
}
console.log(productPrice(100, 0.24));
console.log(productPrice(250, 0.24));
console.log(productPrice(1000, 0.24));


