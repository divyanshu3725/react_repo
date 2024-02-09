import React from "react";
import ReactDOM from "react-dom/client";
// const SampleComp = () => (
//     <div>
//         Hi there! 👋
//     </div>
// )
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(<SampleComp/>);

// BEFORE MAKING A PROJECT, PLAN

// OUR MAP:
// header
// - logo
// - nav items
// body
// - search bar
// - card container
// footer
// - company
// - contac us
// - legal
// - we deliver to

// IMAGE GRID CARDS ARRAY
let imageGridCards = [
    {
        "id": "749879",
        "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
            "text": "Chole Bhature",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for chhole bhatoore",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
        "frequencyCapping": {

        }
    },
    {
        "id": "750203",
        "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
            "text": "Paratha",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for paratha",
            "altTextCta": "open"
        },
        "entityId": "80476",
        "frequencyCapping": {

        }
    },
    {
        "id": "750132",
        "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
            "text": "Dosa",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for dosa",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
        "frequencyCapping": {

        }
    },
    {
        "id": "750644",
        "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
            "text": "Idli",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for idly",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
        "frequencyCapping": {

        }
    },
    {
        "id": "750562",
        "imageId": "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80427?collection_id=80427&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
            "text": "Vada",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for vada",
            "altTextCta": "open"
        },
        "entityId": "80427",
        "frequencyCapping": {

        }
    },
    {
        "id": "750544",
        "imageId": "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Upma.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80412?collection_id=80412&tags=layout_BAU_Contextual%2Cupma&type=rcv2",
            "text": "Upma",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for upma",
            "altTextCta": "open"
        },
        "entityId": "80412",
        "frequencyCapping": {

        }
    },
    {
        "id": "749761",
        "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
            "text": "Khichdi",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for khicdhi",
            "altTextCta": "open"
        },
        "entityId": "80456",
        "frequencyCapping": {

        }
    },
    {
        "id": "750592",
        "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83649?collection_id=83649&searchQuery=biryani&tags=layout_CCS_Biryani&type=rcv2",
            "text": "Biryani",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for biryani",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&searchQuery=biryani",
        "frequencyCapping": {

        }
    },
    {
        "id": "750223",
        "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
            "text": "Rolls",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for roll",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
        "frequencyCapping": {

        }
    },
    {
        "id": "750207",
        "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
            "text": "Pasta",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for pasta",
            "altTextCta": "open"
        },
        "entityId": "80480",
        "frequencyCapping": {

        }
    },
    {
        "id": "762797",
        "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
            "text": "Burgers",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for burger",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
        "frequencyCapping": {

        }
    },
    {
        "id": "750261",
        "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Rasmalai.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80391?collection_id=80391&tags=layout_BAU_Contextual%2Crasmalai&type=rcv2",
            "text": "Rasmalai",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for rasmalai",
            "altTextCta": "open"
        },
        "entityId": "80391",
        "frequencyCapping": {

        }
    },
    {
        "id": "749874",
        "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
            "text": "Cakes",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for cakes",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
        "frequencyCapping": {

        }
    },
    {
        "id": "750572",
        "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
            "text": "Pure Veg",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for veg",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
        "frequencyCapping": {

        }
    },
    {
        "id": "750237",
        "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80378?collection_id=80378&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
            "text": "Poori",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for poori",
            "altTextCta": "open"
        },
        "entityId": "80378",
        "frequencyCapping": {

        }
    },
    {
        "id": "750217",
        "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
            "text": "Pav Bhaji",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for pav bhaji",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
        "frequencyCapping": {

        }
    },
    {
        "id": "750078",
        "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83660?collection_id=83660&tags=layout_CCS_Coffee&type=rcv2",
            "text": "Coffee",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for coffee",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83660&tags=layout_CCS_Coffee",
        "frequencyCapping": {

        }
    },
    {
        "id": "749763",
        "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Lassi.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80459?collection_id=80459&tags=layout_BAU_Contextual%2Classi&type=rcv2",
            "text": "Lassi",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for lassi",
            "altTextCta": "open"
        },
        "entityId": "80459",
        "frequencyCapping": {

        }
    },
    {
        "id": "750253",
        "imageId": "rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
        "action": {
            "link": "https://www.swiggy.com/collections/80407?collection_id=80407&tags=layout_CCS_Tea&type=rcv2",
            "text": "Tea",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for tea",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80407&tags=layout_CCS_Tea",
        "frequencyCapping": {

        }
    },
    {
        "id": "750259",
        "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rasgulla.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80389?collection_id=80389&tags=layout_BAU_Contextual%2Crasgulla&type=rcv2",
            "text": "Rasgulla",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for rasgulla",
            "altTextCta": "open"
        },
        "entityId": "80389",
        "frequencyCapping": {

        }
    }
];

// RESTAURENT ARRAY 1
let restaurantsArray1 = [
    {
        "info": {
            "id": "93855",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Rama Magneto Mall",
            "areaName": "Tifra",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.2,
            "parentId": "721",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-09 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-rama-magneto-mall-tifra-bilaspur-93855",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "505259",
            "name": "McDonald's",
            "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
            "locality": "Rama Magneto Mall",
            "areaName": "Talapara",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "630",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-09 00:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹199"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-rama-magneto-mall-talapara-bilaspur-505259",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "95885",
            "name": "Nitya's Zaika",
            "cloudinaryImageId": "wi2eyijrcsfpddtgri58",
            "locality": "Tilak Nagar",
            "areaName": "Aayan Chamber",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Biryani",
                "Snacks",
                "Chinese"
            ],
            "avgRating": 4,
            "parentId": "149496",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-08 23:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/nityas-zaika-tilak-nagar-aayan-chamber-bilaspur-95885",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "482859",
            "name": "Neelkanth Restaurant",
            "cloudinaryImageId": "lactd4t1une90rdldo5n",
            "locality": "Pratap Talkies Chowk",
            "areaName": "Gole Bazaar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Indian",
                "South Indian",
                "North Indian",
                "Chinese"
            ],
            "avgRating": 4,
            "veg": true,
            "parentId": "145363",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-09 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/neelkanth-restaurant-pratap-talkies-chowk-gole-bazaar-bilaspur-482859",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "118869",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "Shrikant Verma Marg",
            "areaName": "Tifra",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.2,
            "parentId": "547",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-09 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹179"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-shrikant-verma-marg-tifra-bilaspur-118869",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "92957",
            "name": "Madrasi Treat",
            "cloudinaryImageId": "eqgp4aegdkwn1lsbfhxc",
            "locality": "Agrasen Chowk",
            "areaName": "Tikrapara",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "Tandoor",
                "North Indian",
                "Chinese",
                "Seafood",
                "Mughlai"
            ],
            "avgRating": 4.2,
            "parentId": "230840",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-08 23:15:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/madrasi-treat-agrasen-chowk-tikrapara-bilaspur-92957",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "470500",
            "name": "Oven Story Pizza - Standout Toppings",
            "cloudinaryImageId": "b39e4312ae2e9f65c3b58faaed83f488",
            "locality": "A Block",
            "areaName": "Masanganj",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "3534",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-08 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹110"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-a-block-masanganj-bilaspur-470500",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "420419",
            "name": "Balle Balle The Family Dhaba",
            "cloudinaryImageId": "viv7db7gidcxukzzofur",
            "locality": "Shiv Talkies Road",
            "areaName": "Shiv Talkies Chowk",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Chinese",
                "Tandoor"
            ],
            "avgRating": 4.1,
            "parentId": "234041",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-09 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/balle-balle-the-family-dhaba-shiv-talkies-road-shiv-talkies-chowk-bilaspur-420419",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "92936",
            "name": "Cafe Yuva",
            "cloudinaryImageId": "flkrqw93czpwolppunn4",
            "locality": "Sindhi Colony",
            "areaName": "Narmada Nagar",
            "costForTwo": "₹179 for two",
            "cuisines": [
                "Chinese",
                "Pastas",
                "Beverages"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "54503",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-09 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/cafe-yuva-sindhi-colony-narmada-nagar-bilaspur-92936",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "109510",
            "name": "Sanjha Chulha",
            "cloudinaryImageId": "u5nipdo2njvu4paifgac",
            "locality": "Bhartiya Nagar",
            "areaName": "Agyay Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Chinese",
                "Thalis"
            ],
            "avgRating": 4,
            "parentId": "1356",
            "avgRatingString": "4.0",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-08 23:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sanjha-chulha-bhartiya-nagar-agyay-nagar-bilaspur-109510",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "92941",
            "name": "Madrasi Restaurant",
            "cloudinaryImageId": "btq5y0fxh5nkgod86bd6",
            "locality": "Old High Court Road",
            "areaName": "Tikrapara",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "Tandoor",
                "North Indian",
                "Mughlai",
                "Seafood"
            ],
            "avgRating": 4.2,
            "parentId": "128964",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-08 23:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/madrasi-restaurant-old-high-court-road-tikrapara-bilaspur-92941",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "724177",
            "name": "Burger Singh (Big Punjabi Burgers)",
            "cloudinaryImageId": "972a37599772cdc7df93a0855ad87591",
            "locality": "Bilaspur",
            "areaName": "Telipara",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Burgers",
                "Snacks",
                "Desserts",
                "Beverages",
                "Fast Food",
                "American",
                "Indian",
                "Biryani"
            ],
            "avgRating": 4.3,
            "parentId": "375065",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-09 02:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-singh-big-punjabi-burgers-telipara-bilaspur-724177",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "470498",
            "name": "Faasos - Wraps, Rolls & Shawarma",
            "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
            "locality": "Rao Trade Center",
            "areaName": "Masanganj",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Kebabs",
                "Fast Food",
                "Snacks",
                "American",
                "Healthy Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.5,
            "parentId": "21809",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-08 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹129"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-rao-trade-center-masanganj-bilaspur-470498",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "470506",
            "name": "The Biryani Life",
            "cloudinaryImageId": "kcemrov7wreoclpsof1g",
            "locality": "Rao Trade Center",
            "areaName": "Masanganj",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Biryani",
                "Mughlai",
                "Lucknowi",
                "Hyderabadi",
                "Kebabs",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "8496",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-08 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹110"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-biryani-life-rao-trade-center-masanganj-bilaspur-470506",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "629415",
            "name": "Dum Safar Biryani",
            "cloudinaryImageId": "ggexforny5jlhaifbh8l",
            "locality": "Masanganj",
            "areaName": "Ambedkar Nagar",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Biryani",
                "Kebabs",
                "Tandoor",
                "Indian",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "351013",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-08 23:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dum-safar-biryani-masanganj-ambedkar-nagar-bilaspur-629415",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "470504",
            "name": "LunchBox - Meals and Thalis",
            "cloudinaryImageId": "b1kdyrzn77d4tnanmcaa",
            "locality": "Rao Trade Center",
            "areaName": "Masanganj",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Punjabi",
                "Healthy Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "4925",
            "avgRatingString": "4.4",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-08 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹159"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-rao-trade-center-masanganj-bilaspur-470504",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "95708",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "apxatz033mo4jsex2qzs",
            "locality": "Rama Magneto Mall",
            "areaName": "Tifra",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "2456",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 30,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-09 00:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-rama-magneto-mall-tifra-bilaspur-95708",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "92921",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "Rajendra Nagar Chowk",
            "areaName": "Narmada Nagar",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Beverages"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "5588",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-09 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-rajendra-nagar-chowk-narmada-nagar-bilaspur-92921",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "470503",
            "name": "Sweet Truth",
            "cloudinaryImageId": "78408969d316991befba0a6eca303e1c",
            "locality": "Rao Trade Center",
            "areaName": "Masanganj",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Snacks",
                "Bakery",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.5,
            "parentId": "4444",
            "avgRatingString": "4.5",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-08 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹110"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sweet-truth-rao-trade-center-masanganj-bilaspur-470503",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "470499",
            "name": "Behrouz Biryani",
            "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
            "locality": "Rao Trade Center",
            "areaName": "Masanganj",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Kebabs",
                "Mughlai",
                "Beverages",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "1803",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-08 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/behrouz-biryani-rao-trade-center-masanganj-bilaspur-470499",
            "type": "WEBLINK"
        }
    }
];

// USER OBJECT
const user = {
    firstNaam: "Divyanshu",
    city: "Bilaspur",
    state: "Chhattisgarh",
    pincode: 495001,
    country: "India",
};

// NAMEACCESSOR FUNCTION
function fullName(obj) {
    return `${obj.firstNaam}`
};

// ADDRESSACCESSOR FUNCTION
function fullAddress(obj) {
    return `${obj.city}, ${obj.state}, ${obj.pincode}, ${obj.country}`;
};

// SECTION1QUESTION COMPONENT
const Section1Question = () => {
    return (
        <div className="section1Question text-[23px] font-bold border-2 border-solid border-white">
            {fullName(user)}, what's on your mind?
        </div>
    )
};

const Section2Question = () => {
    return (
        <div className="section1Question text-[25px] font-bold border-2 border-solid border-white">
            Top restaurant chains in {user.city}
        </div>
    )
};

// SECTION1NAVIGATION COMPONENT
const Section1Navigation = () => {
    return (
        <div className="section1navigation w-[80px] flex justify-between border-2 mx-[40px] border-solid px-[10px] border-white">
            <span id="slideLeft1" className="leftArrow bg-slate-300" style={{ color: '#808080', backgroundColor: 'white', textAlign: 'center' }}>
                <i className="fa-solid fa-arrow-left" style={{ position: 'relative', top: '5px' }}></i>
            </span>
            <span id="slideRight1" className="rightArrow bg-slate-300" style={{ color: '#808080', backgroundColor: 'white', textAlign: 'center' }}>
                <i className="fa-solid fa-arrow-right" style={{ position: 'relative', top: '5px' }}></i>
            </span>
        </div>
    )
}

// SECTION2NAVIGATION COMPONENT
const Section2Navigation = () => {
    return (
        <div className="section1navigation w-[80px] flex justify-between border-2 mx-[40px] border-solid px-[10px] border-white">
            <span id="slideLeft2" className="leftArrow bg-slate-300" style={{ color: '#808080', backgroundColor: 'white', textAlign: 'center' }}>
                <i className="fa-solid fa-arrow-left" style={{ position: 'relative', top: '5px' }}></i>
            </span>
            <span id="slideRight2" className="rightArrow bg-slate-300" style={{ color: '#808080', backgroundColor: 'white', textAlign: 'center' }}>
                <i className="fa-solid fa-arrow-right" style={{ position: 'relative', top: '5px' }}></i>
            </span>
        </div>
    )
}

// FOOD IMAGES
const imageCardURLInitialPart = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/';
const ImageCard0 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[0].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard1 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[1].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard2 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[2].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard3 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[3].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard4 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[4].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard5 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[5].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard6 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[6].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard7 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[7].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard8 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[8].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard9 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[9].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard10 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[10].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard11 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[11].imageId}`} width="148px" height="185px"></img>
        </div>
    )
};
const ImageCard12 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[12].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard13 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[13].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard14 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[14].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard15 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[15].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard16 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[16].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard17 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[17].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard18 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[18].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};
const ImageCard19 = () => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${imageGridCards[19].imageId}`} width="148px" height="185px"></img>
        </div>
    );
};

// TOP RESTAURANTS IN BILASPUR LIST
const topRestaurantImageURLInitialPart = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
const topRestaurantsSVGdValue = "M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z";
function showHeaders(obj) {
    if (obj.info.aggregatedDiscountInfoV3) {
        return `${obj.info.aggregatedDiscountInfoV3.header} ${obj.info.aggregatedDiscountInfoV3.subHeader}`;
    }
    else {
        return '';
    };
};
function showRating(obj) {
    if (obj.info.avgRating > 4) {
        return obj.info.avgRating
    }
    else {
        return `${obj.info.avgRating}.0`
    };
};
// NORMAL PROPS (EVERY ARGUMENT WE PASSES WAS WRAPPED INSIDE THE PROPS OBJECT, SO WE HAD TO USE THEM IN THIS MANNER PROPS.ARGUMENT)
const TopRestaurantType1 = (props) => {
    console.log(props);
    return (
        <div className="pizzaHut inline-block box-border inline-block relative border-2 border-solid border-white mr-[20px] w-[273px]">
            <img className="relative" style={{ width: '273px', height: '182px', cursor: 'pointer', objectFit: 'cover', borderRadius: '20px' }} src={`${topRestaurantImageURLInitialPart}${props.cloudinaryImageId}`} alt="Pizza Hut"></img>
            <div className="w-[273px] rounded-[20px] color h-[73px] flex items-end absolute bottom-[127px]" style={{ backgroundImage: 'linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)' }}>
                <div className="text-[22px] font-[800] tracking-[-0.5px] text-white px-[12px] py-[6px]">{props.header} {props.subHeader}</div>
            </div>
            <div className="p-[14px]">
                <div className="font-bold text-[18px]"><span className="overflow-hidden text-ellipsis block">{props.name}</span></div>
                <div>
                    <svg className="inline-block mr-[5px]" width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d={topRestaurantsSVGdValue} fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>
                    <span className="mr-[8px] font-bold">{props.rating}</span>
                    <span className="mr-[5px] font-bold">{props.edt}</span>
                </div>
                <div><span className="overflow-hidden text-ellipsis block">{props.cuisines}</span></div>
                <div>{props.areaName}</div>
            </div>
        </div>
    )
};
// DESTRUCTURED PROPS (EVERY ARGUMENT WE PASSED WAS WRAPPED INSIDE THE PROPS OBJECT, WE HAD TO ACCESS THOSE VALUES LIKE PROPS.ARGUMENT, SO WE DESTRUCTURED THE PROPS OBJECT SO WE DON'T HAVE TO USE THE PROPS KEYWORD AGAIN AND AGAIN)
const TopRestaurantType2 = (props) => {
    const {cloudinaryImageId,header,subHeader,name,rating,edt,cuisines,areaName} = {...props}
    return (
        <div className="pizzaHut inline-block box-border inline-block relative border-2 border-solid border-white mr-[20px] w-[273px]">
            <img className="relative" style={{ width: '273px', height: '182px', cursor: 'pointer', objectFit: 'cover', borderRadius: '20px' }} src={`${topRestaurantImageURLInitialPart}${cloudinaryImageId}`} alt="Pizza Hut"></img>
            <div className="w-[273px] rounded-[20px] color h-[73px] flex items-end absolute bottom-[127px]" style={{ backgroundImage: 'linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)' }}>
                <div className="text-[22px] font-[800] tracking-[-0.5px] text-white px-[12px] py-[6px]">{header}{subHeader}</div>
            </div>
            <div className="p-[14px]">
                <div className="font-bold text-[18px]"><span className="overflow-hidden text-ellipsis block">{name}</span></div>
                <div>
                    <svg className="inline-block mr-[5px]" width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d={topRestaurantsSVGdValue} fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>
                    <span className="mr-[8px] font-bold">{rating}</span>
                    <span className="mr-[5px] font-bold">{edt}</span>
                </div>
                <div><span className="overflow-hidden text-ellipsis block">{cuisines}</span></div>
                <div>{areaName}</div>
            </div>
        </div>
    )
};
// DESTRUCTURING PROPS ON THE FLY
const TopRestaurantType3 = ({cloudinaryImageId,header,subHeader,name,rating,edt,cuisines,areaName}) => {
    return (
        <div className="pizzaHut inline-block box-border inline-block relative border-2 border-solid border-white mr-[20px] w-[273px]">
            <img className="relative" style={{ width: '273px', height: '182px', cursor: 'pointer', objectFit: 'cover', borderRadius: '20px' }} src={`${topRestaurantImageURLInitialPart}${cloudinaryImageId}`} alt="Pizza Hut"></img>
            <div className="w-[273px] rounded-[20px] color h-[73px] flex items-end absolute bottom-[127px]" style={{ backgroundImage: 'linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)' }}>
                <div className="text-[22px] font-[800] tracking-[-0.5px] text-white px-[12px] py-[6px]">{header}{subHeader}</div>
            </div>
            <div className="p-[14px]">
                <div className="font-bold text-[18px]"><span className="overflow-hidden text-ellipsis block">{name}</span></div>
                <div>
                    <svg className="inline-block mr-[5px]" width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d={topRestaurantsSVGdValue} fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>
                    <span className="mr-[8px] font-bold">{rating}</span>
                    <span className="mr-[5px] font-bold">{edt}</span>
                </div>
                <div><span className="overflow-hidden text-ellipsis block">{cuisines}</span></div>
                <div>{areaName}</div>
            </div>
        </div>
    )
};
// RECIEVING THE WHOLE RESTAURANT DATA OBJECT AS ARGUMENT
const TopRestaurantType4 = ({res}) => {
    return (
        <div className="pizzaHut inline-block box-border inline-block relative border-2 border-solid border-white mr-[20px] w-[273px]">
            <img className="relative" style={{ width: '273px', height: '182px', cursor: 'pointer', objectFit: 'cover', borderRadius: '20px' }} src={`${topRestaurantImageURLInitialPart}${res.info.cloudinaryImageId}`} alt="Pizza Hut"></img>
            <div className="w-[273px] rounded-[20px] color h-[73px] flex items-end absolute bottom-[127px]" style={{ backgroundImage: 'linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)' }}>
                <div className="text-[22px] font-[800] tracking-[-0.5px] text-white px-[12px] py-[6px]">{showHeaders(res)}</div>
            </div>
            <div className="p-[14px]">
                <div className="font-bold text-[18px]"><span className="overflow-hidden text-ellipsis block">{res.info.name}</span></div>
                <div>
                    <svg className="inline-block mr-[5px]" width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d={topRestaurantsSVGdValue} fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>
                    <span className="mr-[8px] font-bold">{res.info.avgRating}</span>
                    <span className="mr-[5px] font-bold">{res.info.sla.slaString}</span>
                </div>
                <div><span className="overflow-hidden text-ellipsis block">{res.info.cuisines.join(', ')}</span></div>
                <div>{res.info.areaName}</div>
            </div>
        </div>
    )
};
// DESTRUCTURING THE WHOSE RESTAURANT OBJECT THAT WE RECIEVED AS AN ARGUMENT
const TopRestaurantType5 = ({res}) => {
    const {cloudinaryImageId,name,avgRating,sla,cuisines,areaName} = {...res.info}
    return (
        <div className="pizzaHut inline-block box-border inline-block relative border-2 border-solid border-white mr-[20px] w-[273px]">
            <img className="relative" style={{ width: '273px', height: '182px', cursor: 'pointer', objectFit: 'cover', borderRadius: '20px' }} src={`${topRestaurantImageURLInitialPart}${cloudinaryImageId}`} alt="Pizza Hut"></img>
            <div className="w-[273px] rounded-[20px] color h-[73px] flex items-end absolute bottom-[127px]" style={{ backgroundImage: 'linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)' }}>
                <div className="text-[22px] font-[800] tracking-[-0.5px] text-white px-[12px] py-[6px]">{showHeaders(res)}</div>
            </div>
            <div className="p-[14px]">
                <div className="font-bold text-[18px]"><span className="overflow-hidden text-ellipsis block">{name}</span></div>
                <div>
                    <svg className="inline-block mr-[5px]" width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d={topRestaurantsSVGdValue} fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>
                    <span className="mr-[8px] font-bold">{avgRating}</span>
                    <span className="mr-[5px] font-bold">{  sla.slaString}</span>
                </div>
                <div><span className="overflow-hidden text-ellipsis block">{cuisines.join(', ')}</span></div>
                <div>{areaName}</div>
            </div>
        </div>
    )
};

// SECTION1IMAGE BOX COMPONENT
const Section1ImageBox = () => {
    return (
        <div id="section1ImageBox" className="py-2 border-2 border-solid border-white overflow-auto whitespace-nowrap">
            <ImageCard0 />
            <ImageCard1 />
            <ImageCard2 />
            <ImageCard3 />
            <ImageCard4 />
            <ImageCard5 />
            <ImageCard6 />
            <ImageCard7 />
            <ImageCard8 />
            <ImageCard9 />
            <ImageCard10 />
            <ImageCard11 />
            <ImageCard12 />
            <ImageCard13 />
            <ImageCard14 />
            <ImageCard15 />
            <ImageCard16 />
            <ImageCard17 />
            <ImageCard18 />
            <ImageCard19 />
        </div>
    )
};

console.log(restaurantsArray1.length)

// SECTION2IMAGE BOX COMPONENT
const Section2ImageBox = () => {
    return (
        <div id="section2ImageBox" className="py-2 border-2 border-solid border-white overflow-auto whitespace-nowrap h-[380px]">
            {/* <TopRestaurantType1 
                cloudinaryImageId="2b4f62d606d1b2bfba9ba9e5386fabb7"
                header="50% OFF"
                subHeader="UPTO $100"
                name="Pizza Hut"
                rating="4.2"
                edt="20-25mins"
                cuisines="Pizzas"
                areaName="Tifra"
            />
            <TopRestaurantType1 
                cloudinaryImageId="03501c33ecb3a3105124441e541e6fe4"
                header="ITEMS"
                subHeader="AT $199"
                name="McDonald's"
                rating="4.4"
                edt="15-20mins"
                cuisines="Burgers, Beverages, Cafe, Desserts"
                areaName="Talapara"
            /> */}
            {/* <TopRestaurantType2
                cloudinaryImageId="2b4f62d606d1b2bfba9ba9e5386fabb7"
                header="50% OFF"
                subHeader="UPTO $100"
                name="Pizza Hut"
                rating="4.2"
                edt="20-25mins"
                cuisines="Pizzas"
                areaName="Tifra"
            />
            <TopRestaurantType2 
                cloudinaryImageId="03501c33ecb3a3105124441e541e6fe4"
                header="ITEMS"
                subHeader="AT $199"
                name="McDonald's"
                rating="4.4"
                edt="15-20mins"
                cuisines="Burgers, Beverages, Cafe, Desserts"
                areaName="Talapara"
            /> */}
            {/* <TopRestaurantType3
                cloudinaryImageId="2b4f62d606d1b2bfba9ba9e5386fabb7"
                header="50% OFF"
                subHeader="UPTO $100"
                name="Pizza Hut"
                rating="4.2"
                edt="20-25mins"
                cuisines="Pizzas"
                areaName="Tifra"
            />
            <TopRestaurantType3 
                cloudinaryImageId="03501c33ecb3a3105124441e541e6fe4"
                header="ITEMS"
                subHeader="AT $199"
                name="McDonald's"
                rating="4.4"
                edt="15-20mins"
                cuisines="Burgers, Beverages, Cafe, Desserts"
                areaName="Talapara"
            /> */}
            {/* <TopRestaurantType4 res={restaurantsArray1[0]} />
            <TopRestaurantType4 res={restaurantsArray1[1]} /> */}
            {/* <TopRestaurantType5 res={restaurantsArray1[0]} />
            <TopRestaurantType5 res={restaurantsArray1[1]} />
            <TopRestaurantType5 res={restaurantsArray1[2]} /> */}
            {restaurantsArray1.map(restaurant => <TopRestaurantType5 res={restaurant}/>)}
        </div>
    )
};

// SECTION1HEAD COMPONENT
const Section1Head = () => {
    return (
        <div className="section1head flex justify-between">
            <Section1Question />
            <Section1Navigation />
        </div>
    )
}

// SECTION2HEAD COMPONENT
const Section2Head = () => {
    return (
        <div className="section1head flex justify-between">
            <Section2Question />
            <Section2Navigation />
        </div>
    )
}

// SECTION1 COMPONENT
const Section1 = () => {
    return (
        <div className="section1 border-2 border-white border-solid mx-[200px] pb-[40px] mb-[40px]">
            <Section1Head />
            <Section1ImageBox />
        </div>
    )
}

// SECTION2 COMPONENT
const Section2 = () => {
    return (
        <div className="section2 border-2 border-white border-solid mx-[200px]">
            <Section2Head />
            <Section2ImageBox />
        </div>
    )
}

const NavigationBar = () => {
    return (
        <div className="navbar border-2 border-white border-solid p-2 flex items-center justify-around w-[650px]">
            <div className="search">
                <svg className="mr-[10px] relative bottom-[2px] inline-block m-[2px]" viewBox="5 -1 12 25" height="17" width="17" fill="#686b78"><path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path></svg>
                <span className="font-semibold">Search</span>
            </div>
            <div className="offers">
                <svg className="mr-[10px] relative bottom-[2px] inline-block m-[2px]" viewBox="0 0 32 32" height="19" width="19" fill="#686b78"><path d="M14.2 2.864l-1.899 1.38c-0.612 0.447-1.35 0.687-2.11 0.687h-2.352c-0.386 0-0.727 0.248-0.845 0.613l-0.728 2.238c-0.235 0.721-0.691 1.348-1.302 1.79l-1.905 1.385c-0.311 0.226-0.442 0.626-0.323 0.991l0.728 2.241c0.232 0.719 0.232 1.492-0.001 2.211l-0.727 2.237c-0.119 0.366 0.011 0.767 0.323 0.994l1.906 1.384c0.61 0.445 1.064 1.070 1.3 1.79l0.728 2.24c0.118 0.365 0.459 0.613 0.844 0.613h2.352c0.759 0 1.497 0.24 2.107 0.685l1.9 1.381c0.313 0.227 0.736 0.227 1.048 0.001l1.9-1.38c0.613-0.447 1.349-0.687 2.11-0.687h2.352c0.384 0 0.726-0.248 0.845-0.615l0.727-2.235c0.233-0.719 0.688-1.346 1.302-1.794l1.904-1.383c0.311-0.226 0.442-0.627 0.323-0.993l-0.728-2.239c-0.232-0.718-0.232-1.49 0.001-2.213l0.727-2.238c0.119-0.364-0.012-0.765-0.324-0.992l-1.901-1.383c-0.614-0.445-1.070-1.074-1.302-1.793l-0.727-2.236c-0.119-0.366-0.461-0.614-0.845-0.614h-2.352c-0.76 0-1.497-0.239-2.107-0.685l-1.903-1.382c-0.313-0.227-0.736-0.226-1.047-0.001zM16.829 0.683l1.907 1.385c0.151 0.11 0.331 0.168 0.521 0.168h2.352c1.551 0 2.927 1 3.408 2.475l0.728 2.241c0.057 0.177 0.169 0.332 0.321 0.442l1.902 1.383c1.258 0.912 1.784 2.531 1.304 4.006l-0.726 2.234c-0.058 0.182-0.058 0.375-0.001 0.552l0.727 2.237c0.48 1.477-0.046 3.096-1.303 4.007l-1.9 1.38c-0.153 0.112-0.266 0.268-0.324 0.447l-0.727 2.237c-0.48 1.477-1.856 2.477-3.408 2.477h-2.352c-0.19 0-0.37 0.058-0.523 0.17l-1.904 1.383c-1.256 0.911-2.956 0.911-4.213-0.001l-1.903-1.384c-0.15-0.11-0.332-0.168-0.521-0.168h-2.352c-1.554 0-2.931-1.001-3.408-2.477l-0.726-2.234c-0.059-0.18-0.173-0.338-0.324-0.448l-1.902-1.381c-1.258-0.912-1.784-2.53-1.304-4.008l0.727-2.235c0.058-0.179 0.058-0.373 0.001-0.551l-0.727-2.236c-0.481-1.476 0.046-3.095 1.302-4.006l1.905-1.385c0.151-0.11 0.264-0.265 0.323-0.444l0.727-2.235c0.478-1.476 1.855-2.477 3.408-2.477h2.352c0.189 0 0.371-0.059 0.523-0.17l1.902-1.383c1.256-0.911 2.956-0.911 4.212 0zM18.967 23.002c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM18.967 20.307c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM10.545 14.549c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM10.545 11.855c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM17.78 7.882l2.331 1.352-7.591 13.090-2.331-1.352 7.591-13.090z"></path></svg>
                <span className="font-semibold">Offers</span>
            </div>
            <div className="help">
                <svg className="mr-[10px] relative bottom-[2px] inline-block m-[2px]" viewBox="6 -1 12 25" height="19" width="19" fill="#686b78"><path d="M21.966903,13.2244898 C22.0156989,12.8231523 22.0408163,12.4145094 22.0408163,12 C22.0408163,11.8357822 22.036874,11.6724851 22.029079,11.5101984 L17.8574333,11.5102041 C17.8707569,11.6717062 17.877551,11.8350597 17.877551,12 C17.877551,12.4199029 17.8335181,12.8295214 17.749818,13.2244898 L21.966903,13.2244898 Z M21.5255943,15.1836735 L16.9414724,15.1836735 C15.8950289,16.8045422 14.0728218,17.877551 12,17.877551 C9.92717823,17.877551 8.1049711,16.8045422 7.05852762,15.1836735 L2.47440565,15.1836735 C3.80564362,19.168549 7.56739481,22.0408163 12,22.0408163 C16.4326052,22.0408163 20.1943564,19.168549 21.5255943,15.1836735 Z M21.7400381,9.55102041 C20.6468384,5.18931674 16.7006382,1.95918367 12,1.95918367 C7.2993618,1.95918367 3.3531616,5.18931674 2.25996187,9.55102041 L6.6553883,9.55102041 C7.58404845,7.5276442 9.62792376,6.12244898 12,6.12244898 C14.3720762,6.12244898 16.4159515,7.5276442 17.3446117,9.55102041 L21.7400381,9.55102041 Z M2.03309705,13.2244898 L6.25018203,13.2244898 C6.16648186,12.8295214 6.12244898,12.4199029 6.12244898,12 C6.12244898,11.8350597 6.1292431,11.6717062 6.14256675,11.5102041 L1.97092075,11.5102041 C1.96312595,11.6724851 1.95918367,11.8357822 1.95918367,12 C1.95918367,12.4145094 1.98430112,12.8231523 2.03309705,13.2244898 Z M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,15.9183673 C14.1640545,15.9183673 15.9183673,14.1640545 15.9183673,12 C15.9183673,9.83594547 14.1640545,8.08163265 12,8.08163265 C9.83594547,8.08163265 8.08163265,9.83594547 8.08163265,12 C8.08163265,14.1640545 9.83594547,15.9183673 12,15.9183673 Z"></path></svg>
                <span className="font-semibold">Help</span>
            </div>
            <div className="userName">
                <svg className="mr-[10px] relative bottom-[2px] inline-block m-[2px]" viewBox="6 0 12 24" height="19" width="18" fill="#686b78"><path d="M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z"></path></svg>
                <span className="font-semibold">{fullName(user)}</span>
            </div>
            <div className="cart">
                <i class="fa-solid fa-basket-shopping fa-lg" style={{ color: '#808080', position: 'relative', right: '6px', bottom: '1px' }}></i>
                <span className="font-semibold">Cart</span>
            </div>
        </div>
    )
};

const Address = () => {
    return (
        <div className="address border-2 border-white border-solid text-[14px] p-2 w-[450px]">
            <span className="other font-extrabold border-2 border-white decoration-2 underline-offset-4 decoration-solid underline decoration-black border-solid mx-[5px]">HOME</span>
            <span className="myAddress border-2 border-white border-solid mx-[5px]">{fullAddress(user)}</span> <i id="downArrow" class="fa-solid fa-chevron-down"></i>
        </div>
    )
}

// LOGO COMPONENT

const Logo = () => {
    return (
        <div className="logo border-2 border-white border-solid inline-block">
            <svg class="_8pSp-" viewBox="0 0 559 825" height="49" width="34" fill="#fc8019"><path fill-rule="evenodd" clip-rule="evenodd" d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z" fill="url(#paint0_linear_19447_66107)"></path><defs><linearGradient id="paint0_linear_19447_66107" x1="445.629" y1="63.8626" x2="160.773" y2="537.598" gradientUnits="userSpaceOnUse"><stop stop-color="#FF993A"></stop><stop offset="1" stop-color="#F15700"></stop></linearGradient></defs></svg>
        </div>
    )
}

// BODY COMPONENT
const Body = () => {
    return (
        <div className="body">
            <Section1 />
            <Section2 />
            {/* <Section3/> */}
        </div>
    )
};

// HEADER SHADOW STYLE OBJECT
const headerStyleObj = {
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
};

// HEADER COMPONENT
const Header = () => {
    return (
        <div className="header border-2 border-solid border-white mx-0 mb-2 flex items-center justify-between py-[10px] px-[150px]" style={headerStyleObj}>
            <Logo />
            <Address />
            <NavigationBar />
        </div>
    )
};

// MAIN COMPONENT (APPLAYOUT)
const AppLayout = () => {
    return (
        <div className="app border-white border-2 border-solid">
            <Header />
            <Body />
        </div>
    )
};

// TARGETING THE ROOTELEMENT
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// RENDER THE APPLAYOUT
rootElement.render(<AppLayout />);

setTimeout(() => {

    let right1 = document.getElementById('slideRight1');
    right1.onclick = function () {
        console.log('right slide clicked');
        let container1 = document.getElementById('section1ImageBox');
        sideScroll(container1, 'right', 10, 435, 5);
    };

    let left1 = document.getElementById('slideLeft1');
    left1.onclick = function () {
        console.log('left slide clicked');
        let container1 = document.getElementById('section1ImageBox');
        sideScroll(container1, 'left', 10, 435, 5);
    };
    let right2 = document.getElementById('slideRight2');
    right2.onclick = function () {
        console.log('right slide clicked');
        let container1 = document.getElementById('section2ImageBox');
        sideScroll(container1, 'right', 30, 540, 50);
    };

    let left2 = document.getElementById('slideLeft2');
    left2.onclick = function () {
        console.log('left slide clicked');
        let container1 = document.getElementById('section2ImageBox');
        sideScroll(container1, 'left', 30, 540, 50);
    };

    function sideScroll(element, direction, speed, distance, step) {
        scrollAmount = 0;
        let slideTimer = setInterval(function () {
            if (direction == 'left') {
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if (scrollAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    }
}, 1000);