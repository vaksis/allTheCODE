//tee kaikkit testattavat funktiot 

const ageTest = (age) =>{
    let ageTestNum = Number(age);

    if(Number.isNaN(ageTestNum)){
        throw new Error('anna lukuja')
    }


    if(ageTestNum < 18){
        return false;
    } else {
        return true;
    }
}

const quotientTest = (a, b=1) =>{
    let numA = Number(a);
    let numB = Number(b);


    if(a === undefined || a === null){
        throw new Error('ei parametreja')
    }

    if(Number.isNaN(numA) || Number.isNaN(numB)){
        throw new Error('anna lukuja')
    }

    if(numB === 0) {
        throw new Error('nollalla ei voi jakaa');
    };


    return numA / numB;
}


const busPrice = (age1) =>{

    var age1Num = Number(age1);

    if(Number.isNaN(age1Num)){
        throw new Error('anna lukuja')
    }

    if(age1Num <= 7){
        return(0);
    } else if (age1Num >= 7 && age1Num < 16){
        return(1);
    } else if(age1Num >= 16 && age1Num < 25){
        return(1.5);
    } else if (age1Num >= 25 && age1Num <65){
        return(3);
    } else {
        return(1.5);
    }
}


const Circle = (a)=>{

    if(a === undefined || a === null){
        throw new Error('ei parametreja')
    }

    
    var A = Number(a);
    if(Number.isNaN(A)){
        throw new Error('anna lukuja')
    }


    if(A < 0) {
        throw new Error('luku ei voi olla negatiivinen');
    } else {
        var A = (Math.PI * A * A) * 100;
        return (Math.round(A) / 100);
    }
    
}


const Price = (price, alv, IsCustomer = false) => {
    

    var price = Number(price);
    var alv = Number(alv);
    if(Number.isNaN(price)){
        throw new Error('anna hinta')
    }

    if(Number.isNaN(alv)){
        throw new Error('anna alv')
    }

    if(price < 0 || alv < 0){
        throw new Error('luku ei voi olla negatiivinen');
    }
    var tax = (alv / 100) + 1;
    if(IsCustomer == true) 
    {
        if(price >= 50 && price <150)
        {
            var veroton = price * 0.975;
        } 
        else if(price >= 150 && price <250)
        {
            var veroton = price * 0.95;
        }
        else if (price >= 250)
        {
            var veroton = price * 0.9;
        }
        else {
            var veroton = price;
        }
        var verollinen = (veroton * tax) * 100;
        return (Math.round(verollinen) / 100);
    } else {
        var veroton = price;
        var verollinen = (veroton * tax) * 100;
        return (Math.round(verollinen) / 100);
    }
}
module.exports = {ageTest, quotientTest, busPrice, Circle, Price}


