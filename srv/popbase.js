require("dotenv").config({
    path: __dirname + `/../.env`,
});

const sequelize = require("./sequelize/index");

let bars = sequalize.model("bar");
let arrayBars = [];
let boissons = sequalize.model("boisson");
let arrayBoissons = [];
let servi = sequalize.model("servis");
let arrayServi = [];
let typeBoissons = sequalize.model("typeBoisson");
let arraytypeBoissons = [];

async function PushBars() {
    arrayBars.push(
        await bars.create({
            Horaire: {
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
            Horaire: {
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
            },
            nom: "Delirium Café",
            adresse: "76 Rue St Leu, 80000 Amiens",
            coordN: 49.90011272989459,
            coordE: 2.3007677460390306,
            img: "img",
        })
    );
    arrayBars.push(
        await bars.create({
            Horaire: {
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
            },
            nom: "9 3/4",
            adresse: "21 Rue Edmond Fontaine, 80000 Amiens",
            coordN: 49.899856574206595,
            coordE: 2.3008539000000003,
            img: "img",
        })
    );
    arrayBars.push(
        await bars.create({
            Horaire: {
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
            },
            nom: "My Godness",
            adresse: "15 Rue Edmond Fontaine, 80000 Amiens",
            coordN: 49.90010587534423,
            coordE: 2.3009570074207324,
            img: "img",
        })
    );
    arrayBars.push(
        await bars.create({
            Horaire: {
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
            },
            nom: "Baobar",
            adresse: "2 Rue des Bondes, 80000 Amiens",
            coordN: 49.896037013596086,
            coordE: 2.3035924,
            img: "img",
        })
    );
    arrayBars.push(
        await bars.create({
            Horaire: {
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
            },
            nom: "Taverne Elektrik",
            adresse: "54 Rue St Leu, 80000 Amiens",
            coordN: 49.898408131628926,
            coordE: 2.300915525123708,
            img: "img",
        })
    );
    arrayBars.push(
        await bars.create({
            Horaire: {
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
            },
            nom: "Ad Hoc Cafe",
            adresse: "1 Pl. du Don, 80000 Amiens",
            coordN: 49.89585643524044,
            coordE: 2.303339027888188,
            img: "img",
        })
    );
}

async function PushTypeBoisson() {
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
}

async function PushBoisson() {
    arrayBoissons.push(
        await boissons.create({
            nom: "Panache",
            typeBoissonId: arrayBoissons[0].id, //cf servi
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Monaco",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Brew Dog Punk",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Blanche Bruxelle",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Deli Red",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "La Retro",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "La Paix Dieu",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Delirium Tremens",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Cuvée des Trolls",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Triple Lefort",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Picon Bière",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Deli Argentum",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Delirium Nocturnum",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Chouffe Houblon",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Omer",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Cherry Chouffe",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Biere du Courbeau",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Bierreobeurre",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Guinness Blonde",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Guinness Brune",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Saint Omer",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Goudale Ambrée",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Belzebuth Blanche",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Belzebuth Rubis",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Duvel",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "BarBar",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Castelain Winter",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Clan Campbell",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Jack Daniels",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Jameson",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Nikka",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Diplomatico",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Sailor Jerry",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Cuba Libre",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Ti Punch",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Bacardi",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Havana Club",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Matusalem",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Coruba",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Myers",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Don Papa",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Tour Du Monde (12)",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Saint James Blanc",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Don Papa",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Shooter Jäger",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Jäger Bomb",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Girafe Jäger",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Tequila Frozen",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Tequila Sunrise",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Pina Colada",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Green Bel",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Cosmopolitain",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Caïpirinha",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Caïpirinha Fraise",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Mojito",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Mojito Fraise",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Vodka Soda",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Sex on the Beach",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Moscow Mule",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "London Mule",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Margarita",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Margarita Frozen",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Mai Tai",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Lemon Spritz",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Ginny",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Vodka Black",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Lovegood",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Summer Fraise",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Daiquiri",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Daiquiri Fraise",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Tequila Paf",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Tequila",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Metre Tequila Paf",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Shooter Vodka",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Mètre Shooter Vodka",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Shooter Vodka gouts",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Vodka Pomme",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Shooter Vodka",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Ricard",
        })
    );
    arrayBoissons.push(
        await boissons.create({
            nom: "Get27/31",
        })
    );
}

async function PushServis() {
    servi.bulkCreate([
        //Prix      quantité     l'id du bar à l'index dans l'array (la c'est le premier créer) la boisson comme pour le bar
        {
            prix: 3.0,
            quantite: 4,
            barId: arrayBars[0].id,
            boissonId: arrayBoissons[0].id,
        },
        {
            prix: 3.0,
            quantite: 4,
            barId: arrayBars[0].id,
            boissonId: arrayBoissons[0].id,
        },
    ]);

    //Anciens
    arrayServi.push(
        servi.create({
            prix: 3.0,
            quantite: 4,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 4.0,
            quantite: 25,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 4.0,
            quantite: 4,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 5.0,
            quantite: null,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 6.0,
            quantite: 50,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 7.0,
            quantite: null,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 8.0,
            quantite: null,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 9.0,
            quantite: null,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 36.0,
            quantite: null,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 2.5,
            quantite: 2,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 2.5,
            quantite: 4,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 3.0,
            quantite: 25,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 35.0,
            quantite: null,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 4.2,
            quantite: 25,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 4.5,
            quantite: 5,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 5.0,
            quantite: 25,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 5.5,
            quantite: 50,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 5.5,
            quantite: null,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 5.9,
            quantite: 50,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 55.0,
            quantite: 2500,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 6.0,
            quantite: 6,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 6.0,
            quantite: 5,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 6.5,
            quantite: 50,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 6.5,
            quantite: 6,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 6.9,
            quantite: 50,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 7.0,
            quantite: 50,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 7.0,
            quantite: null,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 7.0,
            quantite: 4,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 7.0,
            quantite: 5,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 7.9,
            quantite: 50,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 7.9,
            quantite: 5,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 7.9,
            quantite: null,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 8.0,
            quantite: null,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 8.0,
            quantite: 50,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 8.5,
            quantite: null,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 8.5,
            quantite: 5,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 8.9,
            quantite: null,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 9.0,
            quantite: 5,
        })
    );
    arrayServi.push(
        servi.create({
            prix: 9.0,
            quantite: 4,
        })
    );
}
