import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Header from "./Components/Header";


//     const resList = [
  
//                   {
//                     "info":
//                     {
//                       "id": "491971",
//                       "name": "BOX8 - Desi Meals",
//                       "cloudinaryImageId": "69a061b7e0f951cef2b4947946f94ec6",
//                       "locality": "Village Marunji",
//                       "areaName": "Mulshi Road",
//                       "costForTwo": "₹250 for two",
//                       "cuisines": [
//                         "North Indian",
//                         "Biryani",
//                         "Thalis",
//                         "Home Food"
//                       ],
//                       "avgRating": 4.3,
//                       "parentId": "10655",
//                       "avgRatingString": "4.3",
//                       "totalRatingsString": "500+",
//                       "sla": {
//                         "deliveryTime": 23,
//                         "lastMileTravel": 1.9,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "18-28 mins",
//                         "lastMileTravelString": "1.9 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2024-02-08 02:00:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "textExtendedBadges": [
//                           {
//                             "iconId": "guiltfree/GF_Logo_android_3x",
//                             "shortDescription": "options available",
//                             "fontColor": "#7E808C"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
                            
//                           },
//                           "textBased": {
                            
//                           },
//                           "textExtendedBadges": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "",
//                                   "fontColor": "#7E808C",
//                                   "iconId": "guiltfree/GF_Logo_android_3x",
//                                   "shortDescription": "options available"
//                                 }
//                               }
//                             ]
//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "50% OFF",
//                         "subHeader": "UPTO ₹100"
//                       },
//                       "orderabilityCommunication": {
//                         "title": {
                          
//                         },
//                         "subTitle": {
                          
//                         },
//                         "message": {
                          
//                         },
//                         "customIcon": {
                          
//                         }
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                           "lottie": {
                            
//                           },
//                           "video": {
                            
//                           }
//                         }
//                       },
//                       "reviewsSummary": {
                        
//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {
                        
//                       }
//                     },
//                     "analytics": {
//                       "context": "seo-data-fcdb53ee-de83-4afd-b6f8-25af1f43aad5"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/restaurants/box8-desi-meals-village-marunji-mulshi-road-pune-491971",
//                       "text": "RESTAURANT_MENU",
//                       "type": "WEBLINK"
//                     },
//                     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                   },


//                   {
//                     "info": {
//                       "id": "688719",
//                       "name": "Chinese Wok",
//                       "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//                       "locality": "Rahatan",
//                       "areaName": "Pimple Saudagar",
//                       "costForTwo": "₹250 for two",
//                       "cuisines": [
//                         "Chinese",
//                         "Asian",
//                         "Tibetan",
//                         "Desserts"
//                       ],
//                       "avgRating": 3.9,
//                       "parentId": "61955",
//                       "avgRatingString": "3.9",
//                       "totalRatingsString": "500+",
//                       "sla": {
//                         "deliveryTime": 35,
//                         "lastMileTravel": 9.3,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "35-40 mins",
//                         "lastMileTravelString": "9.3 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2024-02-08 01:00:00",
//                         "opened": true
//                       },
//                       "badges": {
                        
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
                            
//                           },
//                           "textBased": {
                            
//                           },
//                           "textExtendedBadges": {
                            
//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "EVERY ITEM",
//                         "subHeader": "@ ₹149"
//                       },
//                       "orderabilityCommunication": {
//                         "title": {
                          
//                         },
//                         "subTitle": {
                          
//                         },
//                         "message": {
                          
//                         },
//                         "customIcon": {
                          
//                         }
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                           "lottie": {
                            
//                           },
//                           "video": {
                            
//                           }
//                         }
//                       },
//                       "reviewsSummary": {
                        
//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {
                        
//                       }
//                     },
//                     "analytics": {
//                       "context": "seo-data-fcdb53ee-de83-4afd-b6f8-25af1f43aad5"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/restaurants/chinese-wok-rahatan-pimple-saudagar-pune-688719",
//                       "text": "RESTAURANT_MENU",
//                       "type": "WEBLINK"
//                     },
//                     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                   },


//                   {
//                     "info": {
//                       "id": "454307",
//                       "name": "Beijing Bites",
//                       "cloudinaryImageId": "nyf6kaxyv8zbd4flb6wl",
//                       "areaName": "Balewadi",
//                       "costForTwo": "₹300 for two",
//                       "cuisines": [
//                         "Chinese"
//                       ],
//                       "avgRating": 4.3,
//                       "parentId": "103",
//                       "avgRatingString": "4.3",
//                       "totalRatingsString": "10+",
//                       "sla": {
//                         "deliveryTime": 41,
//                         "lastMileTravel": 8.7,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "40-45 mins",
//                         "lastMileTravelString": "8.7 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2024-02-07 23:59:00",
//                         "opened": true
//                       },
//                       "badges": {
                        
//                       },
//                       "isOpen": true,
//                       "aggregatedDiscountInfoV2": {
                        
//                       },
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
                            
//                           },
//                           "textBased": {
                            
//                           },
//                           "textExtendedBadges": {
                            
//                           }
//                         }
//                       },
//                       "orderabilityCommunication": {
//                         "title": {
                          
//                         },
//                         "subTitle": {
                          
//                         },
//                         "message": {
                          
//                         },
//                         "customIcon": {
                          
//                         }
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                           "lottie": {
                            
//                           },
//                           "video": {
                            
//                           }
//                         }
//                       },
//                       "reviewsSummary": {
                        
//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {
                        
//                       }
//                     },
//                     "analytics": {
//                       "context": "seo-data-fcdb53ee-de83-4afd-b6f8-25af1f43aad5"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/restaurants/beijing-bites-balewadi-pune-454307",
//                       "text": "RESTAURANT_MENU",
//                       "type": "WEBLINK"
//                     },
//                     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                   },


//                   {
//                     "info": {
//                       "id": "650989",
//                       "name": "Chicago Pizza",
//                       "cloudinaryImageId": "97a5dc106839dc84ae7942195d814385",
//                       "locality": "1st Phase",
//                       "areaName": "Wakad",
//                       "costForTwo": "₹300 for two",
//                       "cuisines": [
//                         "Pizzas"
//                       ],
//                       "avgRating": 4,
//                       "parentId": "60277",
//                       "avgRatingString": "4.0",
//                       "totalRatingsString": "100+",
//                       "sla": {
//                         "deliveryTime": 36,
//                         "lastMileTravel": 6,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "35-40 mins",
//                         "lastMileTravelString": "6.0 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2024-02-08 07:30:00",
//                         "opened": true
//                       },
//                       "badges": {
                        
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
                            
//                           },
//                           "textBased": {
                            
//                           },
//                           "textExtendedBadges": {
                            
//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "50% OFF",
//                         "subHeader": "UPTO ₹100"
//                       },
//                       "orderabilityCommunication": {
//                         "title": {
                          
//                         },
//                         "subTitle": {
                          
//                         },
//                         "message": {
                          
//                         },
//                         "customIcon": {
                          
//                         }
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                           "lottie": {
                            
//                           },
//                           "video": {
                            
//                           }
//                         }
//                       },
//                       "reviewsSummary": {
                        
//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {
                        
//                       }
//                     },
//                     "analytics": {
//                       "context": "seo-data-fcdb53ee-de83-4afd-b6f8-25af1f43aad5"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/restaurants/chicago-pizza-1st-phase-wakad-pune-650989",
//                       "text": "RESTAURANT_MENU",
//                       "type": "WEBLINK"
//                     },
//                     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                   },


//                   {
//                     "info": {
//                       "id": "765152",
//                       "name": "Pizza Hut",
//                       "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
//                       "locality": "Pimpri chinchwad",
//                       "areaName": "Punawale",
//                       "costForTwo": "₹350 for two",
//                       "cuisines": [
//                         "Pizzas"
//                       ],
//                       "avgRating": 4,
//                       "parentId": "721",
//                       "avgRatingString": "4.0",
//                       "totalRatingsString": "100+",
//                       "sla": {
//                         "deliveryTime": 30,
//                         "lastMileTravel": 3.7,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "25-30 mins",
//                         "lastMileTravelString": "3.7 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2024-02-08 00:00:00",
//                         "opened": true
//                       },
//                       "badges": {
                        
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
                            
//                           },
//                           "textBased": {
                            
//                           },
//                           "textExtendedBadges": {
                            
//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "50% OFF",
//                         "subHeader": "UPTO ₹100"
//                       },
//                       "orderabilityCommunication": {
//                         "title": {
                          
//                         },
//                         "subTitle": {
                          
//                         },
//                         "message": {
                          
//                         },
//                         "customIcon": {
                          
//                         }
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                           "lottie": {
                            
//                           },
//                           "video": {
                            
//                           }
//                         }
//                       },
//                       "reviewsSummary": {
                        
//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "isNewlyOnboarded": true,
//                       "restaurantOfferPresentationInfo": {
                        
//                       }
//                     },
//                     "analytics": {
//                       "context": "seo-data-fcdb53ee-de83-4afd-b6f8-25af1f43aad5"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/restaurants/pizza-hut-pimpri-chinchwad-punawale-pune-765152",
//                       "text": "RESTAURANT_MENU",
//                       "type": "WEBLINK"
//                     },
//                     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                   },


//                   {
//                     "info": {
//                       "id": "36014",
//                       "name": "Subway",
//                       "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
//                       "locality": "KAILASH HOTEL",
//                       "areaName": "Tathawade",
//                       "costForTwo": "₹350 for two",
//                       "cuisines": [
//                         "Healthy Food",
//                         "Salads",
//                         "Snacks",
//                         "Desserts",
//                         "Beverages"
//                       ],
//                       "avgRating": 3.9,
//                       "parentId": "2",
//                       "avgRatingString": "3.9",
//                       "totalRatingsString": "10K+",
//                       "sla": {
//                         "deliveryTime": 36,
//                         "lastMileTravel": 4,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "35-40 mins",
//                         "lastMileTravelString": "4.0 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2024-02-07 23:59:00",
//                         "opened": true
//                       },
//                       "badges": {
                        
//                       },
//                       "isOpen": true,
//                       "aggregatedDiscountInfoV2": {
                        
//                       },
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
                            
//                           },
//                           "textBased": {
                            
//                           },
//                           "textExtendedBadges": {
                            
//                           }
//                         }
//                       },
//                       "orderabilityCommunication": {
//                         "title": {
                          
//                         },
//                         "subTitle": {
                          
//                         },
//                         "message": {
                          
//                         },
//                         "customIcon": {
                          
//                         }
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                           "lottie": {
                            
//                           },
//                           "video": {
                            
//                           }
//                         }
//                       },
//                       "reviewsSummary": {
                        
//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {
                        
//                       }
//                     },
//                     "analytics": {
//                       "context": "seo-data-fcdb53ee-de83-4afd-b6f8-25af1f43aad5"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/restaurants/subway-kailash-hotel-tathawade-pune-36014",
//                       "text": "RESTAURANT_MENU",
//                       "type": "WEBLINK"
//                     },
//                     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                   }
// ];
    

const AppLayout = () => {
    return (
        <div>
     < Header />   
     < Body />
        </div>
    
    )};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< AppLayout />);
