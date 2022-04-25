const settings = {
  "name": "memoriafp",
  "state": {
    "frontity": {
      "url": "https://memoriafilmica.cl",
      "title": "MEMORIA FILMICA PENCOPOLITANA 2",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "nuevo-theme",
      // "state": {
      //   "theme": {
      //     "menu": [
      //       [
      //         "Peliculas",
      //         "/peliculas/"
      //     ],
      //     [
      //         "Pagina Inicio",
      //         "/pagina-inicio/"
      //     ],
      //     [
      //         "Artistas",
      //         "/artistas/"
      //     ],
      //     [
      //         "Productoras",
      //         "/productoras/"
      //     ],
      //     [
      //         "Salas",
      //         "/salas/"
      //     ],
      //     [
      //       "NOTICIAS",
      //       "/noticias/"
      //     ]
      //     ],
      //     "featured": {
      //       "showOnList": false,
      //       "showOnPost": false
      //     }
      //   }
      // }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://memoriafilmica.cl",
          "params":{
            "per_page": 99,
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
              "per_page": 99,
              "_embed": true
            },
        },
        {
            type: "productoras",
            endpoint: "productoras",
            archive: "/productoras"
        }, 
        {
            type: "salas",
            endpoint: "salas",
            archive: "/salas"
        },
        {
          type: "noticias",
          endpoint: "noticias",
          archive: "/noticias"
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
