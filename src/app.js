console.log("Merhaba kodlama.io")

//JS type safe değildir.
let dolarDun = 9.20;
let dolarBugun = 9.30;

console.log(dolarDun)
//const - sabit, başka bir şey atayamazsın.
const euroDun = 11.2

console.log(euroDun)
//array - dizi
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

for (let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+ konutKredileri[i]+"</li>")
}

console.log(konutKredileri)