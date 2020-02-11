let cushionCoversIdList = [
  "Albert Einstein", 4503008018565,
  // "Bob Marley", 4503047110789,
  "Bruce Lee", 4503012933765,
  "Charlie Chaplin", 4503001727109,
  "Che Guevara", 4503005560965,
  // "David Bowie", 4503023878277,
  // "Elvis Presley (Design 1)", 4503031283845,
  // "Elvis Presley (Design 2)", 4503036067973,
  // "Frank Zappa", 4503065133189,
  "Ghandi", 4503010476165,
  // "Grateful Dead Jerry Garcia", 4503070474373,
  // "Jim Morrison (Design 1)", 4503051698309,
  // "Jim Morrison (Design 2)", 4503057334405,
  // "Jimi Hendrix (Design 1)", 4503039443077,
  // "Jimi Hendrix (Design 2)", 4503041278085,
  // "Jimi Hendrix (Design 3)", 4503043735685,
  // "Jimi Hendrix (Design 4)", 4503045210245,
  "Mark Zuckerberg", 4503018307717,
  "Morgan Freeman", 4503016669317,
  "Mr Bean", 4502983803013,
  "Nicholas Cage", 4502995927173,
  // "Paul McCartney (Beatles)", 4503062315141,
  // "Soundgarden Chris Cornell", 4503068082309,
  // "Stevie Ray Vaughan", 4503074472069,


  "Bacon", 4517497995397,
  "Bananas", 4517505466501,
  "Beers", 4517509628037,
  "Brunch Ice Lollies", 4517610291333,
  "Burger", 4517593940101,
  "Burgers", 4517591974021,
  "Chocolate Cake", 4517622579333,
  "Chocolate Donuts", 4517516574853,
  "Chocolate Ice Cream", 4517590171781,
  "Double Popsicle (Design 1)", 4517625692293,
  "Double Popsicle (Design 2)", 4517627134085,
  "Coke Float", 4517599445125,
  "Glazed Donuts", 4517601247365,
  "Orange Creamsicle", 4517618057349,
  "Pizza Slices", 4517480923269,
  "Rainbow Popsicle", 4517620318341,
  "Rainbow Snow Cone", 4517479219333,
  "Strawberry Ice Creams", 4517450088581,
  "Toast (Design 1)", 4517499961477,
  "Toast (Design 2)", 4517501436037,
  "Various Ice Creams", 4517462081669,

  "Aaargh Pop Art", 4523652808837,
  "Ahhhh Pop Art", 4523671519365,
  "Arrgh Pop Art", 4523675156613,
  "Bam Pop Art", 4523688820869,
  "Bang (Design 1) Pop Art", 4523665227909,
  "Bang (Design 2) Pop Art", 4523691278469,
  "Bang (Design 3) Pop Art", 4523693179013,
  "Boom (Design 1) Pop Art", 4523658707077,
  "Boom (Design 2) Pop Art", 4523663458437,
  "Ja Pop Art", 4523698651269,
  "Joy Pop Art", 4523720343685,
  "Kapow (Design 1) Pop Art", 4523649302661,
  "Kapow (Design 2) Pop Art", 4523723653253,
  "OMG Pop Art", 4523726307461,
  "Pow (Design 1) Pop Art", 4523729223813,
  "Pow (Design 2) Pop Art", 4523731910789,
  "Splat Pop Art", 4523733680261,
  "Wham Pop Art", 4523668340869,
  "Yeah Pop Art", 4523736006789,

  "Floral Design 1", 4523910660229,
  "Floral Design 2", 4523936809093,
  "Floral Design 3", 4523938414725,
  "Floral Design 4", 4523941298309,
  "Floral Design 5", 4523943329925,
  "Floral Design 6", 4523944902789,
  "Floral Design 7", 4523946311813,
  "Floral Design 8", 4523947753605,
  "Floral Design 9", 4523949555845,
  "Floral Design 10", 4523952144517,
  "Floral Design 11", 4523956011141,
  "Floral Design 12", 4523957649541,
  "Floral Design 13", 4523959910533,
  "Floral Design 14", 4523962499205,
  "Floral Design 15", 4523964039301,
  "Floral Design 16", 4523966333061,
  "Floral Design 17", 4523968233605,

  "Geometric Pattern Design 1", 4524046549125,
  "Geometric Pattern Design 2", 4524039569541,
  "Geometric Pattern Design 3", 4524050317445,
  "Geometric Pattern Design 4", 4524052250757,
  "Geometric Pattern Design 5", 4524057165957,
  "Geometric Pattern Design 6", 4524059951237,

  "Japanese Art Design 1", 4528799350917, 
  "Japanese Art Design 2", 4528813703301,
  "Japanese Art Design 3", 4528816029829,
  "Japanese Art Design 4", 4528817406085,
  "Japanese Art Design 5", 4528819142789,
  "Japanese Art Design 6", 4528821436549,
  "Japanese Art Design 7", 4528822780037,
  "Japanese Art Design 8", 4528826613893,
  "Japanese Art Design 9", 4528828055685,
  "Japanese Art Design 10", 4528829792389,
  "Japanese Art Design 11", 4528831529093,
  "Japanese Art Design 12", 4528833003653,
  "Japanese Art Design 13", 4528837066885,
  "Japanese Art Design 14", 4528870785157,
  "Japanese Art Design 15", 4528873504901,
  "Japanese Art Design 16", 4528881238149,
  "Japanese Art Design 17", 4528883236997,
  // "Japanese Art Design 18", 4524140888197,
  // "Japanese Art Design 19", 4524143640709,
  // "Japanese Art Design 20", 4524146393221,
  // "Japanese Art Design 21", 4524147900549,
  // "Japanese Art Design 22", 4524150161541,
  // "Japanese Art Design 23", 4524154290309,
  // "Japanese Art Design 24", 4524156420229,
  // "Japanese Art Design 25", 4524159402117,

  "Surreal Design 1", 4524244238469,
  "Surreal Design 2", 4524260130949,
  "Surreal Design 3", 4524261671045,
  "Surreal Design 4", 4524264063109,
  "Surreal Design 5", 4524266324101,
  "Surreal Design 6", 4524267765893,
  "Surreal Design 7", 4524269240453,
  "Surreal Design 8", 4524271992965,
  "Surreal Design 9", 4524274090117,
  "Surreal Design 10", 4524275990661,
  "Surreal Design 11", 4524280578181,
  "Surreal Design 12", 4524282675333,
  "Surreal Design 13", 4524283789445,
  "Surreal Design 14", 4524285591685,
  "Surreal Design 15", 4524287787141,
  "Surreal Design 16", 4524289065093,

  "Beastie Boys", 4528657760389,
  "Bono", 4528663134341,
  "Bob Dylan", 4528667426949,
  "Bruce Springsteen", 4528681255045,
  "Johnny Cash", 4528670638213,
  "John Lennon", 4528672866437,
  "Leonard Cohen", 4528675324037,
  "Liam Gallagher", 4528677585029,
  "ZZ Top", 4528684990597,
  "Musicians Set Of 9 Covers", 4528925376645,

  "Seahorse", 4528998613125,
  "Green Seahorse", 4529025777797,
  "Green Coral Design 1", 4529030463621,
  "Green Coral Design 2", 4529032233093,
  "Green Shell", 4529033740421,
  "Green Starfish", 4529034920069,
  "Orange Coral", 4529036689541,
  "Orange Starfish", 4529038327941,
  "Shell", 4529040064645,

  "Picasso 1", 4559937405061,

  "Harlequin With Guitar by Picasso", 4559937405061,
  "Woman In A Shawl by Picasso", 4559942910085,
  "The Old Guitarist by Picasso", 4559946154117,
  "The Matador by Picasso", 4559959294085,
  "Woman Crying by Picasso", 4559966863493,
  "Les Demoiselles d'Avignon by Picasso", 4559992553605,
  "La Muse by Picasso", 4560022470789,
  "Courtsean With Necklace Of Gems by Picasso", 4560039084165,
  "Harlequin by Picasso", 4560051372165,
  "Claude With A Ball by Picasso", 4560285368453,
  "The Yellow Shirt by Picasso", 4560289562757,
  "Marie-Therese Walter by Picasso", 4560292348037,
  "Les Femmes d'Alger by Picasso", 4560298082437,
  "Three Musicians by Picasso", 4560332226693,
  "Girl Before A Mirror by Picasso", 4560334291077,

  "Nautical Set of 5 (Design 1)", 4560359686277,
  "Nautical Set of 5 (Design 2)", 4560363225221,
  "Nautical Set of 5 (Design 3)", 4560380788869,
  "Nautical Set of 5 (Design 4)", 4560359686277,
  "Nautical Set of 5 (Design 5)", 4560384589957,
  "Nautical Set of 5 (Design 6)", 4560386130053,
  "Nautical Set of 5 (Design 7)", 4560387408005,
  "Nautical Set of 5 (Design 8)", 4560388784261,

  "As High As Honor (Game Of Thrones)", 4560671867013,
  "Family Duty Honor (Game Of Thrones)", 4560676388997,
  "Fire And Blood (Game Of Thrones)", 4560677798021,
  "Hear Me Roar (Game Of Thrones)", 4560678944901,
  "Our Blades Are Sharp (Game Of Thrones)", 4560683663493,
  "Ours Is The Fury (Game Of Thrones)", 4560688971909,
  "Unbowed Unbent Unbroken (Game Of Thrones)", 4560693297285,
  "We Do Not Sow (Game Of Thrones)", 4560696737925,
  "Winter Is Coming (Game Of Thrones)", 4560700702853,
  "C-3PO (Star Wars)", 4560705683589,
  "Darth Vader (Star Wars)", 4560710271109,
  "Millenium Falcon (Star Wars)", 4560715677829,
  "R2-D2 (Star Wars)", 4560719839365,
  "Walker (Star Wars)", 4560723837061,
  "Star Wars Logo", 4560727933061,
  "Stormtrooper (Star Wars) Design 1", 4560737140869,
  "Stormtrooper (Star Wars) Design 2", 4560742023301,
  "Yoda (Star Wars)", 4560749133957,



  "undefined", "undefined"
  // undefined is required as the final element because the last element in the array sometimes gets added to the search results for an unknown reason
  ];

  // the following for statement converts all the strings in the cushionCoversIdList array to lowercase
  for(i=0; i<cushionCoversIdList.length; i++) {
    if(typeof cushionCoversIdList[i] === "string") {
      let lowercaseName = cushionCoversIdList[i].toLowerCase();
      cushionCoversIdList.splice(i, 1, lowercaseName);
    }
  }

const searchBar = document.getElementById('search-field');

if(pageID === "Home" || pageID === "Browse By Category" || pageID === "Animals") {
      document.getElementById('collection-component').style.display = "none";
      document.getElementById('large-white-box').style.display = "none";
}



searchBar.addEventListener('keyup', function(e) {   







var x = event.keyCode;
  if (x === 8 || x === 13 || x === 46 || x > 64) {
    if (x<91) {





if(pageID === "Home" || pageID === "Browse By Category" || pageID === "Shipping & Payment" || pageID === "Animals") {
      document.getElementById('collection-component').style.display = "block";
      document.getElementById('large-white-box').style.display = "block";
      
}

if(pageID === "Browse By Category" || pageID === "Animals") {
      document.getElementById('browse-page-contents').style.display = "none";
}

if(pageID === "Home") {
      document.getElementById('homepage-contents').style.display = "none";
}

if(pageID === "Shipping & Payment") {
      document.getElementById('shipping-page-contents').style.display = "none";
}



    const searchEntryStr = e.target.value;
    const searchEntryStrLowerCase = searchEntryStr.toLowerCase();
    const searchEntryArr = searchEntryStrLowerCase.split(' ');
    var searchResultsProductNames = [];
    var searchResultsProductIds = [];
    var finalSearchResults = [];

    for(i=0; i<cushionCoversIdList.length; i+=2) {
        let cushionName = cushionCoversIdList[i];
        let cushionId = cushionCoversIdList[i+1];

        for(j=0; j<searchEntryArr.length; j++) {
            let searchWord = searchEntryArr[j];
            if(cushionName.indexOf(searchWord) != -1){
                searchResultsProductNames.push(cushionName);
                searchResultsProductNames.push(cushionId);
            }
        }

        for(j=0; j<searchEntryArr.length; j++) {
            for(k=0; k<searchResultsProductNames.length; k+=2) {
                let searchWord = searchEntryArr[j];
                let searchResult = searchResultsProductNames[k];
                if(searchResult.indexOf(searchWord) === -1) {
                  searchResultsProductNames.splice(k, 2);
                }
            }
        }
    }

    // remove duplicate search results
    let uniqueResults = [...new Set(searchResultsProductNames)];

    // remove product names from the array so that it just contains the product IDs
    for(i=0; i<uniqueResults.length; i++) {
      if(typeof uniqueResults[i] === "string") {
        uniqueResults.splice(i,1);
      }
    }


    document.getElementById('text-container').style.display = "none"; 

    // display message if no search results are found
    if(uniqueResults.length === 0) {
      document.getElementById('breadcrumbs').style.visibility = "hidden";
      document.getElementById('search-results-text').innerHTML = "";
      document.getElementById('search-results-text-unsuccessful').style.display = "block";
      document.getElementById('go-back-message').style.display = "block";
      document.getElementById('go-back-message').innerHTML = '<i class="fa fa-chevron-left" aria-hidden="true"></i>' + '&nbsp;' + 'Back to ' + pageID;
      document.getElementById('search-results-text-unsuccessful').innerHTML = 
      `<span id="sorry">Sorry we couldn't find anything to match your search  <br>"` + searchEntryStr + '"</span>' 
      + "<br><br><br>Can't find what you're looking for? <br>Why not <a href='create-your-own.html' id='create-your-own'>Create Your Own?</a>";

      document.getElementById('go-back').setAttribute('href', pageLink);

    }

    // display text showing how many search results were found
    if(uniqueResults.length > 0) {
      document.getElementById('search-results-text-unsuccessful').innerHTML = "";
      document.getElementById('search-results-text-unsuccessful').style.display = "none";
    }

    let results = "results";

    if(uniqueResults.length === 1) {
      results = "result";
    }

    // clear the screen before rendering content
    document.getElementById('collection-component').innerHTML = "";

    let productSetOrCollection = "productSet"

    if(searchEntryStr.length === 0) {
        uniqueResults = collectionID;
        productSetOrCollection = "collection";
        document.getElementById('breadcrumbs').style.visibility = "visible";
        document.getElementById('go-back-message').style.display = "none";
        document.getElementById('search-results-text').innerHTML = "";
        document.getElementById('text-container').style.display = "block";        

      if(pageID === "Home" || pageID === "Browse By Category" || pageID === "Animals") {
        document.getElementById('breadcrumbs').style.visibility = "hidden";
        document.getElementById('go-back-message').style.display = "none";
        document.getElementById('search-results-text').innerHTML = "";
        document.getElementById('text-container').style.display = "none"; 
        document.getElementById('collection-component').style.display = "none";
        document.getElementById('large-white-box').style.display = "none";
      }

      if(pageID === "Browse By Category" || pageID === "Animals") {
            document.getElementById('browse-page-contents').style.display = "block";
      }

      if(pageID === "Home") {
            document.getElementById('homepage-contents').style.display = "block";
      }

      if(pageID === "Shipping & Payment") {
        document.getElementById('shipping-page-contents').style.display = "block";
        document.getElementById('go-back-message').style.display = "none";
        document.getElementById('search-results-text').innerHTML = "";
        document.getElementById('text-container').style.display = "none"; 
      }
  }

    // function to load search results
    if(uniqueResults.length>0) {
      (function () {
          document.getElementById('go-back-message').style.display = "none";
          if(searchEntryStr) {
              document.getElementById('search-results-text').innerHTML = 'Showing ' + uniqueResults.length + 
              ' search ' + results + ' for "' + searchEntryStr + '"';

              document.getElementById('breadcrumbs').style.visibility = "hidden";
          }
          else {
              document.getElementById('search-results-text').innerHTML = "";
          }
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
            script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            // script.onprogress = loading();
            script.onload = ShopifyBuyInit;
          }
          function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
              domain: 'spacebutterflyuk.myshopify.com',
              storefrontAccessToken: '38f835659431459cebffcd078fa762c4',
            });
            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent(productSetOrCollection, {
                id: uniqueResults,
                node: document.getElementById('collection-component'),
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
                // "outline": "10px solid red",
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

// The following curly brace goes with the if statement that wraps around the IIFE
}

// The following curly brace and bracket go with the keydown event listener
}}});




// the following IIFE initiliases the shopify component

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
            // function loading() {
          // document.getElementById('collection-component').innerHTML = "Loading";
            // }
            script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            // script.onprogress = loading();
            script.onload = ShopifyBuyInit;
          }
          function ShopifyBuyInit() {
                document.getElementById('collection-component').innerHTML = "";

            // (document.getElementsByTagName('head')[0]).replaceChild(script, "0");
            var client = ShopifyBuy.buildClient({
              domain: 'spacebutterflyuk.myshopify.com',
              storefrontAccessToken: '38f835659431459cebffcd078fa762c4',
            });
            ShopifyBuy.UI.onReady(client).then(function (ui) {
              // ui.replaceComponent('productSet');
              ui.createComponent('productSet', {
                id: collectionID,
                node: document.getElementById('collection-component'),
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


