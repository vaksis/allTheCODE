const { Circle } = require('./h1')


test('Ohjelma palauttaa 314,16', () =>{
    expect(Circle(10)).toBe(314.16);
});


test('ohjelma muuttaa annetun parametrin luvuksi', () =>{
    expect(Circle("10")).toBe(314.16);
});


test('syötte annetaan ei mitään heitetään poikkeus', ()=>{
    expect(()=>{
        Circle()}).toThrow('ei parametreja');
});

test('syötteet merkkijonoja heitetään poikkeus', ()=>{
    expect(()=>{
        Circle("roskaa")}).toThrow('anna lukuja');
});



test('syötte annetaan negatiivisella arvolla heitetään poikkeus', ()=>{
    expect(()=>{
        Circle(-1)}).toThrow('luku ei voi olla negatiivinen');
});
