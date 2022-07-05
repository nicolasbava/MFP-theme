const settings = {
  "name": "memoriafp",
  "state": {
    "frontity": {
      "url": "https://web.memoriafilmica.cl",
      "title": "Memoria Fílmica Pencopólitana",
      "description": "Memoria Fílmica Pencopólitana"
    }
  },
  "packages": [
    {
      "name": "nuevo-theme",
      
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://web.memoriafilmica.cl",
          "params":{
            "per_page": 100,
            "_embed": true
          },
          
          "postTypes": [{
            type: "peliculas",
            endpoint: "peliculas",
            archive: "/peliculas",
            "params":{
              "per_page": 99,
              "_embed": true
            },
        },
        {
            type: "artistas",
            endpoint: "artistas",
            archive: "/artistas",
            "params":{
              "per_page": 100,
              "_embed": true
            },
        },
        {
            type: "productoras",
            endpoint: "productoras",
            archive: "/productoras",
            "params":{
              "per_page": 99,
              "_embed": true
            },
        }, 
        {
            type: "salas",
            endpoint: "salas",
            archive: "/salas",
            "params":{
              "per_page": 99,
              "_embed": true
            },
        },
        {
          type: "noticias",
          endpoint: "noticias",
          archive: "/noticias",
          "params":{
            "per_page": 99,
            "_embed": true
          },
        },
        {
          type: "mapa",
          endpoint: "mapa",
          archive: "/mapa",
          "params":{
            "per_page": 99,
            "_embed": true
          },
        },
        {
          type: "territorio",
          endpoint: "territorio",
          archive: "/territorio",
          "params":{
            "per_page": 99,
            "_embed": true
          },
        },
        {
          type: "proyecto",
          endpoint: "proyecto",
          archive: "/proyecto",
          "params":{
            "per_page": 99,
            "_embed": true
          },
        },
        {
          type: "equipo",
          endpoint: "equipo",
          archive: "/equipo",
          "params":{
            "per_page": 99,
            "_embed": true
          },
        },
        {
          type: "contacto",
          endpoint: "contacto",
          archive: "/contacto",
          "params":{
            "per_page": 99,
            "_embed": true
          },
        }
    ],
        "taxonomies" : [
          {
            taxonomy: "genero",
            endpoint: "genero",
            postTypeEndpoint: "peliculas",
          }
        ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
