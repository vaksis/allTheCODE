const { quotientTest } = require('./h1')

test('jakaa 1/2, tulos 0.5', () =>{
    expect(quotientTest(1,2)).toBe(0.5);
});

test('jakaa 1/2, tulos 0.5', () =>{
    expect(quotientTest("1","2")).toBe(0.5);
});



test('parametrit puuttuvat, heitetään poikkeus', () =>{
    expect(() => {
        quotientTest()}).toThrow('ei parametreja');
});

test('jaetaan luku 3', () =>{
    expect(quotientTest(3)).toBe(3);
});


test('jaetaan nollalla tulos on virhe', ()=>{
    expect(()=>{
        quotientTest(1, 0)}).toThrow("nollalla ei voi jakaa");
});
