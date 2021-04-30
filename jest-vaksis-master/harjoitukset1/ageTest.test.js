//testi per funktio
const { ageTest } = require('./h1')

test('täysi-ikainen(19)', () =>{
    expect(ageTest(19)).toBe(true);
});

test('täysi-ikainen(16)', () =>{
    expect(ageTest(16)).toBe(false);
});

test('age as number string true', ()=>{
    expect(ageTest("20")).toBe(true);
});

test('age as number string false', ()=>{
    expect(ageTest("12")).toBe(false);
});

test('syötteet merkkijonoja heitetään poikkeus', ()=>{
    expect(()=>{
        ageTest()}).toThrow('anna lukuja');
});

test('syötteet merkkijonoja heitetään poikkeus', ()=>{
    expect(()=>{
        ageTest("roskaa")}).toThrow('anna lukuja');
});