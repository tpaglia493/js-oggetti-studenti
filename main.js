console.log("test")

//CREO L'OGGETTO STUDENTE

let studentMario = {
    name: "Mario",
    surname: "Rossi",
    age: 25,
    weigth: 75

};

//STAMPO A CONSOLE TUTTE LE PROPRITA' DELL'OGGETTO

for (key in studentMario) {
    console.log(`${key} : ${studentMario[key]}`)
}