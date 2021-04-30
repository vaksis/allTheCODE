let countries = [
    {   name:"tiistai",
        capital:"Halloumi-kasvisbolognese-pennevuokaa",
        population:"Lohkoperunoita",
        flag:"https://www.kotikokki.net/media/cache/large/recipeimage/large/52d6df2cd074a9ec0e09f6c5/original.jpg?1297695989"
    },
    {   name:"keskiviikko",
        capital:"Kasviswokkia",
        population:"Liha-makaronilaatikkoa",
        flag:"https://ripaustryffelia.files.wordpress.com/2016/05/makaronilaatikko-vaaka.jpg"
    },
    {   name:"torstai",
        capital:"Kasvis-hernekeittoa",
        population:"Hernekeittoa",
        flag:"https://images.cdn.soppa365.fi/6nn8EgtwFApuBB5gDi3N8-rUTBQ=/1230x0/smart/soppa365.fi/s3fs-public/recipe_main_media/567927b2ec3f99.55477425.jpg?itok=maqUfM38"
    },
    {   name:"perjantai",
        capital:"Bataatti-kookoskermacurrya",
        population:"Palviporsas-ananaspizzaa",
        flag:"https://img.ilcdn.fi/mIxDELX5Vywfi9M-6dlSSMbb94o=/275x0:4626x3264/full-fit-in/612x0/img-s3.ilcdn.fi/8ecfdeced1b65d71f769ac2dfa19dedaa71752c74f36d488ddb2d306d2bab74a.jpg"
    }]


//import { countries } from './harj4list.js';
let countryList = document.getElementById("countrylist");


function newTextElem(text, type){
    let myElem = document.createElement(type)
    myElem.textContent = text;
    return myElem;
}



function newCountryDiv(country){
    
    let myDiv = document.createElement("div");
    myDiv.className = "country";

    let myTitle = newTextElem(country.name,"H3");

    myDiv.append(myTitle);

    let myInfoDiv = newInfoDiv(country);
    myDiv.append(myTitle, myInfoDiv)

    myTitle.addEventListener("mouseover", () => changeColor(myTitle, "red"));
    myTitle.addEventListener("mouseout", () => changeColor(myTitle, "black"));

    myInfoDiv.style.display = "none";
    myTitle.addEventListener("click", () => toggleData(myInfoDiv));

    return myDiv;
}

countries.forEach(country => {
    let elem = newCountryDiv(country);
    countryList.appendChild(elem);
});

function changeColor(elem, color){
    elem.style.color = color;
}

function newInfoDiv(country){
    let myDiv = document.createElement("div");

    let myCapital = newTextElem( "vegaani ruoka:" + country.capital, "p");
    let myPopulation = newTextElem("Linjastolounas:" + country.population, "p");
    let myImage = document.createElement("img");
    myImage.src = country.flag;

    myDiv.append(myCapital, myPopulation, myImage);

    return myDiv;
}

function toggleData(item){
    if(item.style.display === "none"){
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
}

