let cushionCoversIdList = [
  "Albert Einstein Pop Art", 4503008018565,
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
  "Stevie Ray Vaughan Pop Art", 4503074472069,
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

searchBar.addEventListener('keyup', function(e) {   




var x = event.keyCode;
  if (x === 8 || x === 13 || x === 46 || x > 64) {
    if (x<91) {




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

    // display message if no search results are found
    if(uniqueResults.length === 0) {
      document.getElementById('search-results-text').innerHTML = "";
      document.getElementById('search-results-text-unsuccessful').innerHTML = 
      `<span id="sorry">Sorry we couldn't find anything to match your search  <br>"` + searchEntryStr + '"</span>' 
      + "<br><br><br>Can't find what you're looking for? <br>Why not <a href='create.html' id='create-your-own'>Create Your Own?</a>";
      document.getElementById('search-results-text-unsuccessful').style.display = "block";
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

    // function to load search results (but only if the screen has already been cleared first)
    if(uniqueResults.length>0) {
      (function () {
          if(searchEntryStr) {
              document.getElementById('search-results-text').innerHTML = 'We found ' + uniqueResults.length + 
              ' search ' + results + ' for "' + searchEntryStr + '"';
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
              ui.createComponent('productSet', {
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
                id: [],
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