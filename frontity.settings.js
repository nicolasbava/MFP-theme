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
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Peliculas",
              "/peliculas/"
          ],
          [
              "Pagina Inicio",
              "/pagina-inicio/"
          ],
          [
              "Artistas",
              "/artistas/"
          ],
          [
              "Productoras",
              "/productoras/"
          ],
          [
              "Salas",
              "/salas/"
          ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://memoriafilmica.cl",
          "postTypes": [{
            type: "peliculas",
            endpoint: "peliculas",
            archive: "/peliculas"
        },
        {
            type: "artistas",
            endpoint: "artistas",
            archive: "/artistas"
        },
        {
            type: "productoras",
            endpoint: "productoras",
            archive: "/productoras"
        }, {
            type: "salas",
            endpoint: "salas",
            archive: "/salas"
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
