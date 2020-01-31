let cushionCoversIdList = ["Albert Einstein Pop Art", 4503008018565,
  "Bob Marley Pop Art", 4503047110789,
  "Bruce Lee Pop Art", 4503012933765,
  "Charlie Chaplin Pop Art", 4503001727109,
  "Che Guevara Pop Art", 4503005560965,
  "David Bowie Pop Art", 4503023878277,
  "Elvis Presley Pop Art", 4503031283845,
  "Elvis Presley Pop Art", 4503036067973,
  "Frank Zappa Pop Art", 4503065133189,
  "Ghandi Pop Art", 4503010476165,
  "Grateful Dead Jerry Garcia Pop Art", 4503070474373,
  "Jim Morrison Pop Art", 4503051698309,
  "Jim Morrison Pop Art", 4503057334405,
  "Jimi Hendrix Pop Art", 4503039443077,
  "Jimi Hendrix Pop Art", 4503041278085,
  "Jimi Hendrix Pop Art", 4503043735685,
  "Jimi Hendrix Pop Art", 4503045210245,
  "Mark Zuckerberg Pop Art", 4503018307717,
  "Morgan Freeman Pop Art", 4503016669317,
  "Mr Bean Pop Art", 4502983803013,
  "Nicholas Cage Pop Art", 4502995927173,
  "Paul McCartney Pop Art", 4503062315141,
  "Soundgarden Chris Cornell Pop Art", 4503068082309,
  "Stevie Ray Vaughan Pop Art", 4503074472069];


  // the following for statement converts all the strings in the cushionCoversIdList array to lowercase
  for(i=0; i<cushionCoversIdList.length; i++) {
    if(typeof cushionCoversIdList[i] === "string") {
      let lowercaseName = cushionCoversIdList[i].toLowerCase();
      cushionCoversIdList.splice(i, 1, lowercaseName);
      // console.log(cushionCoversIdList);
    }
  }

  const searchBar = document.forms['search-bar'].querySelector('input');


  searchBar.addEventListener('keyup', function(e) {   
      const searchTerm = e.target.value.toLowerCase();
      var searchArray = [];
      for(i=0; i<cushionCoversIdList.length; i+=2) {
        let cushionName = cushionCoversIdList[i];
        let cushionId = cushionCoversIdList[i+1];
        if(cushionName.indexOf(searchTerm) != -1){
            searchArray.push(cushionId);
        }
      }
      console.log(searchArray);
}
      // if (event.keyCode === 13) {

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'spacebutterflyuk.myshopify.com',
      storefrontAccessToken: '38f835659431459cebffcd078fa762c4',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('productSet', {
        id: searchArray,
        node: document.getElementById('collection-component-1580086948147'),
        moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "user-select": "none",
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(33.33333% - 30px)",
          "margin-left": "30px",
          "margin-bottom": "50px",
          "width": "calc(33.33333% - 30px)"
        },
        "img": {
          "height": "calc(100% - 15px)",
          "position": "absolute",
          "left": "0",
          "right": "0",
          "top": "0"
        },
        "imgWrapper": {
          "padding-top": "calc(75% + 15px)",
          "position": "relative",
          "height": "0"
        }
      },
      "title": {
        "font-family": "futura, sans-serif",
        "color": "#1e3264",
        "font-weight": "400",
        "font-size": "18px"
      },
      "button": {
        // "opacity": "0",
        "font-family": "futura, sans-serif",
        "font-weight": "bold",
        "color": "white",
        "font-size": "12px",
        ":hover": {
          "color": "#115500",
          "background-color": "#0f4d00"
        },
        "background-color": "black",
        ":focus": {
          "background-color": "#0f4d00"
        },
        "border-radius": "1px",
        "padding-left": "15px",
        "padding-right": "15px"
      },
      "price": {
        "font-family": "futura, sans-serif",
        // "font-weight": "bold",
        "color": "#1e3264"
      },
      "compareAt": {
        "font-family": "futura, sans-serif",
        // "font-weight": "bold",
        "color": "#1e3264"
      },
      "unitPrice": {
        "font-family": "futura, sans-serif",
        "font-weight": "bold",
        "color": "#1e3264"
      },
      "description": {
        "font-family": "futura, sans-serif",
        "color": "#c92929"
      },
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false,
      "button": false,
    },
          "isButton": "true",


    "text": {
      "button": "View product"
    },

    "googleFonts": [
      "Vollkorn"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-30px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px",
          "user-select": "none"
        }
      },
      "img": {
        "width": "400px",
      },
      "button": {
        "background-image": "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);",
        "font-size": "12px",
        // "font-weight": "500",
        "font-family": "futura, sans-serif",
        "color": "white",
        ":hover": {
          "color": "#1e3264",
          "background-color": "#0f4d00"
        },
        "background-color": "#115500",
        ":focus": {
          "background-color": "#0f4d00"
        },
        "border-radius": "0px",
        "padding": "15px 105px 15px 105px",
      },
      "title": {
        "font-family": "futura, sans-serif",
        "font-size": "26px",
        "font-weight": "normal",
        "color": "#1e3264"
      },
      "price": {
        "font-family": "futura, sans-serif",
        "font-size": "16px",
        "color": "#1e3264"
      },
      "compareAt": {
        "font-family": "futura, sans-serif",
        "font-size": "12px",
        "color": "#1e3264"
      },
      "unitPrice": {
        "font-family": "futura, sans-serif",
        "color": "#1e3264"
      },
      "description": {
        "font-family": "futura, sans-serif",
        "font-size": "16px",
        "color": "#1e3264"
      }
    },
    "googleFonts": [
      "Vollkorn"
    ],
    "text": {
      "button": "ADD TO CART",
    }
  },
  "modal": {
    "styles": {
      "modal": {
        "user-select": "none",
        "background-color": "white",
        // "border": "30px solid black",
        "border-radius": "15px",
        "box-shadow": "0px 0px 100px rgba(0,0,0,0.2)"

      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-family": "futura, sans-serif",
        // "font-weight": "bold",
        "color": "white",
        ":hover": {
          "color": "#115500",
          "background-color": "#0f4d00"
        },
        "background-color": "rgb(0,0,0,0.9)",
        ":focus": {
          "background-color": "#0f4d00"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#353535"
      },
      "header": {
        "color": "#353535"
      },
      "lineItems": {
        "color": "#353535"
      },
      "subtotalText": {
        "color": "#353535"
      },
      "subtotal": {
        "color": "#353535"
      },
      "notice": {
        "color": "#353535"
      },
      "currency": {
        "color": "#353535"
      },
      "close": {
        "color": "#353535",
        ":hover": {
          "color": "#353535"
        }
      },
      "empty": {
        "color": "#353535"
      },
      "noteDescription": {
        "color": "#353535"
      },
      "discountText": {
        "color": "#353535"
      },
      "discountIcon": {
        "fill": "#353535"
      },
      "discountAmount": {
        "color": "#353535"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "googleFonts": [
      "Vollkorn"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "futura, sans-serif",
        // "font-weight": "bold",
        "background-color": "#c3f0c8",
        "border-radius": "0px",
        // "position": "fixed",
        // "top": "-100px",
        ":hover": {
        "background-color": "#c3f0c8",
        "filter": "brightness(1.1)"
        },
        ":focus": {
          "background-color": "#0f4d00"
        }
      },
      "count": {
        "color": "#1e3264",
      },
      "iconPath": {
        "fill": "#1e3264"
      }
    },
    "googleFonts": [
      "Vollkorn"
    ]
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#353535"
      },
      "title": {
        "color": "#353535"
      },
      "price": {
        "color": "#353535"
      },
      "fullPrice": {
        "color": "#353535"
      },
      "discount": {
        "color": "#353535"
      },
      "discountIcon": {
        "fill": "#353535"
      },
      "quantity": {
        "color": "#353535"
      },
      "quantityIncrement": {
        "color": "#353535",
        "border-color": "#353535"
      },
      "quantityDecrement": {
        "color": "#353535",
        "border-color": "#353535"
      },
      "quantityInput": {
        "color": "#353535",
        "border-color": "#353535"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
