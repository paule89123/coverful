let cushionCoversIdList = [

"Abstract Japanese Face", 4528870785157,
"Abstract Japanese Face 2", 4528873504901,
"The Great Wave Off Kanagawa 3 by hokusai Japanese art waves sea", 4675794534533,
"Japanese abstract art waves koi carp fish", 4613042471045,
"Japanese cat art", 4528799350917,
"Japanese cat fishing wave art", 4612991910021,
"Japanese Crane birds Silhouettes art", 4528813703301,
"Japanese Crane and fans birds art", 4594670698629,
"Japanese Crane and fans birds 2 art", 4675793420421,
"Japanese Cranes and volcano birds art", 4613030772869,
"Japanese Cranes at night birds art", 4613025497221,
"Japanese Cranes flying birds art", 4594699239557,
"Japanese Cranes on water lake birds art", 4594688327813,
"Japanese fans of fire art", 4612959633541,
"Japanese fans collage pattern art", 4613036966021,
"Japanese fans collage pattern art 2", 4528829792389,
"Japanese flowers fans collage pattern art 2", 4528826613893,
"Japanese girl woman pink floral flowers blossom tree blue", 4528817406085,
"Japanese girl woman green umbrella", 4528816029829,
"Japanese girl woman hot pink flowers", 4528837066885,
"Japanese girl woman purple pink floral flowers blossom tree", 4528819142789,
"Japanese girl woman green fan bird", 4528821436549,
"Japanese girl woman orange fan", 4528822780037,
"Japanese girl woman hot pink flowers", 4528833003653,
"Japanese horse art", 4612985553029,
"Japanese horse art 2", 4612995776645,
"Japanese Koi Carp fish and Waves sea water ", 4613002068101,
"Cat Bus my neighbour neighbor totoro studio Ghibli", 4635865940101,
"Cat Bus stop my neighbour neighbor totoro studio Ghibli", 4591565996165,
"my neighbour neighbor totoro studio Ghibli vintage Christmas santa", 4591550922885,
"my neighbour neighbor totoro studio Ghibli vintage Christmas santa", 4591391146117,
"Colourful Japanese art Mountains", 4675785425029,
"Futuristic totoro my neighbour neighbor studio Ghibli", 4591596306565,
"Hugging totoro my neighbour neighbor studio Ghibli", 4591555248261,

  "", ""
  // these empty strings is required as the final element because the last element in the array sometimes gets added to the search results for an unknown reason
  ];


let searchEntryStr;
let uniqueResults;
let nameArray;
let loadingAnimation = document.getElementById('loading');
let collectionComponent = document.getElementById('collection-component')



  // converting all the strings in the cushionCoversIdList array to lowercase
  for(i=0; i<cushionCoversIdList.length; i++) {
    if(typeof cushionCoversIdList[i] === "string") {
      let lowercaseName = cushionCoversIdList[i].toLowerCase();
      cushionCoversIdList.splice(i, 1, lowercaseName);
    }
  }




// controlling appearance of searchbar
const searchBar = document.getElementById('search-field');
const whiteness = document.getElementById('whiteness');
searchBar.addEventListener("click", makeSearchBarBrighter);
searchBar.addEventListener("focusout", makeSearchBarDuller);
function makeSearchBarBrighter() {
    whiteness.style.opacity = "0.84";
    searchBar.style.color = "rgb(0,0,0,0.73)";
}
function makeSearchBarDuller() {
    whiteness.style.opacity = "0";
}




// hiding the collection component for certain pages, and changing the styling of the search suggestions for certain pages
if(pageID === "Home" || pageID === "Browse By Category" || pageID === "Animals") {
    document.getElementById('collection-component').style.display = "none";
    document.getElementById('large-white-box').style.display = "none";
    document.getElementById("search-results").style.backdropFilter = "blur(40px)";
    document.getElementById("search-results").style.backgroundColor = "rgb(0,0,0,0.05)";
}




// controlling the mouseover behaviour of the buttons in the top right of the screen
let shippingCircle = document.getElementById('shipping-circle');
let contactCircle = document.getElementById('contact-circle');
let facebookCircle = document.getElementById('instagram-circle');
shippingCircle.addEventListener("mouseover", onMouseoverShippingCircle);
shippingCircle.addEventListener("mouseleave", onMouseleaveShippingCircle);
contactCircle.addEventListener("mouseover", onMouseoverContactCircle);
contactCircle.addEventListener("mouseleave", onMouseleaveContactCircle);
function onMouseoverShippingCircle() {
    hideContactCircle();
    // hideFacebookCircle();
    shippingCircle.style.background = "rgb(210,237,246)";
    shippingCircle.style.transition = "clip-path 0.67s 100ms ease-in-out, background 500ms 0s ease-in-out";
}
function onMouseleaveShippingCircle() {
    showContactCircle();
    // showFacebookCircle();
    shippingCircle.style.background = "0";
    shippingCircle.style.transition = "clip-path 0.8s ease-in-out, background 550ms 0.35s ease-in-out";
}
function onMouseoverContactCircle() {
    hideFacebookCircle();
    contactCircle.style.background = "rgb(210,237,246)";
    contactCircle.style.transition = "clip-path 0.67s 100ms ease-in-out, background 500ms 0s ease-in-out";
}
function onMouseleaveContactCircle() {
    showFacebookCircle();
    contactCircle.style.background = "0";
    contactCircle.style.transition = "clip-path 0.8s ease-in-out, background 550ms 0.35s ease-in-out";
}
function hideContactCircle() {
    contactCircle.style.opacity = "0";
    contactCircle.style.transition = "clip-path 0.8s ease-in-out, opacity 0.15s ease-in-out, background 1s ease-in-out";
}
function showContactCircle() {
    contactCircle.style.opacity = "1";
    contactCircle.style.transition = "clip-path 0.8s ease-in-out, opacity 0.4s 0.3s ease, background 1s ease-in-out";
}
function hideFacebookCircle() {
    facebookCircle.style.opacity = "0";
    facebookCircle.style.transition = "opacity 0.15s ease-in-out, background 0.2s ease-in-out";
}
function showFacebookCircle() {
    facebookCircle.style.opacity = "1";
    facebookCircle.style.transition = "opacity 0.4s 0.3s ease, background 0.2s ease-in-out";
}




// controlling what happens when a user clicks one of the search suggestions
let searchResult1 = document.getElementById('search-result-1');
let searchResult2 = document.getElementById('search-result-2');
let searchResult3 = document.getElementById('search-result-3');
let searchResult4 = document.getElementById('search-result-4');
let searchResult5 = document.getElementById('search-result-5');
let searchResult6 = document.getElementById('search-result-6');
let searchResult7 = document.getElementById('search-result-7');
searchResult1.style.display = "none";
searchResult2.style.display = "none";
searchResult3.style.display = "none";
searchResult4.style.display = "none";
searchResult5.style.display = "none";
searchResult6.style.display = "none";
searchResult7.style.display = "none";
document.getElementById("search-result-1").addEventListener("click", grabAndSearch);
document.getElementById("search-result-2").addEventListener("click", grabAndSearch);
document.getElementById("search-result-3").addEventListener("click", grabAndSearch);
document.getElementById("search-result-4").addEventListener("click", grabAndSearch);
document.getElementById("search-result-5").addEventListener("click", grabAndSearch);
document.getElementById("search-result-6").addEventListener("click", grabAndSearch);
document.getElementById("search-result-7").addEventListener("click", grabAndSearch);
document.body.addEventListener('click', searchResultCloser);
function grabAndSearch(e) {
    var searchSuggestion = e.target.innerHTML;
    searchBar.value = searchSuggestion;
    searchEntryStr = searchSuggestion;
    runSearch();
    displaySearch();
    searchResultCloser();
}
function searchResultCloser(){
    searchResult1.style.display = "none";
    searchResult2.style.display = "none";
    searchResult3.style.display = "none";
    searchResult4.style.display = "none";
    searchResult5.style.display = "none";
    searchResult6.style.display = "none";
    searchResult7.style.display = "none";
    searchBar.style.borderRadius = "10px";
    whiteness.style.borderRadius = "10px";
}




// controlling when the footer is displayed
let footer = document.getElementById('footer');
if(pageID === "Shipping & Payment" || pageID === "About Us" || pageID === "Contact" || pageID === "Cookies Policy") {
    footer.style.display = "block";
}
// the following ResizeObserver ensures that the footer only loads after the products have loaded. It observes a change in height of
// the collectionComponent when the products load
const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
      if(entry.contentRect.height > 0) {
        footer.style.display = "block";
      }
    }
});
observer.observe(collectionComponent);




searchBar.addEventListener('keyup', performSearch);   
function performSearch(e) {
    runSearch();
    var x = e.keyCode;

    if (x === 13) {
        displaySearch();
        searchResultCloser();
    }
}
function runSearch() {
    searchEntryStr = searchBar.value;
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
    uniqueResults = [...new Set(searchResultsProductNames)];
    nameArray = [...uniqueResults];

    // remove IDs from the array so that it just contains the product names
    for(i=nameArray.length; i>=0; i--) {
      if(typeof nameArray[i] === "number") {
        nameArray.splice(i,1);

        if(i>14) {
          nameArray.splice(i,1);
        }
      }
    }

    // remove product names from the array so that it just contains the product IDs
    for(i=0; i<uniqueResults.length; i++) {
      if(typeof uniqueResults[i] === "string") {
        uniqueResults.splice(i,1);
      }
    }

    searchResult1.innerHTML = nameArray[0];
    searchResult2.innerHTML = nameArray[1];
    searchResult3.innerHTML = nameArray[2];
    searchResult4.innerHTML = nameArray[3];
    searchResult5.innerHTML = nameArray[4];
    searchResult6.innerHTML = nameArray[5];
    searchResult7.innerHTML = nameArray[6];


    if(nameArray.length === 0) {
      searchResultCloser();      
    }
    if(nameArray.length === 1) {
      searchResult1.style.display = "block";
      searchResult2.style.display = "none";
      searchResult3.style.display = "none";
      searchResult4.style.display = "none";
      searchResult5.style.display = "none";
      searchResult6.style.display = "none";
      searchResult7.style.display = "none";
    }
    if(nameArray.length === 2) {
      searchResult1.style.display = "block";
      searchResult2.style.display = "block";
      searchResult3.style.display = "none";
      searchResult4.style.display = "none";
      searchResult5.style.display = "none";
      searchResult6.style.display = "none";
      searchResult7.style.display = "none";
    }
    if(nameArray.length === 3) {
      searchResult1.style.display = "block";
      searchResult2.style.display = "block";
      searchResult3.style.display = "block";
      searchResult4.style.display = "none";
      searchResult5.style.display = "none";
      searchResult6.style.display = "none";
      searchResult7.style.display = "none";
    }
    if(nameArray.length === 4) {
      searchResult1.style.display = "block";
      searchResult2.style.display = "block";
      searchResult3.style.display = "block";
      searchResult4.style.display = "block";
      searchResult5.style.display = "none";
      searchResult6.style.display = "none";
      searchResult7.style.display = "none";
    }
    if(nameArray.length === 5) {
      searchResult1.style.display = "block";
      searchResult2.style.display = "block";
      searchResult3.style.display = "block";
      searchResult4.style.display = "block";
      searchResult5.style.display = "block";
      searchResult6.style.display = "none";
      searchResult7.style.display = "none";
    }
    if(nameArray.length === 6) {
      searchResult1.style.display = "block";
      searchResult2.style.display = "block";
      searchResult3.style.display = "block";
      searchResult4.style.display = "block";
      searchResult5.style.display = "block";
      searchResult6.style.display = "block";
      searchResult7.style.display = "none";
    }
    if(nameArray.length >= 7) {
      searchResult1.style.display = "block";
      searchResult2.style.display = "block";
      searchResult3.style.display = "block";
      searchResult4.style.display = "block";
      searchResult5.style.display = "block";
      searchResult6.style.display = "block";
      searchResult7.style.display = "block";
    }
    if(nameArray.length >= 1) {
      searchBar.style.borderRadius = "10px 10px 0px 0px";
      whiteness.style.borderRadius = "10px 10px 0px 0px";
    }
    if(searchEntryStr.length === 0) {
      searchResultCloser();
    }
}


document.getElementById("search-icon").addEventListener('click', displaySearch);

function displaySearch() {

    footer.style.display = "none";
    footer.style.top = "186px";
    loadingAnimation.style.display = "block";
    loadingAnimation.style.top = "120px";
    searchBar.style.color = "rgb(0,0,0,0.5";
    document.getElementById("search-results").style.backdropFilter = "blur(60px)";
    document.getElementById("search-results").style.backgroundColor = "rgb(0,0,0,0.15)";
    document.getElementById('text-container').style.display = "none"; 

    if(pageID === "Home" || pageID === "Browse By Category" || pageID === "Shipping & Payment" || pageID === "Animals" || pageID === "About Us" || pageID === "Contact" || pageID === "Cookies Policy") {
          document.getElementById('collection-component').style.display = "block";
          document.getElementById('large-white-box').style.display = "block";
    }

    if(pageID === "Browse By Category" || pageID === "Animals") {
          document.getElementById('browse-page-contents').style.display = "none";
    }

    if(pageID === "Home") {
          document.getElementById('homepage-contents').style.display = "none";
    }

    if(pageID === "Shipping & Payment" || pageID === "About Us" || pageID === "Contact" || pageID === "Cookies Policy") {
          document.getElementById('shipping-page-contents').style.display = "none";
    }


    // what happens if no search results are found
    if(uniqueResults.length === 0) {
      loadingAnimation.style.display = "none";
      document.getElementById('breadcrumbs').style.visibility = "hidden";
      document.getElementById('search-results-text').innerHTML = "";
      document.getElementById('search-results-text-unsuccessful').style.display = "block";
      document.getElementById('go-back-message').style.display = "block";
      document.getElementById('go-back-message').innerHTML = '<i class="fa fa-chevron-left" aria-hidden="true"></i>' + '&nbsp;' + 'Back to ' + pageID;
      document.getElementById('search-results-text-unsuccessful').innerHTML = 
      `<span id="sorry">Sorry we couldn't find anything to match your search  <br>"` + searchEntryStr + '"</span>' 
      + "<br><br><br>Can't find what you're looking for? <br>Why not <a href='create-your-own.html' id='create-your-own'>Create Your Own?</a>";
      document.getElementById('footer').style.display = "block";
      document.getElementById('footer').style.top = "572px";
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
        footer.style.display = "block";

      if(pageID === "Home" || pageID === "Browse By Category" || pageID === "Animals") {
        document.getElementById('breadcrumbs').style.visibility = "hidden";
        document.getElementById('go-back-message').style.display = "none";
        document.getElementById('search-results-text').innerHTML = "";
        document.getElementById('text-container').style.display = "none"; 
        document.getElementById('collection-component').style.display = "none";
        document.getElementById('large-white-box').style.display = "none";
        footer.style.display = "none";
      }

      if(pageID === "Browse By Category" || pageID === "Animals") {
            document.getElementById('browse-page-contents').style.display = "block";
      }

      if(pageID === "Home") {
            document.getElementById('homepage-contents').style.display = "block";
      }

      if(pageID === "Shipping & Payment" || pageID === "About Us" || pageID === "Contact" || pageID === "Cookies Policy") {
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
              "futura"
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
                // "background-image": "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);",
                "border": "2px solid rgb(17,17,17)",
                "font-size": "12px",
                // "font-weight": "500",
                "font-family": "futura, sans-serif",
                "color": "white",
                ":hover": {
                  "color": "rgb(17,17,17)",
                  "background-color": "white"
                },
                "background-color": "rgb(17,17,17)",
                ":focus": {
                  "background-color": "rgb(17,17,17)"
                },
                "border-radius": "0px",
                "padding-left": "45px",
                "padding-right": "45px",
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
              "futura"
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
                  "color": "#black",
                  "background-color": "#black"
                },
                "background-color": "rgb(0,0,0,0.9)",
                ":focus": {
                  "background-color": "black"
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
              "futura"
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
              "futura"
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
};




// the following IIFE initiliases the shopify component

(function () {

          if(pageID != "Home" && pageID != "Browse By Category" && pageID != "Animals" && pageID != "Shipping & Payment" && pageID != "About Us" && pageID != "Contact") {
              loadingAnimation.style.display = "block";
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
                // "font-weight": "bold",
                "color": "black",
                "font-size": "15px",
                ":hover": {
                  "color": "white",
                  "background-color": "black"
                },
                "background-color": "white",
                ":focus": {
                  "color": "white",
                  "background-color": "black",
                  "outline": "0",
                },
                "border-radius": "4px",
                "border": "2px solid black",
                "padding-left": "15px",
                "padding-right": "15px",
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
              "futura"
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
              // "img": {
              //   "width": "400px",
              // },
              "button": {
                // "position": "absolute",
                // "bottom": "100px",
                // "background-image": "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);",
                "border": "2px solid rgb(17,17,17)",
                "font-size": "12px",
                // "font-weight": "500",
                "font-family": "futura, sans-serif",
                "color": "white",
                ":hover": {
                  "color": "rgb(17,17,17)",
                  "background-color": "white"
                },
                "background-color": "rgb(17,17,17)",
                ":focus": {
                  "background-color": "rgb(17,17,17)"
                },
                ":active": {
                  "background-color": "rgb(17,17,17)"
                },
                "border-radius": "0px",
                "padding-left": "45px",
                "padding-right": "45px",
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
              "futura"
            ],
            "text": {
              "button": "ADD TO CART",
            }
          },
          "modal": {
            "styles": {
              "modal": {
                // "user-select": "none",
                "background-color": "white",
                // "border": "30px solid black",
                // "border-radius": "15px",
                // "box-shadow": "0px 0px 100px rgba(0,0,0,0.2)"

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
                  "color": "white",
                  "background-color": "black"
                },
                "background-color": "rgb(0,0,0,0.9)",
                ":focus": {
                  "background-color": "black"
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
              "futura"
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
              "futura"
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






