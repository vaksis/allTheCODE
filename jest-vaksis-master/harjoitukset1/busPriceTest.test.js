const { busPrice } = require('./h1')

test('lastenlippu 5 palauttaa 0', () =>{
    expect(busPrice(5)).toBe(0);
});

test('koululaislippu 15 palauttaa 1)', () =>{
    expect(busPrice(15)).toBe(1);
});

test('nuorisolippu 20 palauttaa 1.5)', () =>{
    expect(busPrice(20)).toBe(1.5);
});

test('aikuislippu 30 palauttaa 3)', () =>{
    expect(busPrice(20)).toBe(1.5);
});

test('seniori 70 palauttaa 1.5)', () =>{
    expect(busPrice(20)).toBe(1.5);
});

test('syötteet merkkijonoja heitetään poikkeus', ()=>{
    expect(()=>{
        busPrice()}).toThrow('anna lukuja');
});

test('syötteet merkkijonoja heitetään poikkeus', ()=>{
    expect(()=>{
        busPrice("roskaa")}).toThrow('anna lukuja');
});

test('lastenlippu 5 palauttaa 0', () =>{
    expect(busPrice("5")).toBe(0);
});

test('koululaislippu 15 palauttaa 1)', () =>{
    expect(busPrice("15")).toBe(1);
});