const sum = (a, b=0) =>{
    let numA = Number(a);
    let numB = Number(b);

    if(a === undefined || a === null){
        throw new Error('ei parametreja')
    }

    if(Number.isNaN(numA) || Number.isNaN(numB)){
        throw new Error('anna lukuja')
    }


    return numA + numB;
}
module.exports = sum;
