const POKEMEN = {
  City: [
    {
      shiny: true,
      name: "Magnemite",
      img: require("./assets/magnemite.png"),
    },
    {
      shiny: true,
      name: "Alolan Grimer",
      img: require("./assets/alolangrimer.png"),
    },
    {
      shiny: true,
      name: "Hitmonchan",
      img: require("./assets/hitmonchan.png"),
    },
    {
      shiny: true,
      name: "Baltoy",
      img: require("./assets/baltoy.png"),
    },
    {
      shiny: true,
      name: "Burmy - Trash",
      img: require("./assets/burmy-trash.png"),
    },
    {
      shiny: true,
      name: "Bronzor",
      img: require("./assets/bronzor.png"),
    },
    {
      shiny: true,
      name: "Pidove",
      img: require("./assets/pidove.png"),
    },
    {
      shiny: true,
      name: "Trubbish",
      img: require("./assets/trubbish.png"),
    },
    {
      shiny: false,
      name: "Gothita",
      img: require("./assets/gothita.png"),
    },
    {
      shiny: false,
      name: "Golett",
      img: require("./assets/golett.png"),
    },
    {
      shiny: false,
      name: "Litten",
      img: require("./assets/litten.png"),
    },
    {
      shiny: true,
      name: "Galarian Weezing",
      img: require("./assets/galarianweezing.png"),
    },
    {
      shiny: true,
      name: "Klink",
      img: require("./assets/klink.png"),
      incense: true,
    },
  ],
  Plains: [
    {
      shiny: true,
      name: "Girafarig",
      img: require("./assets/girafarig.png"),
    },
    {
      shiny: true,
      name: "Dunsparce",
      img: require("./assets/dunsparce.png"),
    },
    {
      shiny: true,
      name: "Larvitar",
      img: require("./assets/larvitar.png"),
    },
    {
      shiny: true,
      name: "Numel",
      img: require("./assets/numel.png"),
    },
    {
      shiny: true,
      name: "Trapinch",
      img: require("./assets/trapinch.png"),
    },
    {
      shiny: true,
      name: "Buizel",
      img: require("./assets/buizel.png"),
    },
    {
      shiny: true,
      name: "Patrat",
      img: require("./assets/patrat.png"),
    },
    {
      shiny: false,
      name: "Drilbur",
      img: require("./assets/drilbur.png"),
    },
    {
      shiny: true,
      name: "Shelmet",
      img: require("./assets/shelmet.png"),
    },
    {
      shiny: true,
      name: "Rufflet",
      img: require("./assets/rufflet.png"),
    },
    {
      shiny: true,
      name: "Litleo",
      img: require("./assets/litleo.png"),
    },
    {
      shiny: true,
      name: "Axew",
      img: require("./assets/axew.png"),
    },
    {
      shiny: false,
      name: "Torkoal",
      img: require("./assets/torkoal.png"),
      incense: true,
    },
  ],
  Rainforest: [
    {
      shiny: true,
      name: "Mudkip",
      img: require("./assets/mudkip.png"),
    },
    {
      shiny: true,
      name: "Seedot",
      img: require("./assets/seedot.png"),
    },
    {
      shiny: true,
      name: "Shroomish",
      img: require("./assets/shroomish.png"),
    },
    {
      shiny: true,
      name: "Slakoth",
      img: require("./assets/slakoth.png"),
    },
    {
      shiny: true,
      name: "Turtwig",
      img: require("./assets/turtwig.png"),
    },
    {
      shiny: true,
      name: "Chimchar",
      img: require("./assets/chimchar.png"),
    },
    {
      shiny: false,
      name: "Venipede",
      img: require("./assets/venipede.png"),
    },
    {
      shiny: true,
      name: "Karrablast",
      img: require("./assets/karrablast.png"),
    },
    {
      shiny: false,
      name: "Binacle",
      img: require("./assets/binacle.png"),
    },
    {
      shiny: false,
      name: "Skrelp",
      img: require("./assets/skrelp.png"),
    },
    {
      shiny: false,
      name: "Rowlet",
      img: require("./assets/rowlet.png"),
    },
    {
      shiny: false,
      name: "Pancham",
      img: require("./assets/pancham.png"),
    },
    {
      shiny: false,
      name: "Tropius",
      img: require("./assets/tropius.png"),
      incense: true,
    },
  ],
  Tundra: [
    {
      shiny: true,
      name: "Omanyte",
      img: require("./assets/omanyte.png"),
    },
    {
      shiny: true,
      name: "Swinub",
      img: require("./assets/swinub.png"),
    },
    {
      shiny: true,
      name: "Wingull",
      img: require("./assets/wingull.png"),
    },
    {
      shiny: true,
      name: "Meditite",
      img: require("./assets/meditite.png"),
    },
    {
      shiny: true,
      name: "Wailmer",
      img: require("./assets/wailmer.png"),
    },
    {
      shiny: true,
      name: "Spheal",
      img: require("./assets/spheal.png"),
    },
    {
      shiny: true,
      name: "Piplup",
      img: require("./assets/piplup.png"),
    },
    {
      shiny: false,
      name: "Vanillite",
      img: require("./assets/vanillite.png"),
    },
    {
      shiny: true,
      name: "Cubchoo",
      img: require("./assets/cubchoo.png"),
    },
    {
      shiny: false,
      name: "Bergmite",
      img: require("./assets/bergmite.png"),
    },
    {
      shiny: false,
      name: "Popplio",
      img: require("./assets/popplio.png"),
    },
    {
      shiny: true,
      name: "Galarian Darumaka",
      img: require("./assets/galariandarumaka.png"),
    },
    {
      shiny: false,
      name: "Galarian Mr Mime",
      img: require("./assets/galarianmrmime.png"),
      incense: true,
    },
  ],
  "All Habitats": [
    {
      shiny: true,
      name: "Costumed Pikachu",
      img: require("./assets/costumedpikachu.png"),
    },
    {
      shiny: true,
      name: "Unown U",
      img: require("./assets/unownu.png"),
      incense: true,
    },
    {
      shiny: true,
      name: "Unown B",
      img: require("./assets/unownb.png"),
      incense: true,
    },
    {
      shiny: true,
      name: "Unown G",
      img: require("./assets/unowng.png"),
      incense: true,
    },
    {
      shiny: true,
      name: "Unown O",
      img: require("./assets/unowno.png"),
      incense: true,
    },
  ],
};

export default POKEMEN;
