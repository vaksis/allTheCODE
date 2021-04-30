const sum = require('./sum')

test('laske yhteen 1+2, tulos 3', () =>{
    expect(sum(1,2)).toBe(3);
});

test('laske yhteen "1"+"2" , tulos 3', () =>{
    expect(sum("1","2")).toBe(3);
});

test('syötteet merkkijonoja heitetään poikkeus', ()=>{
    expect(()=>{
        sum("roska", "lapio")}).toThrow('anna lukuja');
});


test('annetaan vain 1 parametri tuloksena 3', () =>{
    expect(sum(3)).toBe(3);
});

test('parametrit puuttuvat, heitetään poikkeus', () =>{
    expect(() => {
    sum()}).toThrow('ei parametreja');
});
