const { Price } = require('./h1')

test('laske hinta, kun veroton hinta on 30€, ostaja on kanta-asiakas ja vero on 24% (tulos=37.2)', () => {
    expect(Price(30, 24, true)).toBe(37.2);
});

test('laske hinta, kun veroton hinta on 69€, ostaja on kanta-asiakas ja vero on 24% (tulos=83.42)', () => {
    expect(Price(69, 24, true)).toBe(83.42);
});

test('laske hinta, kun veroton hinta on 69€, ostaja ei ole kanta-asiakas ja vero on 24% (tulos=85.56)', () => {
    expect(Price(69, 24)).toBe(85.56);
});

test('laske hinta, kun veroton hinta on "69"€, ostaja on kanta-asiakas ja vero on "24"% (tulos=83.42)', () => {
    expect(Price("69", 24, true)).toBe(83.42);
});

test('laske hinta, kun veroton hinta on 169€, ostaja on kanta-asiakas ja vero on 24% (tulos=199.08)', () => {
    expect(Price(169, 24, true)).toBe(199.08);
});

test('laske hinta, kun veroton hinta on 269€, ostaja on kanta-asiakas ja vero on 24% (tulos=300.20)', () => {
    expect(Price(269, 24, true)).toBe(300.20);
});

test('laske hinta, kun veroton hinta on -69€, ostaja on kanta-asiakas ja vero on 24% (tulos="ei voi olla negatiivinen")', () => {
    expect(()=> {
        Price(-69, 24, true)}).toThrow("luku ei voi olla negatiivinen");
});

test('laske hinta, kun veroton hinta on 69€, ostaja on kanta-asiakas ja vero on "berkele" (tulos="Laitas alv")', () => {
    expect(()=> {
        Price(69, "roskaa", true)}).toThrow("anna alv");
});

test('laske hinta, kun veroton hinta on "roskaa", ostaja on kanta-asiakas ja vero on 24% (tulos="Laitas hinta")', () => {
    expect(()=> {
        Price("roskaa", 24, true)}).toThrow("anna hinta");
});