
// /*<![CDATA[*/
// (function () {
//   var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
//   if (window.ShopifyBuy) {
//     if (window.ShopifyBuy.UI) {
//       ShopifyBuyInit();
//     } else {
//       loadScript();
//     }
//   } else {
//     loadScript();
//   }
//   function loadScript() {
//     var script = document.createElement('script');
//     script.async = true;
//     script.src = scriptURL;
//     (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
//     script.onload = ShopifyBuyInit;
//   }
//   function ShopifyBuyInit() {
//     var client = ShopifyBuy.buildClient({
//       domain: 'spacebutterflyuk.myshopify.com',
//       storefrontAccessToken: '38f835659431459cebffcd078fa762c4',
//     });
//     ShopifyBuy.UI.onReady(client).then(function (ui) {
//       ui.createComponent('collection', {
//         id: '165067653253',
//         node: document.getElementById('collection-component-1580013572681'),
//         moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
//         options: {
//   "product": {
//     "styles": {
//       "product": {
//         "@media (min-width: 601px)": {
//           "max-width": "calc(25% - 20px)",
//           "margin-left": "20px",
//           "margin-bottom": "50px",
//           "width": "calc(25% - 20px)"
//         },
//         "img": {
//           "height": "calc(100% - 15px)",
//           "position": "absolute",
//           "left": "0",
//           "right": "0",
//           "top": "0"
//         },
//         "imgWrapper": {
//           "padding-top": "calc(75% + 15px)",
//           "position": "relative",
//           "height": "0"
//         }
//       },
//       "title": {
//         "font-family": "futura, sans-serif",
//         "font-weight": "normal",
//         "color": "#1e3264"
//       },
//       "button": {
//         "font-family": "futura, sans-serif",
//         "z-index": "20",
//         ":hover": {
//           "background-color": "#484848"
//         },
//         "background-color": "#505050",
//         ":focus": {
//           "background-color": "#484848"
//         },
//         "border-radius": "11px"
//       },
//       "price": {
//         "font-family": "futura, sans-serif",
//         "color": "#1e3264"
//       },
//       "compareAt": {
//         "font-family": "futura, sans-serif",
//         "color": "#1e3264"
//       },
//       "unitPrice": {
//         "font-family": "futura, sans-serif",
//         "color": "#1e3264"
//       },
//       "description": {
//         "font-family": "futura, sans-serif",
//         "color": "#c92929"
//       }
//     },
//     "text": {
//       "button": "QUICK ADD"
//     },
//     "googleFonts": [
//       "Vollkorn"
//     ]
//   },
//   "productSet": {
//     "styles": {
//       "products": {
//         "@media (min-width: 601px)": {
//           "margin-left": "-20px"
//         }
//       }
//     }
//   },
//   "modalProduct": {
//     "contents": {
//       "img": false,
//       "imgWithCarousel": true
//     },
//     "styles": {
//       "product": {
//         "@media (min-width: 601px)": {
//           "max-width": "100%",
//           "margin-left": "0px",
//           "margin-bottom": "0px"
//         }
//       },
//       "button": {
//         "font-family": "Vollkorn, serif",
//         ":hover": {
//           "background-color": "#484848"
//         },
//         "background-color": "#505050",
//         ":focus": {
//           "background-color": "#484848"
//         },
//         "border-radius": "11px"
//       },
//       "title": {
//         "font-family": "Vollkorn, serif",
//         "font-weight": "normal",
//         "color": "#1e3264"
//       },
//       "price": {
//         "font-family": "Vollkorn, serif",
//         "color": "#1e3264"
//       },
//       "compareAt": {
//         "font-family": "Vollkorn, serif",
//         "color": "#1e3264"
//       },
//       "unitPrice": {
//         "font-family": "Vollkorn, serif",
//         "color": "#1e3264"
//       },
//       "description": {
//         "font-family": "Vollkorn, serif",
//         "color": "#1e3264"
//       }
//     },
//     "googleFonts": [
//       "Vollkorn"
//     ],
//     "text": {
//       "button": "Add to cart"
//     }
//   },
//   "modal": {
//     "styles": {
//       "modal": {
//         "background-color": "#eccaca"
//       }
//     }
//   },
//   "cart": {
//     "styles": {
//       "button": {
//         "font-family": "Vollkorn, serif",
//         ":hover": {
//           "background-color": "#484848"
//         },
//         "background-color": "#505050",
//         ":focus": {
//           "background-color": "#484848"
//         },
//         "border-radius": "11px"
//       },
//       "title": {
//         "color": "#d12b2b"
//       },
//       "header": {
//         "color": "#d12b2b"
//       },
//       "lineItems": {
//         "color": "#d12b2b"
//       },
//       "subtotalText": {
//         "color": "#d12b2b"
//       },
//       "subtotal": {
//         "color": "#d12b2b"
//       },
//       "notice": {
//         "color": "#d12b2b"
//       },
//       "currency": {
//         "color": "#d12b2b"
//       },
//       "close": {
//         "color": "#d12b2b",
//         ":hover": {
//           "color": "#d12b2b"
//         }
//       },
//       "empty": {
//         "color": "#d12b2b"
//       },
//       "noteDescription": {
//         "color": "#d12b2b"
//       },
//       "discountText": {
//         "color": "#d12b2b"
//       },
//       "discountIcon": {
//         "fill": "#d12b2b"
//       },
//       "discountAmount": {
//         "color": "#d12b2b"
//       },
//       "cart": {
//         "background-color": "#e7a2a2"
//       },
//       "footer": {
//         "background-color": "#e7a2a2"
//       }
//     },
//     "text": {
//       "total": "Subtotal",
//       "button": "Checkout"
//     },
//     "googleFonts": [
//       "Vollkorn"
//     ]
//   },
//   "toggle": {
//     "styles": {
//       "toggle": {
//         "font-family": "Vollkorn, serif",
//         "background-color": "#505050",
//         ":hover": {
//           "background-color": "#484848"
//         },
//         ":focus": {
//           "background-color": "#484848"
//         }
//       }
//     },
//     "googleFonts": [
//       "Vollkorn"
//     ]
//   },
//   "lineItem": {
//     "styles": {
//       "variantTitle": {
//         "color": "#d12b2b"
//       },
//       "title": {
//         "color": "#d12b2b"
//       },
//       "price": {
//         "color": "#d12b2b"
//       },
//       "fullPrice": {
//         "color": "#d12b2b"
//       },
//       "discount": {
//         "color": "#d12b2b"
//       },
//       "discountIcon": {
//         "fill": "#d12b2b"
//       },
//       "quantity": {
//         "color": "#d12b2b"
//       },
//       "quantityIncrement": {
//         "color": "#d12b2b",
//         "border-color": "#d12b2b"
//       },
//       "quantityDecrement": {
//         "color": "#d12b2b",
//         "border-color": "#d12b2b"
//       },
//       "quantityInput": {
//         "color": "#d12b2b",
//         "border-color": "#d12b2b"
//       }
//     }
//   }
// },
//       });
//     });
//   }
// })();
// /*]]>*/