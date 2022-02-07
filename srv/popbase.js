require("dotenv").config({
    path: __dirname + `/../.env`,
});

const fs = require("fs");
const sequelize = require("./sequelize/index");

let bars = sequelize.model("bar");
let arrayBars = [];
let boissons = sequelize.model("boisson");
let arrayBoissons = [];
let servi = sequelize.model("servis");
let arrayServi = [];
let typeBoissons = sequelize.model("type_boisson");
let arraytypeBoissons = [];

async function PushBars() {
    console.log("bar");
    arrayBars.push(
        await bars.create({
            horaires: {
                lundi: {
                    day: "lundi",
                    matin: "FERME",
                    soir: "16h-1h",
                },
                mardi: {
                    day: "mardi",
                    matin: "11h-12h",
                    soir: "15h-1h",
                },
                mercredi: {
                    day: "mercredi",
                    matin: "11h-12h",
                    soir: "15h-1h",
                },
                jeudi: {
                    day: "jeudi",
                    matin: "11h-12h",
                    soir: "15h-2h",
                },
                vendredi: {
                    day: "vendredi",
                    matin: "11h-12h",
                    soir: "15h-2h",
                },
                samedi: {
                    day: "samedi",
                    matin: "FERME",
                    soir: "16h-2h",
                },
                dimanche: {
                    day: "dimanche",
                    matin: "FERME",
                    soir: "15h-22h",
                },
            },
            nom: "Le Retroviseur ",
            adresse: "12 rue Bondes, 80000 Amiens",
            coordN: 49.89575797845227,
            coordE: 2.303820381019288,
            img: "img",
        })
    );
    arrayBars.push(
        await bars.create({
            horaires: JSON.stringify({
                lundi: {
                    day: "lundi",
                    matin: "FERME",
                    soir: "17h-1h",
                },
                mardi: {
                    day: "mardi",
                    matin: "FERME",
                    soir: "17h-1h",
                },
                mercredi: {
                    day: "mercredi",
                    matin: "FERME",
                    soir: "17h-2h",
                },
                jeudi: {
                    day: "jeudi",
                    matin: "FERME",
                    soir: "17h-2h",
                },
                vendredi: {
                    day: "vendredi",
                    matin: "FERME",
                    soir: "17h-2h",
                },
                samedi: {
                    day: "samedi",
                    matin: "FERME",
                    soir: "17h-2h",
                },
                dimanche: {
                    day: "dimanche",
                    matin: "FERME",
                    soir: "17h-1h",
                },
            }),
            nom: "Delirium Café",
            adresse: "76 Rue St Leu, 80000 Amiens",
            coordN: 49.90011272989459,
            coordE: 2.3007677460390306,
            img: "img",
        })
    );
    arrayBars.push(
        await bars.create({
            horaires: JSON.stringify({
                lundi: {
                    day: "lundi",
                    matin: "FERME",
                    soir: "FERME",
                },
                mardi: {
                    day: "mardi",
                    matin: "FERME",
                    soir: "14h30-1h",
                },
                mercredi: {
                    day: "mercredi",
                    matin: "FERME",
                    soir: "14h30-1h",
                },
                jeudi: {
                    day: "jeudi",
                    matin: "FERME",
                    soir: "14h30-2h",
                },
                vendredi: {
                    day: "vendredi",
                    matin: "FERME",
                    soir: "14h30-2h",
                },
                samedi: {
                    day: "samedi",
                    matin: "FERME",
                    soir: "17h-2h",
                },
                dimanche: {
                    day: "dimanche",
                    matin: "FERME",
                    soir: "FERME",
                },
            }),
            nom: "9 3/4",
            adresse: "21 Rue Edmond Fontaine, 80000 Amiens",
            coordN: 49.899856574206595,
            coordE: 2.3008539000000003,
            img: "img",
        })
    );
    arrayBars.push(
        await bars.create({
            horaires: JSON.stringify({
                lundi: {
                    day: "lundi",
                    matin: "FERME",
                    soir: "13h-0h45",
                },
                mardi: {
                    day: "mardi",
                    matin: "FERME",
                    soir: "13h-2h45",
                },
                mercredi: {
                    day: "mercredi",
                    matin: "FERME",
                    soir: "14h30-1h",
                },
                jeudi: {
                    day: "jeudi",
                    matin: "FERME",
                    soir: "13h-2h45",
                },
                vendredi: {
                    day: "vendredi",
                    matin: "FERME",
                    soir: "13h-2h45",
                },
                samedi: {
                    day: "samedi",
                    matin: "FERME",
                    soir: "18h-2h45",
                },
                dimanche: {
                    day: "dimanche",
                    matin: "FERME",
                    soir: "18h-2h45",
                },
            }),
            nom: "My Godness",
            adresse: "15 Rue Edmond Fontaine, 80000 Amiens",
            coordN: 49.90010587534423,
            coordE: 2.3009570074207324,
            img: "img",
        })
    );
    arrayBars.push(
        await bars.create({
            horaires: JSON.stringify({
                lundi: {
                    day: "lundi",
                    matin: "FERME",
                    soir: "16h-1h",
                },
                mardi: {
                    day: "mardi",
                    matin: "FERME",
                    soir: "16h-1h",
                },
                mercredi: {
                    day: "mercredi",
                    matin: "FERME",
                    soir: "16h-1h",
                },
                jeudi: {
                    day: "jeudi",
                    matin: "FERME",
                    soir: "13h-2h",
                },
                vendredi: {
                    day: "vendredi",
                    matin: "FERME",
                    soir: "13h-2h",
                },
                samedi: {
                    day: "samedi",
                    matin: "FERME",
                    soir: "13h-2h",
                },
                dimanche: {
                    day: "dimanche",
                    matin: "FERME",
                    soir: "13h-1h",
                },
            }),
            nom: "Baobar",
            adresse: "2 Rue des Bondes, 80000 Amiens",
            coordN: 49.896037013596086,
            coordE: 2.3035924,
            img: "img",
        })
    );
    arrayBars.push(
        await bars.create({
            horaires: JSON.stringify({
                lundi: {
                    day: "lundi",
                    matin: "FERME",
                    soir: "17h-1h",
                },
                mardi: {
                    day: "mardi",
                    matin: "FERME",
                    soir: "17h-1h",
                },
                mercredi: {
                    day: "mercredi",
                    matin: "FERME",
                    soir: "17h-1h",
                },
                jeudi: {
                    day: "jeudi",
                    matin: "FERME",
                    soir: "17h-1h",
                },
                vendredi: {
                    day: "vendredi",
                    matin: "FERME",
                    soir: "17h-1h",
                },
                samedi: {
                    day: "samedi",
                    matin: "FERME",
                    soir: "18h-1h",
                },
                dimanche: {
                    day: "dimanche",
                    matin: "FERME",
                    soir: "18h-1h",
                },
            }),
            nom: "Taverne Elektrik",
            adresse: "54 Rue St Leu, 80000 Amiens",
            coordN: 49.898408131628926,
            coordE: 2.300915525123708,
            img: "img",
        })
    );
    arrayBars.push(
        await bars.create({
            horaires: JSON.stringify({
                lundi: {
                    day: "lundi",
                    matin: "11h-12h",
                    soir: "12h-1h",
                },
                mardi: {
                    day: "mardi",
                    matin: "11h-12h",
                    soir: "12h-1h",
                },
                mercredi: {
                    day: "mercredi",
                    matin: "11h-12h",
                    soir: "12h-1h",
                },
                jeudi: {
                    day: "jeudi",
                    matin: "11h-12h",
                    soir: "12h-1h",
                },
                vendredi: {
                    day: "vendredi",
                    matin: "11h-12h",
                    soir: "12h-1h",
                },
                samedi: {
                    day: "samedi",
                    matin: "11h-12h",
                    soir: "12h-1h",
                },
                dimanche: {
                    day: "dimanche",
                    matin: "11h-12h",
                    soir: "12h-1h",
                },
            }),
            nom: "Ad Hoc Cafe",
            adresse: "1 Pl. du Don, 80000 Amiens",
            coordN: 49.89585643524044,
            coordE: 2.303339027888188,
            img: "img",
        })
    );

    return;
}

async function PushTypeBoisson() {
    console.log("Type boisson");
    arraytypeBoissons.push(
        await typeBoissons.create({
            nom: "Biere",
        })
    );
    arraytypeBoissons.push(
        await typeBoissons.create({
            nom: "Cocktail",
        })
    );
    arraytypeBoissons.push(
        await typeBoissons.create({
            nom: "Get",
        })
    );
    arraytypeBoissons.push(
        await typeBoissons.create({
            nom: "Jager",
        })
    );
    arraytypeBoissons.push(
        await typeBoissons.create({
            nom: "Pastis",
        })
    );
    arraytypeBoissons.push(
        await typeBoissons.create({
            nom: "Rhum",
        })
    );
    arraytypeBoissons.push(
        await typeBoissons.create({
            nom: "Tequila",
        })
    );
    arraytypeBoissons.push(
        await typeBoissons.create({
            nom: "Vodka",
        })
    );
    arraytypeBoissons.push(
        await typeBoissons.create({
            nom: "Whiskys",
        })
    );

    return;
}

async function PushBoisson() {
    console.log("Boisson");
    arrayBoissons.push(
        await boissons.create({
            nom: "Panache", //0
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Monaco", //1
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Brew Dog Punk", //2
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Blanche Bruxelle", //3
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Deli Red", //4
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "La Retro", //5
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "La Paix Dieu", //6
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Delirium Tremens", //7
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Cuvée des Trolls", //8
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Triple Lefort", //9
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Picon Bière", //10
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Deli Argentum", //11
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Delirium Nocturnum", //12
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Chouffe Houblon", //13
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Omer", //14
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Cherry Chouffe", //15
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Biere du Corbeau", //16
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Bierreobeurre", //17
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Guinness Blonde", //18
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Guinness Brune", //19
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Saint Omer", //20
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Goudale Ambrée", //21
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Belzebuth Blanche", //22
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Belzebuth Rubis", //23
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Duvel", //24
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "BarBar", //25
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Castelain Winter", //26
            typeBoissonId: arraytypeBoissons[0].dataValues.id, //cf servi Biere
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Clan Campbell", //27
            typeBoissonId: arraytypeBoissons[8].dataValues.id, //cf servi Whiskys
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Jack Daniels", //28
            typeBoissonId: arraytypeBoissons[8].dataValues.id, //cf servi Whiskys
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Jameson", //29
            typeBoissonId: arraytypeBoissons[8].dataValues.id, //cf servi Whiskys
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Nikka", //30
            typeBoissonId: arraytypeBoissons[8].dataValues.id, //cf servi Whiskys
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Diplomatico", //31
            typeBoissonId: arraytypeBoissons[5].dataValues.id, //cf servi Rhums
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Sailor Jerry", //32
            typeBoissonId: arraytypeBoissons[5].dataValues.id, //cf servi Rhums
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Cuba Libre", //33
            typeBoissonId: arraytypeBoissons[5].dataValues.id, //cf servi Rhums
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Ti Punch", //34
            typeBoissonId: arraytypeBoissons[5].dataValues.id, //cf servi Rhums
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Bacardi", //35
            typeBoissonId: arraytypeBoissons[5].dataValues.id, //cf servi Rhums
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Havana Club", //36
            typeBoissonId: arraytypeBoissons[5].dataValues.id, //cf servi Rhums
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Matusalem", //37
            typeBoissonId: arraytypeBoissons[5].dataValues.id, //cf servi Rhums
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Coruba", //38
            typeBoissonId: arraytypeBoissons[5].dataValues.id, //cf servi Rhums
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Myers", //39
            typeBoissonId: arraytypeBoissons[5].dataValues.id, //cf servi Rhums
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Don Papa", //40
            typeBoissonId: arraytypeBoissons[5].dataValues.id, //cf servi Rhums
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Tour Du Monde (12)", //41
            typeBoissonId: arraytypeBoissons[5].dataValues.id, //cf servi Rhums
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Saint James Blanc", //42
            typeBoissonId: arraytypeBoissons[5].dataValues.id, //cf servi Rhums
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Shooter Jager", //43
            typeBoissonId: arraytypeBoissons[3].dataValues.id, //cf servi Jager
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Jager Bomb", //44
            typeBoissonId: arraytypeBoissons[3].dataValues.id, //cf servi Jager
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Girafe Jager", //45
            typeBoissonId: arraytypeBoissons[3].dataValues.id, //cf servi Jager
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Tequila Frozen", //46
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Tequila Sunrise", //47
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Pina Colada", //48
            typeBoissonId: arraytypeBoissons[6].dataValues.id, //cf servi Tequila
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Green Bel", //49
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Cosmopolitain", //50
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Caipirinha", //51
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Caipirinha Fraise", //52
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Mojito", //53
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Mojito Fraise", //54
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Vodka Soda", //55
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Sex on the Beach", //56
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Moscow Mule", //57
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "London Mule", //58
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Margarita", //59
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Margarita Frozen", //60
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Mai Tai", //61
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Lemon Spritz", //62
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Ginny", //63
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Vodka Black", //64
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Lovegood", //65
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Summer Fraise", //66
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Daiquiri", //67
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Daiquiri Fraise", //68
            typeBoissonId: arraytypeBoissons[1].dataValues.id, //cf servi Cocktail
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Tequila Paf", //69
            typeBoissonId: arraytypeBoissons[6].dataValues.id, //cf servi Tequila
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Tequila", //70
            typeBoissonId: arraytypeBoissons[6].dataValues.id, //cf servi Tequila
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Metre Tequila Paf", //71
            typeBoissonId: arraytypeBoissons[6].dataValues.id, //cf servi Tequila
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Shooter Vodka", //72
            typeBoissonId: arraytypeBoissons[7].dataValues.id, //cf servi Vodka
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Metre Shooter Vodka (12)", //73
            typeBoissonId: arraytypeBoissons[7].dataValues.id, //cf servi Vodka
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Shooter Vodka gouts", //74
            typeBoissonId: arraytypeBoissons[7].dataValues.id, //cf servi Vodka
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Vodka Pomme", //75
            typeBoissonId: arraytypeBoissons[7].dataValues.id, //cf servi Vodka
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Shooter Vodka", //76
            typeBoissonId: arraytypeBoissons[7].dataValues.id, //cf servi Vodka
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Ricard", //77
            typeBoissonId: arraytypeBoissons[4].dataValues.id, //cf servi Pastis
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Get27/31", //78
            typeBoissonId: arraytypeBoissons[2].dataValues.id, //cf servi Get
        })
    );

    return;
}

async function PushServis() {
    console.log("servis");

    arrayServi = await servi.bulkCreate([
        //Prix      quantité     l'id du bar à l'index dans l'array (la c'est le premier créer) la boisson comme pour le bar
        {
            //0
            prix: 3.0,
            quantite: 4,
            barId: arrayBars[3].dataValues.id,
            boissonId: arrayBoissons[77].dataValues.id,
        },
        {
            //1
            prix: 4.0,
            quantite: 25,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[17].dataValues.id,
        },
        {
            //2
            prix: 4.0,
            quantite: 25,
            barId: arrayBars[3].dataValues.id,
            boissonId: arrayBoissons[18].dataValues.id,
        },
        {
            //3
            prix: 4.0,
            quantite: 25,
            barId: arrayBars[3].dataValues.id,
            boissonId: arrayBoissons[19].dataValues.id,
        },
        {
            //4
            prix: 4.0,
            quantite: 25,
            barId: arrayBars[5].dataValues.id,
            boissonId: arrayBoissons[24].dataValues.id,
        },
        {
            //5
            prix: 4.0,
            quantite: 25,
            barId: arrayBars[6].dataValues.id,
            boissonId: arrayBoissons[21].dataValues.id,
        },
        {
            //6
            prix: 4.0,
            quantite: 25,
            barId: arrayBars[6].dataValues.id,
            boissonId: arrayBoissons[22].dataValues.id,
        },
        {
            //7
            prix: 4.0,
            quantite: 25,
            barId: arrayBars[6].dataValues.id,
            boissonId: arrayBoissons[23].dataValues.id,
        },
        {
            //8
            prix: 4.0,
            quantite: 25,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[21].dataValues.id,
        },
        {
            //9
            prix: 4.0,
            quantite: 25,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[22].dataValues.id,
        },
        {
            //10
            prix: 4.0,
            quantite: 25,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[23].dataValues.id,
        },
        {
            //11
            prix: 4.0,
            quantite: 25,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[14].dataValues.id,
        },
        {
            //12
            prix: 4.0,
            quantite: 4,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[77].dataValues.id,
        },
        {
            //13
            prix: 4.0,
            quantite: 4,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[43].dataValues.id,
        },
        {
            //14
            prix: 4.0,
            quantite: 4,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[43].dataValues.id,
        },
        {
            //15
            prix: 4.0,
            quantite: 4,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[43].dataValues.id,
        },
        {
            //16
            prix: 4.0,
            quantite: 4,
            barId: arrayBars[3].dataValues.id,
            boissonId: arrayBoissons[43].dataValues.id,
        },
        {
            //17
            prix: 5.0,
            quantite: 33,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[64].dataValues.id,
        },
        {
            //18
            prix: 5.0,
            quantite: 33,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[66].dataValues.id,
        },
        {
            //19
            prix: 6.0,
            quantite: 50,
            barId: arrayBars[5].dataValues.id,
            boissonId: arrayBoissons[24].dataValues.id,
        },
        {
            //20
            prix: 7.0,
            quantite: 33,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[63].dataValues.id,
        },
        {
            //21
            prix: 7.0,
            quantite: 33,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[65].dataValues.id,
        },
        {
            //22
            prix: 7.0,
            quantite: 33,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[37].dataValues.id,
        },
        {
            //23
            prix: 7.0,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[49].dataValues.id,
        },
        {
            //24
            prix: 7.0,
            quantite: 33,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[78].dataValues.id,
        },
        {
            //25
            prix: 7.0,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[78].dataValues.id,
        },
        {
            //26
            prix: 8.0,
            quantite: 33,
            barId: arrayBars[6].dataValues.id,
            boissonId: arrayBoissons[33].dataValues.id,
        },
        {
            //27
            prix: 8.0,
            quantite: 33,
            barId: arrayBars[6].dataValues.id,
            boissonId: arrayBoissons[67].dataValues.id,
        },
        {
            //28
            prix: 8.0,
            quantite: 33,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[67].dataValues.id,
        },
        {
            //29
            prix: 8.0,
            quantite: 33,
            barId: arrayBars[6].dataValues.id,
            boissonId: arrayBoissons[59].dataValues.id,
        },
        {
            //30
            prix: 8.0,
            quantite: 33,
            barId: arrayBars[6].dataValues.id,
            boissonId: arrayBoissons[53].dataValues.id,
        },
        {
            //31
            prix: 8.0,
            quantite: 33,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[59].dataValues.id,
        },
        {
            //32
            prix: 8.0,
            quantite: 33,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[53].dataValues.id,
        },
        {
            //33
            prix: 8.0,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[46].dataValues.id,
        },
        {
            //34
            prix: 8.0,
            quantite: 33,
            barId: arrayBars[5].dataValues.id,
            boissonId: arrayBoissons[46].dataValues.id,
        },
        {
            prix: 9.0,
            quantite: 33,
            barId: arrayBars[6].dataValues.id,
            boissonId: arrayBoissons[68].dataValues.id,
        },
        {
            prix: 9.0,
            quantite: 33,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[68].dataValues.id,
        },
        {
            prix: 9.0,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[58].dataValues.id,
        },
        {
            //38
            prix: 9.0,
            quantite: 33,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[38].dataValues.id,
        },
        {
            prix: 36.0,
            quantite: 33,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[41].dataValues.id,
        },
        {
            prix: 2.5,
            quantite: 2,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[77].dataValues.id,
        },
        {
            prix: 2.5,
            quantite: 4,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[74].dataValues.id,
        },
        {
            //42
            prix: 3.0,
            quantite: 25,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[0].dataValues.id,
        },
        {
            //43
            prix: 3.0,
            quantite: 25,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[5].dataValues.id,
        },
        {
            //44
            prix: 35.0,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[73].dataValues.id,
        },
        {
            prix: 35.0,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[71].dataValues.id,
        },
        {
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[8].dataValues.id,
        },
        {
            //47
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[15].dataValues.id,
        },
        {
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[16].dataValues.id,
        },
        {
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[4].dataValues.id,
        },
        {
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[12].dataValues.id,
        },
        {
            //50
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[13].dataValues.id,
        },
        {
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[1].dataValues.id,
        },
        {
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[2].dataValues.id,
        },
        {
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[3].dataValues.id,
        },
        {
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[4].dataValues.id,
        },
        {
            //54
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[10].dataValues.id,
        },
        {
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[7].dataValues.id,
        },
        {
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[8].dataValues.id,
        },
        {
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[9].dataValues.id,
        },
        {
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[3].dataValues.id,
            boissonId: arrayBoissons[8].dataValues.id,
        },
        {
            //59
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[5].dataValues.id,
            boissonId: arrayBoissons[16].dataValues.id,
        },
        {
            //60
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[5].dataValues.id,
            boissonId: arrayBoissons[8].dataValues.id,
        },
        {
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[5].dataValues.id,
            boissonId: arrayBoissons[25].dataValues.id,
        },
        {
            //63
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[5].dataValues.id,
            boissonId: arrayBoissons[26].dataValues.id,
        },
        {
            prix: 4.2,
            quantite: 25,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[75].dataValues.id,
        },
        {
            prix: 4.5,
            quantite: 5,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[34].dataValues.id,
        },
        {
            //65
            prix: 5,
            quantite: 25,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[6].dataValues.id,
        },
        {
            prix: 5.5,
            quantite: 50,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[20].dataValues.id,
        },
        {
            prix: 5.5,
            quantite: 50,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[20].dataValues.id,
        },
        {
            prix: 5.5,
            quantite: 33,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[42].dataValues.id,
        },
        {
            prix: 5.9,
            quantite: 50,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[5].dataValues.id,
        },
        {
            prix: 55.0,
            quantite: 2500,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[45].dataValues.id,
        },
        {
            prix: 6.0,
            quantite: 6,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[44].dataValues.id,
        },
        {
            prix: 6.0,
            quantite: 5,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[27].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 50,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[17].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 50,
            barId: arrayBars[6].dataValues.id,
            boissonId: arrayBoissons[21].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 50,
            barId: arrayBars[6].dataValues.id,
            boissonId: arrayBoissons[22].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 50,
            barId: arrayBars[6].dataValues.id,
            boissonId: arrayBoissons[23].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 50,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[21].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 50,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[22].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 50,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[23].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 50,
            barId: arrayBars[3].dataValues.id,
            boissonId: arrayBoissons[18].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 50,
            barId: arrayBars[3].dataValues.id,
            boissonId: arrayBoissons[19].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 50,
            barId: arrayBars[5].dataValues.id,
            boissonId: arrayBoissons[25].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 50,
            barId: arrayBars[5].dataValues.id,
            boissonId: arrayBoissons[26].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 6,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[44].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 6,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[44].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 6,
            barId: arrayBars[3].dataValues.id,
            boissonId: arrayBoissons[44].dataValues.id,
        },
        {
            prix: 6.9,
            quantite: 50,
            barId: arrayBars[3].dataValues.id,
            boissonId: arrayBoissons[14].dataValues.id,
        },
        {
            prix: 7.0,
            quantite: 50,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[0].dataValues.id,
        },
        {
            prix: 7.0,
            quantite: 4,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[29].dataValues.id,
        },
        {
            prix: 7.0,
            quantite: 4,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[29].dataValues.id,
        },
        {
            prix: 7.0,
            quantite: 4,
            barId: arrayBars[3].dataValues.id,
            boissonId: arrayBoissons[29].dataValues.id,
        },
        {
            prix: 7.0,
            quantite: 5,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[32].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 50,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[8].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 50,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[15].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 50,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[16].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 50,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[4].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 50,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[12].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 50,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[13].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 50,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[1].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 50,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[2].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 50,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[3].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 50,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[4].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 50,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[10].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 50,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[7].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 50,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[8].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 50,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[9].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 50,
            barId: arrayBars[3].dataValues.id,
            boissonId: arrayBoissons[8].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 50,
            barId: arrayBars[5].dataValues.id,
            boissonId: arrayBoissons[16].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[47].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[51].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[53].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[55].dataValues.id,
        },
        {
            prix: 7.9,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[59].dataValues.id,
        },
        {
            prix: 8.0,
            quantite: 50,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[11].dataValues.id,
        },
        {
            prix: 8.5,
            quantite: 33,
            barId: arrayBars[6].dataValues.id,
            boissonId: arrayBoissons[54].dataValues.id,
        },
        {
            prix: 8.5,
            quantite: 33,
            barId: arrayBars[6].dataValues.id,
            boissonId: arrayBoissons[48].dataValues.id,
        },
        {
            prix: 8.5,
            quantite: 33,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[54].dataValues.id,
        },
        {
            prix: 8.5,
            quantite: 33,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[48].dataValues.id,
        },
        {
            prix: 8.5,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[48].dataValues.id,
        },
        {
            prix: 8.5,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[54].dataValues.id,
        },
        {
            prix: 8.5,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[50].dataValues.id,
        },
        {
            prix: 8.5,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[56].dataValues.id,
        },
        {
            prix: 8.5,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[57].dataValues.id,
        },
        {
            prix: 8.5,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[60].dataValues.id,
        },
        {
            prix: 8.5,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[61].dataValues.id,
        },
        {
            prix: 8.5,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[62].dataValues.id,
        },
        {
            prix: 8.5,
            quantite: 33,
            barId: arrayBars[5].dataValues.id,
            boissonId: arrayBoissons[54].dataValues.id,
        },
        {
            prix: 8.5,
            quantite: 33,
            barId: arrayBars[5].dataValues.id,
            boissonId: arrayBoissons[56].dataValues.id,
        },
        {
            prix: 8.5,
            quantite: 5,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[28].dataValues.id,
        },
        {
            prix: 8.9,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[52].dataValues.id,
        },
        {
            prix: 9.0,
            quantite: 5,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[30].dataValues.id,
        },
        {
            prix: 9.0,
            quantite: 4,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[72].dataValues.id,
        },
        {
            prix: 9.0,
            quantite: 4,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[72].dataValues.id,
        },
        {
            prix: 7.5,
            quantite: 5,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[31].dataValues.id,
        },
        {
            prix: 7.5,
            quantite: 5,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[40].dataValues.id,
        },
        {
            prix: 3.5,
            quantite: 25,
            barId: arrayBars[6].dataValues.id,
            boissonId: arrayBoissons[20].dataValues.id,
        },
        {
            prix: 3.5,
            quantite: 25,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[20].dataValues.id,
        },
        {
            prix: 4.3,
            quantite: 25,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[11].dataValues.id,
        },
        {
            prix: 8.9,
            quantite: 50,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[6].dataValues.id,
        },
        {
            prix: 4.0,
            quantite: 33,
            barId: arrayBars[0].dataValues.id,
            boissonId: arrayBoissons[69].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 33,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[39].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 33,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[36].dataValues.id,
        },
        {
            prix: 3.0,
            quantite: 2,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[77].dataValues.id,
        },
        {
            prix: 5.0,
            quantite: 4,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[78].dataValues.id,
        },
        {
            prix: 5.0,
            quantite: 4,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[35].dataValues.id,
        },
        {
            prix: 5.0,
            quantite: 4,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[36].dataValues.id,
        },
        {
            prix: 5.0,
            quantite: 4,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[70].dataValues.id,
        },
        {
            prix: 5.0,
            quantite: 4,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[72].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 4,
            barId: arrayBars[2].dataValues.id,
            boissonId: arrayBoissons[28].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 4,
            barId: arrayBars[4].dataValues.id,
            boissonId: arrayBoissons[28].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 4,
            barId: arrayBars[1].dataValues.id,
            boissonId: arrayBoissons[28].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 4,
            barId: arrayBars[3].dataValues.id,
            boissonId: arrayBoissons[28].dataValues.id,
        },
        {
            prix: 6.5,
            quantite: 4,
            barId: arrayBars[5].dataValues.id,
            boissonId: arrayBoissons[28].dataValues.id,
        },
    ]);

    return;
}

let start = async () => {
    await PushBars();
    await PushTypeBoisson();
    await PushBoisson();
    await PushServis();
};

start();
