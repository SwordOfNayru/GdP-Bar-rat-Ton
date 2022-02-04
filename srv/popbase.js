require("dotenv").config({
    path: __dirname + `/../.env`
});

const { NONE } = require("sequelize");
const sequelize = require("./sequelize/index");

let bars = sequalize.model("bar");
let arrayBars = [];
let boissons = sequalize.model("boisson");
let arrayBoissons = [];
let servi = sequalize.model("servis");
let arrayServi = [];
let typeBoissons = sequalize.model("typeBoisson");
let arraytypeBoissons = [];

arrayBars.push(bars.create({
    Horaire: {   
        lundi :{
            "day": "lundi",
            "matin":"FERME",
            "soir":"16h-1h",
        },
          mardi :{
            "day": "mardi",
            "matin":"11h-12h",
            "soir":"15h-1h",
        },
          mercredi :{
            "day": "mercredi",
            "matin":"11h-12h",
            "soir":"15h-1h",
        },
          jeudi :{
            "day": "jeudi",
            "matin":"11h-12h",
            "soir":"15h-2h",
        },
          vendredi :{
            "day": "vendredi",
            "matin":"11h-12h",
            "soir":"15h-2h",
        },
        samedi :{
            "day": "samedi",
            "matin":"FERME",
            "soir":"16h-2h",
        },
        dimanche :{
            "day": "dimanche",
            "matin":"FERME",
            "soir":"15h-22h",
        },
    },
    nom: 'Le Retroviseur ',
    adresse: '12 rue Bondes, 80000 Amiens',
    coordN: 49.89575797845227,
    coordE: 2.303820381019288,
    img:'img'
}));
arrayBars.push(bars.create({
    Horaire: {   
        lundi :{
            "day": "lundi",
            "matin":"FERME",
            "soir":"17h-1h",
        },
          mardi :{
            "day": "mardi",
            "matin":"FERME",
            "soir":"17h-1h",
        },
          mercredi :{
            "day": "mercredi",
            "matin":"FERME",
            "soir":"17h-2h",
        },
          jeudi :{
            "day": "jeudi",
            "matin":"FERME",
            "soir":"17h-2h",
        },
          vendredi :{
            "day": "vendredi",
            "matin":"FERME",
            "soir":"17h-2h",
        },
        samedi :{
            "day": "samedi",
            "matin":"FERME",
            "soir":"17h-2h",
        },
        dimanche :{
            "day": "dimanche",
            "matin":"FERME",
            "soir":"17h-1h",
        },
    },
    nom: 'Delirium Café',
    adresse: '76 Rue St Leu, 80000 Amiens',
    coordN: 49.90011272989459, 
    coordE: 2.3007677460390306,
    img:'img'
}));
arrayBars.push(bars.create({
    Horaire: {   
        lundi :{
            "day": "lundi",
            "matin":"FERME",
            "soir":"FERME",
        },
          mardi :{
            "day": "mardi",
            "matin":"FERME",
            "soir":"14h30-1h",
        },
          mercredi :{
            "day": "mercredi",
            "matin":"FERME",
            "soir":"14h30-1h",
        },
          jeudi :{
            "day": "jeudi",
            "matin":"FERME",
            "soir":"14h30-2h",
        },
          vendredi :{
            "day": "vendredi",
            "matin":"FERME",
            "soir":"14h30-2h",
        },
        samedi :{
            "day": "samedi",
            "matin":"FERME",
            "soir":"17h-2h",
        },
        dimanche :{
            "day": "dimanche",
            "matin":"FERME",
            "soir":"FERME",
        },
    },
    nom: '9 3/4',
    adresse: '21 Rue Edmond Fontaine, 80000 Amiens',
    coordN: 49.899856574206595,  
    coordE: 2.3008539000000003,
    img:'img'
}));
arrayBars.push(bars.create({
    Horaire: {   
        lundi :{
            "day": "lundi",
            "matin":"FERME",
            "soir":"13h-0h45",
        },
          mardi :{
            "day": "mardi",
            "matin":"FERME",
            "soir":"13h-2h45",
        },
          mercredi :{
            "day": "mercredi",
            "matin":"FERME",
            "soir":"14h30-1h",
        },
          jeudi :{
            "day": "jeudi",
            "matin":"FERME",
            "soir":"13h-2h45",
        },
          vendredi :{
            "day": "vendredi",
            "matin":"FERME",
            "soir":"13h-2h45",
        },
        samedi :{
            "day": "samedi",
            "matin":"FERME",
            "soir":"18h-2h45",
        },
        dimanche :{
            "day": "dimanche",
            "matin":"FERME",
            "soir":"18h-2h45",
        },
    },
    nom: 'My Godness',
    adresse: '15 Rue Edmond Fontaine, 80000 Amiens',
    coordN: 49.90010587534423,   
    coordE: 2.3009570074207324,
    img:'img'
}));
arrayBars.push(bars.create({
    Horaire: {   
        lundi :{
            "day": "lundi",
            "matin":"FERME",
            "soir":"16h-1h",
        },
          mardi :{
            "day": "mardi",
            "matin":"FERME",
            "soir":"16h-1h",
        },
          mercredi :{
            "day": "mercredi",
            "matin":"FERME",
            "soir":"16h-1h",
        },
          jeudi :{
            "day": "jeudi",
            "matin":"FERME",
            "soir":"13h-2h",
        },
          vendredi :{
            "day": "vendredi",
            "matin":"FERME",
            "soir":"13h-2h",
        },
        samedi :{
            "day": "samedi",
            "matin":"FERME",
            "soir":"13h-2h",
        },
        dimanche :{
            "day": "dimanche",
            "matin":"FERME",
            "soir":"13h-1h",
        },
    },
    nom: 'Baobar',
    adresse: '2 Rue des Bondes, 80000 Amiens',
    coordN: 49.896037013596086,   
    coordE: 2.3035924,
    img:'img'
}));
arrayBars.push(bars.create({
    Horaire: {   
        lundi :{
            "day": "lundi",
            "matin":"FERME",
            "soir":"17h-1h",
        },
          mardi :{
            "day": "mardi",
            "matin":"FERME",
            "soir":"17h-1h",
        },
          mercredi :{
            "day": "mercredi",
            "matin":"FERME",
            "soir":"17h-1h",
        },
          jeudi :{
            "day": "jeudi",
            "matin":"FERME",
            "soir":"17h-1h",
        },
          vendredi :{
            "day": "vendredi",
            "matin":"FERME",
            "soir":"17h-1h",
        },
        samedi :{
            "day": "samedi",
            "matin":"FERME",
            "soir":"18h-1h",
        },
        dimanche :{
            "day": "dimanche",
            "matin":"FERME",
            "soir":"18h-1h",
        },
    },
    nom: 'Taverne Elektrik',
    adresse: '54 Rue St Leu, 80000 Amiens',
    coordN: 49.898408131628926,   
    coordE: 2.300915525123708 ,
    img:'img'
}));
arrayBars.push(bars.create({
    Horaire: {   
        lundi :{
            "day": "lundi",
            "matin":"11h-12h",
            "soir":"12h-1h",
        },
          mardi :{
            "day": "mardi",
            "matin":"11h-12h",
            "soir":"12h-1h",
        },
          mercredi :{
            "day": "mercredi",
            "matin":"11h-12h",
            "soir":"12h-1h",
        },
          jeudi :{
            "day": "jeudi",
            "matin":"11h-12h",
            "soir":"12h-1h",
        },
          vendredi :{
            "day": "vendredi",
            "matin":"11h-12h",
            "soir":"12h-1h",
        },
        samedi :{
            "day": "samedi",
            "matin":"11h-12h",
            "soir":"12h-1h",
        },
        dimanche :{
            "day": "dimanche",
            "matin":"11h-12h",
            "soir":"12h-1h",
        },
    },
    nom: 'Ad Hoc Cafe',
    adresse: '1 Pl. du Don, 80000 Amiens',
    coordN: 49.89585643524044,    
    coordE: 2.303339027888188, 
    img:'img'
}));
arrayBoissons.push(boissons.create({
    nom:'Panache',
}));
arrayBoissons.push(boissons.create({
    nom:'Monaco',
}));
arrayBoissons.push(boissons.create({
  nom:'Brew Dog Punk',
}));
arrayBoissons.push(boissons.create({
  nom:'Blanche Bruxelle',
}));
arrayBoissons.push(boissons.create({
  nom:'Deli Red',
}));
arrayBoissons.push(boissons.create({
  nom:'La Retro',
}));
arrayBoissons.push(boissons.create({
  nom:'La Paix Dieu',
}));
arrayBoissons.push(boissons.create({
  nom:'Delirium Tremens',
}));
arrayBoissons.push(boissons.create({
  nom:'Cuvée des Trolls',
}));
arrayBoissons.push(boissons.create({
  nom:'Triple Lefort',
}));
arrayBoissons.push(boissons.create({
  nom:'Picon Bière',
}));
arrayBoissons.push(boissons.create({
  nom:'Deli Argentum',
}));
arrayBoissons.push(boissons.create({
  nom:'Delirium Nocturnum',
}));
arrayBoissons.push(boissons.create({
  nom:'Chouffe Houblon',
}));
arrayBoissons.push(boissons.create({
  nom:'Omer',
}));
arrayBoissons.push(boissons.create({
  nom:'Cherry Chouffe',
}));
arrayBoissons.push(boissons.create({
  nom:'Biere du Courbeau',
}));
arrayBoissons.push(boissons.create({
  nom:'Bierreobeurre',
}));
arrayBoissons.push(boissons.create({
  nom:'Guinness Blonde',
}));
arrayBoissons.push(boissons.create({
  nom:'Guinness Brune',
}));
arrayBoissons.push(boissons.create({
  nom:'Saint Omer',
}));
arrayBoissons.push(boissons.create({
  nom:'Goudale Ambrée',
}));
arrayBoissons.push(boissons.create({
  nom:'Belzebuth Blanche',
}));
arrayBoissons.push(boissons.create({
  nom:'Belzebuth Rubis',
}));
arrayBoissons.push(boissons.create({
  nom:'Duvel',
}));
arrayBoissons.push(boissons.create({
  nom:'BarBar',
}));
arrayBoissons.push(boissons.create({
  nom:'Castelain Winter',
}));
arrayBoissons.push(boissons.create({
  nom:'Clan Campbell',
}));
arrayBoissons.push(boissons.create({
  nom:'Jack Daniels',
}));
arrayBoissons.push(boissons.create({
  nom:'Jameson',
}));
arrayBoissons.push(boissons.create({
  nom:'Nikka',
}));
arrayBoissons.push(boissons.create({
  nom:'Diplomatico',
}));
arrayBoissons.push(boissons.create({
  nom:'Sailor Jerry',
}));
arrayBoissons.push(boissons.create({
  nom:'Cuba Libre',
}));
arrayBoissons.push(boissons.create({
  nom:'Ti Punch',
}));
arrayBoissons.push(boissons.create({
  nom:'Bacardi',
}));
arrayBoissons.push(boissons.create({
  nom:'Havana Club',
}));
arrayBoissons.push(boissons.create({
  nom:'Matusalem',
}));
arrayBoissons.push(boissons.create({
  nom:'Coruba',
}));
arrayBoissons.push(boissons.create({
  nom:'Myers',
}));
arrayBoissons.push(boissons.create({
  nom:'Don Papa',
}));
arrayBoissons.push(boissons.create({
  nom:'Tour Du Monde (12)',
}));
arrayBoissons.push(boissons.create({
  nom:'Saint James Blanc',
}));
arrayBoissons.push(boissons.create({
  nom:'Don Papa',
}));
arrayBoissons.push(boissons.create({
  nom:'Shooter Jäger',
}));
arrayBoissons.push(boissons.create({
  nom:'Jäger Bomb',
}));
arrayBoissons.push(boissons.create({
  nom:'Girafe Jäger',
}));
arrayBoissons.push(boissons.create({
  nom:'Tequila Frozen',
}));
arrayBoissons.push(boissons.create({
  nom:'Tequila Sunrise',
}));
arrayBoissons.push(boissons.create({
  nom:'Pina Colada',
}));
arrayBoissons.push(boissons.create({
  nom:'Green Bel',
}));
arrayBoissons.push(boissons.create({
  nom:'Cosmopolitain',
}));
arrayBoissons.push(boissons.create({
  nom:'Caïpirinha',
}));
arrayBoissons.push(boissons.create({
  nom:'Caïpirinha Fraise',
}));
arrayBoissons.push(boissons.create({
  nom:'Mojito',
}));
arrayBoissons.push(boissons.create({
  nom:'Mojito Fraise',
}));
arrayBoissons.push(boissons.create({
  nom:'Vodka Soda',
}));
arrayBoissons.push(boissons.create({
  nom:'Sex on the Beach',
}));
arrayBoissons.push(boissons.create({
  nom:'Moscow Mule',
}));
arrayBoissons.push(boissons.create({
  nom:'London Mule',
}));
arrayBoissons.push(boissons.create({
  nom:'Margarita',
}));
arrayBoissons.push(boissons.create({
  nom:'Margarita Frozen',
}));
arrayBoissons.push(boissons.create({
  nom:'Mai Tai',
}));
arrayBoissons.push(boissons.create({
  nom:'Lemon Spritz',
}));
arrayBoissons.push(boissons.create({
  nom:'Ginny',
}));
arrayBoissons.push(boissons.create({
  nom:'Vodka Black',
}));
arrayBoissons.push(boissons.create({
  nom:'Lovegood',
}));
arrayBoissons.push(boissons.create({
  nom:'Summer Fraise',
}));
arrayBoissons.push(boissons.create({
  nom:'Daiquiri',
}));
arrayBoissons.push(boissons.create({
  nom:'Daiquiri Fraise',
}));
arrayBoissons.push(boissons.create({
  nom:'Tequila Paf',
}));
arrayBoissons.push(boissons.create({
  nom:'Tequila',
}));
arrayBoissons.push(boissons.create({
  nom:'Metre Tequila Paf',
}));
arrayBoissons.push(boissons.create({
  nom:'Shooter Vodka',
}));
arrayBoissons.push(boissons.create({
  nom:'Mètre Shooter Vodka',
}));
arrayBoissons.push(boissons.create({
  nom:'Shooter Vodka gouts',
}));
arrayBoissons.push(boissons.create({
  nom:'Vodka Pomme',
}));
arrayBoissons.push(boissons.create({
  nom:'Shooter Vodka',
}));
arrayBoissons.push(boissons.create({
  nom:'Ricard',
}));
arrayBoissons.push(boissons.create({
  nom:'Get27/31',
}));
arrayServi.push(servi.create({
  prix: 3.00,
  quantite: 4
}));
arrayServi.push(servi.create({
  prix: 4.00,
  quantite: 25
}));
arrayServi.push(servi.create({
  prix: 4.00,
  quantite: 4
}));
arrayServi.push(servi.create({
  prix: 5.00,
  quantite: null
}));
arrayServi.push(servi.create({
  prix: 6.00,
  quantite: 50
}));
arrayServi.push(servi.create({
  prix: 7.00,
  quantite: null
}));
arrayServi.push(servi.create({
  prix: 8.00,
  quantite: null
}));
arrayServi.push(servi.create({
  prix: 9.00,
  quantite: null
}));
arrayServi.push(servi.create({
  prix: 36.00,
  quantite: null
}));
arrayServi.push(servi.create({
  prix: 2.50,
  quantite: 2
}));
arrayServi.push(servi.create({
  prix: 2.50,
  quantite: 4
}));
arrayServi.push(servi.create({
  prix: 3.00,
  quantite: 25
}));
arrayServi.push(servi.create({
  prix: 35.00,
  quantite: null
}));
arrayServi.push(servi.create({
  prix: 4.20,
  quantite: 25
}));
arrayServi.push(servi.create({
  prix: 4.50,
  quantite: 5
}));
arrayServi.push(servi.create({
  prix: 5.00,
  quantite: 25
}));
arrayServi.push(servi.create({
  prix: 5.50,
  quantite: 50
}));
arrayServi.push(servi.create({
  prix: 5.50,
  quantite: null
}));
arrayServi.push(servi.create({
  prix: 5.90,
  quantite: 50
}));
arrayServi.push(servi.create({
  prix: 55.00,
  quantite: 2500
}));
arrayServi.push(servi.create({
  prix: 6.00,
  quantite: 6
}));
arrayServi.push(servi.create({
  prix: 6.00,
  quantite: 5
}));
arrayServi.push(servi.create({
  prix: 6.50,
  quantite: 50
}));
arrayServi.push(servi.create({
  prix: 6.50,
  quantite: 6
}));
arrayServi.push(servi.create({
  prix: 6.90,
  quantite: 50
}));
arrayServi.push(servi.create({
  prix: 7.00,
  quantite: 50
}));
arrayServi.push(servi.create({
  prix: 7.00,
  quantite: null
}));
arrayServi.push(servi.create({
  prix: 7.00,
  quantite: 4
}));
arrayServi.push(servi.create({
  prix: 7.00,
  quantite: 5
}));
arrayServi.push(servi.create({
  prix: 7.90,
  quantite: 50
}));
arrayServi.push(servi.create({
  prix: 7.90,
  quantite: 5
}));
arrayServi.push(servi.create({
  prix: 7.90,
  quantite: null
}));
arrayServi.push(servi.create({
  prix: 8.00,
  quantite: null
}));
arrayServi.push(servi.create({
  prix: 8.00,
  quantite: 50
}));
arrayServi.push(servi.create({
  prix: 8.50,
  quantite: null
}));
arrayServi.push(servi.create({
  prix: 8.50,
  quantite: 5
}));
arrayServi.push(servi.create({
  prix: 8.90,
  quantite: null
}));
arrayServi.push(servi.create({
  prix: 9.00,
  quantite: 5
}));
arrayServi.push(servi.create({
  prix: 9.00,
  quantite: 4
}));
arraytypeBoissons.push(typeBoissons.create({
  nom: 'Biere'
}));
arraytypeBoissons.push(typeBoissons.create({
  nom: 'Cocktail'
}));
arraytypeBoissons.push(typeBoissons.create({
  nom: 'Get'
}));
arraytypeBoissons.push(typeBoissons.create({
  nom: 'Jager'
}));
arraytypeBoissons.push(typeBoissons.create({
  nom: 'Pastis'
}));
arraytypeBoissons.push(typeBoissons.create({
  nom: 'Rhum'
}));
arraytypeBoissons.push(typeBoissons.create({
  nom: 'Tequila'
}));
arraytypeBoissons.push(typeBoissons.create({
  nom: 'Vodka'
}));
arraytypeBoissons.push(typeBoissons.create({
  nom: 'Whiskys'
}));