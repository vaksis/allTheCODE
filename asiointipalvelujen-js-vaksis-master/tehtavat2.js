console.log('-----------Tehtava 1-----------');


let muistilista = ["osta maitoa", "kuntoile", "lue kokeeseen", "vie rostkat", "istuta tulppaaneja"];
console.log(muistilista);

console.log("forEach");
muistilista.forEach(element => {
    console.log("-", element)
})

for(let i=0; i < muistilista.length; i++){
    console.log(i, " : ", muistilista[i]);
}

console.log("toString");
console.log(muistilista.toString());

console.log('-----------tehtava 2-----------');

var food = new Array();

muistilista.push("mene töihin ");
muistilista.push("syö")


console.log(muistilista);

console.log(muistilista.length);

muistilista.shift("osta maitoa");


console.log(muistilista);

console.log(muistilista.length);

console.log('-----------tehtava 3-----------');

let taulukko1 = {name: "aku ankka", age: "33", phone: "044 1234567", email:"aku.ankka@ankkalinna.gov"};
let taulukko2 = {name: "nalle puh", age: "44", phone: "044 1656464", email:"nalle.puh@china.gov"};
let taulukko3 = {name: "hessu hopo", age: "12", phone: "044 443873", email:"hessu.hopo@ankkalinna.gov"};
let taulukko4 = {name: "pagan min", age: "48", phone: "044 6827366", email:"pagan.min@kyrat.ky"};

function personalInformation(taulukko)
{
    return(`nimi: ${taulukko.name}\nikä ${taulukko.age}\npuh: ${taulukko.phone}\nemail: ${taulukko.email}`);
}
console.log(personalInformation(taulukko1));
console.log(personalInformation(taulukko2));





console.log('-----------tehtava 4-----------');


console.log('------------------------------');
console.log("forEach");
console.log('------------------------------');

let ankkaLinna = [taulukko1, taulukko2, taulukko3, taulukko4];

ankkaLinna.forEach(element => {
    console.log(personalInformation(element));
})
