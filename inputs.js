let naslov;
let izvodjac;
let trajanje;
let zanr;


function unesiNaslov(unetNaslov) {
    naslov = unetNaslov;
    
    console.log(`Tip unetog naslova je ${typeof naslov}`);
    console.log(`Unet naslov je ${naslov}`);
}

function unesiIzvodjaca(unetIzvodjac) {
    izvodjac = unetIzvodjac;

    console.log(`Tip unetog izvodjaca je ${typeof izvodjac}`);
    console.log(`Unet izvodjac je ${izvodjac}`);

}

function unesiZanr(unetZanr) {
    zanr = unetZanr;

    console.log(`Tip unetog zanra je ${typeof zanr}`);
    console.log(`Unet izvodjac je ${zanr}`);

}

function unesiTrajanje(unetoTrajanje) {
    trajanje = unetoTrajanje;

    console.log(`Tip unetog trajanje je ${typeof trajanje}`);
    console.log(`Uneto trajanje je ${trajanje}`);

}

function ispisiInformacijeOPesmi() {
    console.log(`Pesma: ${naslov}, Izvodjac: ${izvodjac}, Zanr: ${zanr}, Trajanje ${trajanje}`);
}

unesiNaslov("Bol do ludila");
unesiIzvodjaca("Marija Serifovic");
unesiZanr("Balada");
unesiTrajanje("3 minute");

ispisiInformacijeOPesmi();


console.log("****************")

function parIliNepar(unetBroj) {
    let broj = Number(unetBroj);

    let parnost = ["even", "odd"];
    console.log(unetBroj / 2);
    console.log(`${broj} je ${parnost[0]} broj`)
}

parIliNepar(4);

console.log("****************")

function izracunajProsek(nums) {
    let broj1 = Number(nums[0]);
    let broj2 = Number(nums[1]);
    let broj3 = Number(nums[2]);

    let prosek = (broj1 + broj2 + broj3) / nums.length;

    console.log(`Prosek tri broja je ${prosek}`);
}

let nizBrojeva = [1, 2, 3];
izracunajProsek(nizBrojeva);

console.log("****************")

function stampajOmiljenuHranu(omiljenaHrana) {
    console.log(`Moja omiljena hrana: `);
    console.log(`- ${omiljenaHrana[0]}`);
    console.log(`- ${omiljenaHrana[1]}`);
    console.log(`- ${omiljenaHrana[2]}`);
    console.log(`- ${omiljenaHrana[3]}`);
}

let nizHrane = ["Pizza", "Burgeri", "Cezar salata", "Kelj"]
stampajOmiljenuHranu(nizHrane);

