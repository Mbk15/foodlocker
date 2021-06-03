const intialState = {
    isSideNavOpen: false,
    user:{
        isLoggedIn : false
    },
    baseUrl: "http://v2.foodlocker.com.ng/apiv1",
    products: [
        {
            "id": "65",
            "name": "1.5L Mamador Oil",
            "slug": "1-5l-mamador-oil",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/X9dyFPtPFnyqJ1MZeexSOvlfxO8s4lev.png&size=150",
            "description": "Oil extract from vegetables - extra refined",
            "category_id": "6",
            "shelf_life": "365",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2017-12-28 10:21:48",
            "updated_at": "2019-12-28 18:57:46",
            "active": "1",
            "is_vatable": "0",
            "absorb_vat": "0",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "1200",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                },
                {
                    "name": "Carton",
                    "price": "7000",
                    "b2b_price": "5700",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "425",
            "total_qty": "0",
            "min_inv_level": "4",
            "min_procurement": "6",
            "procurement_type": "1",
            "category_name": "Oil",
            "inventory_count": "1",
            "first_inventory_size": "Carton",
            "first_inventory_price": "7000.00",
            "display_image": "/public/product/X9dyFPtPFnyqJ1MZeexSOvlfxO8s4lev.png"
        },
        {
            "id": "141",
            "name": "10L King's Oil",
            "slug": "10l-king-s-oil",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/10l%20Kings%20Oil.png&size=150",
            "description": "Refined Palm Olein",
            "category_id": "6",
            "shelf_life": "365",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2018-01-26 19:04:53",
            "updated_at": "2019-12-31 21:35:02",
            "active": "1",
            "is_vatable": "0",
            "absorb_vat": "0",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "6500",
                    "b2b_price": "",
                    "unit_discount_percent": "0",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "266",
            "total_qty": "0",
            "min_inv_level": "2",
            "min_procurement": "5",
            "procurement_type": "1",
            "category_name": "Oil",
            "inventory_count": "2",
            "first_inventory_size": "Unit",
            "first_inventory_price": "6500.00",
            "display_image": "/public/product/10l Kings Oil.png"
        },
        {
            "id": "64",
            "name": "1L King's Oil",
            "slug": "1l-king-s-oil",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/kings%201l.png&size=150",
            "description": "Oil extract from vegetables",
            "category_id": "6",
            "shelf_life": "365",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2017-12-28 10:20:32",
            "updated_at": "2019-12-30 21:30:11",
            "active": "1",
            "is_vatable": "0",
            "absorb_vat": "0",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "850",
                    "b2b_price": "",
                    "unit_discount_percent": "0",
                    "unit_discount": 0
                },
                {
                    "name": "Carton",
                    "price": "9600",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "250",
            "total_qty": "0",
            "min_inv_level": "4",
            "min_procurement": "12",
            "procurement_type": "1",
            "category_name": "Oil",
            "inventory_count": "1",
            "first_inventory_size": "Carton",
            "first_inventory_price": "9600.00",
            "display_image": "/public/product/kings 1l.png"
        },
        {
            "id": "66",
            "name": "2.5L Mamador Oil",
            "slug": "2-5l-mamador-oil",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/P5CnJNamSbRDtEfz8nQFzVumDUmBNvOw.png&size=150",
            "description": "Oil extract from vegetables - extra refined",
            "category_id": "6",
            "shelf_life": "365",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2017-12-28 10:22:59",
            "updated_at": "2019-12-17 15:52:47",
            "active": "1",
            "is_vatable": "0",
            "absorb_vat": "0",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "2000",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                },
                {
                    "name": "Carton",
                    "price": "7800",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "213",
            "total_qty": "0",
            "min_inv_level": "1",
            "min_procurement": "4",
            "procurement_type": "1",
            "category_name": "Oil",
            "inventory_count": "1",
            "first_inventory_size": "Carton",
            "first_inventory_price": "7800.00",
            "display_image": "/public/product/P5CnJNamSbRDtEfz8nQFzVumDUmBNvOw.png"
        },
        {
            "id": "111",
            "name": "25L King's Oil",
            "slug": "25l-king-s-oil",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/GhjQnnKBjxtZyStXlphWFrHMm0sz94ny.png&size=150",
            "description": "Oil extract from vegetables",
            "category_id": "6",
            "shelf_life": "365",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2018-01-19 16:22:43",
            "updated_at": "2020-02-08 22:56:51",
            "active": "1",
            "is_vatable": "0",
            "absorb_vat": "0",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "14200",
                    "b2b_price": "13800",
                    "unit_discount_percent": "0",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "1",
            "views": "212",
            "total_qty": "0",
            "min_inv_level": "5",
            "min_procurement": "10",
            "procurement_type": "1",
            "category_name": "Oil",
            "inventory_count": "2",
            "first_inventory_size": "Unit",
            "first_inventory_price": "14200.00",
            "display_image": "/public/product/GhjQnnKBjxtZyStXlphWFrHMm0sz94ny.png"
        },
        {
            "id": "68",
            "name": "2L King's Oil",
            "slug": "2l-king-s-oil",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/k0sVMIclBaxnOTg6tIwuq48okfwSWCYI.png&size=150",
            "description": "Oil extract from vegetables - extra refined",
            "category_id": "6",
            "shelf_life": "365",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2017-12-28 10:24:36",
            "updated_at": "2019-12-23 22:41:36",
            "active": "1",
            "is_vatable": "0",
            "absorb_vat": "0",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "1650",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                },
                {
                    "name": "Carton",
                    "price": "9600",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "138",
            "total_qty": "0",
            "min_inv_level": "7",
            "min_procurement": "12",
            "procurement_type": "1",
            "category_name": "Oil",
            "inventory_count": "1",
            "first_inventory_size": "Carton",
            "first_inventory_price": "9600.00",
            "display_image": "/public/product/k0sVMIclBaxnOTg6tIwuq48okfwSWCYI.png"
        },
        {
            "id": "67",
            "name": "3.5L Mamador Oil",
            "slug": "3-5l-mamador-oil",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/dv8g4ybcrsZBPPbrQoM1r6eAfP0licRY.png&size=150",
            "description": "Oil extract from vegetables - extra refined",
            "category_id": "6",
            "shelf_life": "365",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2017-12-28 10:23:51",
            "updated_at": "2019-12-17 15:54:17",
            "active": "1",
            "is_vatable": "0",
            "absorb_vat": "0",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "2900",
                    "b2b_price": "2800",
                    "unit_discount_percent": "0",
                    "unit_discount": 0
                },
                {
                    "name": "Carton",
                    "price": "11000",
                    "b2b_price": "10800",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "198",
            "total_qty": "0",
            "min_inv_level": "1",
            "min_procurement": "4",
            "procurement_type": "1",
            "category_name": "Oil",
            "inventory_count": "1",
            "first_inventory_size": "Carton",
            "first_inventory_price": "11000.00",
            "display_image": "/public/product/dv8g4ybcrsZBPPbrQoM1r6eAfP0licRY.png"
        },
        {
            "id": "232",
            "name": "3L King's Oil",
            "slug": "3l-king-s-oil",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/3L%20Kings%20Oil.png&size=150",
            "description": "Oil extract from vegetables - extra refined\r\n",
            "category_id": "6",
            "shelf_life": "200",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2018-03-22 13:17:52",
            "updated_at": "2019-12-17 19:57:42",
            "active": "1",
            "is_vatable": "0",
            "absorb_vat": "0",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "2000",
                    "b2b_price": "1900",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                },
                {
                    "name": "Carton",
                    "price": "11800",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "119",
            "total_qty": "0",
            "min_inv_level": "3",
            "min_procurement": "6",
            "procurement_type": "1",
            "category_name": "Oil",
            "inventory_count": "1",
            "first_inventory_size": "Carton",
            "first_inventory_price": "11800.00",
            "display_image": "/public/product/3L Kings Oil.png"
        },
        {
            "id": "69",
            "name": "5l King's Oil",
            "slug": "5l-king-s-oil",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/OKDPy23s4f5t8VNHooyFCzOyBtwKV2jo.png&size=150",
            "description": "Oil extract from vegetables - extra refined",
            "category_id": "6",
            "shelf_life": "365",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2017-12-28 10:25:22",
            "updated_at": "2020-02-13 13:55:37",
            "active": "1",
            "is_vatable": "2",
            "absorb_vat": "0",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "3400",
                    "b2b_price": "3300",
                    "unit_discount_percent": "0",
                    "unit_discount": 0
                },
                {
                    "name": "Carton ",
                    "price": "13200",
                    "b2b_price": "11400",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "150",
            "total_qty": "0",
            "min_inv_level": "6",
            "min_procurement": "8",
            "procurement_type": "1",
            "category_name": "Oil",
            "inventory_count": "1",
            "first_inventory_size": "Carton ",
            "first_inventory_price": "13200.00",
            "display_image": "/public/product/OKDPy23s4f5t8VNHooyFCzOyBtwKV2jo.png"
        },
        {
            "id": "712",
            "name": "Ajinomoto Umami Seasoning 454g",
            "slug": "ajinomoto-umami-seasoning",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/ajinomoto.png&size=150",
            "description": "",
            "category_id": "18",
            "shelf_life": "0",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2019-06-19 19:52:14",
            "updated_at": "2019-12-10 19:41:50",
            "active": "1",
            "is_vatable": "1",
            "absorb_vat": "1",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "550",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                },
                {
                    "name": "Carton",
                    "price": "13200",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "130",
            "total_qty": "0",
            "min_inv_level": "6",
            "min_procurement": "25",
            "procurement_type": "1",
            "category_name": "Baby Food",
            "inventory_count": "1",
            "first_inventory_size": "Carton",
            "first_inventory_price": "13200.00",
            "display_image": "/public/product/ajinomoto.png"
        },
        {
            "id": "255",
            "name": "Alfa Tomato Ketchup 340g",
            "slug": "alfa-tomato-ketchup",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/alfa%20ketchup.png&size=150",
            "description": "Alfa Tomato Ketchup Squeezy",
            "category_id": "7",
            "shelf_life": "200",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2018-03-31 14:11:49",
            "updated_at": "2019-10-25 13:46:05",
            "active": "1",
            "is_vatable": "1",
            "absorb_vat": "1",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "300",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                },
                {
                    "name": "Carton",
                    "price": "6800",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "221",
            "total_qty": "0",
            "min_inv_level": "12",
            "min_procurement": "24",
            "procurement_type": "1",
            "category_name": "Condiments",
            "inventory_count": "1",
            "first_inventory_size": "Carton",
            "first_inventory_price": "6800.00",
            "display_image": "/public/product/alfa ketchup.png"
        },
        {
            "id": "710",
            "name": "Alfa Tomato Ketchup 5kg",
            "slug": "alfa-tomato-ketchup-1",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/alfa%20ketchup%205kg.png&size=150",
            "description": "",
            "category_id": "7",
            "shelf_life": "0",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2019-06-18 19:19:04",
            "updated_at": "2020-01-08 16:23:50",
            "active": "1",
            "is_vatable": "1",
            "absorb_vat": "1",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "2900",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "72",
            "total_qty": "0",
            "min_inv_level": "1",
            "min_procurement": "4",
            "procurement_type": "1",
            "category_name": "Condiments",
            "inventory_count": "1",
            "first_inventory_size": "Unit",
            "first_inventory_price": "2900.00",
            "display_image": "/public/product/alfa ketchup 5kg.png"
        },
        {
            "id": "799",
            "name": "Aluminium Foil Paper - Small size",
            "slug": "aluminium-foil-small-size",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/foil%20pack.png&size=150",
            "description": "",
            "category_id": "21",
            "shelf_life": "0",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2019-10-25 13:48:12",
            "updated_at": "2020-01-07 15:22:03",
            "active": "1",
            "is_vatable": "1",
            "absorb_vat": "1",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "300",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "47",
            "total_qty": "0",
            "min_inv_level": "6",
            "min_procurement": "36",
            "procurement_type": "1",
            "category_name": "Kitchen Items",
            "inventory_count": "1",
            "first_inventory_size": "Unit",
            "first_inventory_price": "300.00",
            "display_image": "/public/product/foil pack.png"
        },
        {
            "id": "630",
            "name": "Asun pack",
            "slug": "asun-pack",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/asun%20pack.png&size=150",
            "description": "",
            "category_id": "21",
            "shelf_life": "0",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2019-01-16 00:47:28",
            "updated_at": "2019-10-25 13:57:09",
            "active": "1",
            "is_vatable": "1",
            "absorb_vat": "1",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Pack",
                    "price": "400",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "86",
            "total_qty": "0",
            "min_inv_level": "0",
            "min_procurement": "0",
            "procurement_type": "1",
            "category_name": "Kitchen Items",
            "inventory_count": "1",
            "first_inventory_size": "Pack",
            "first_inventory_price": "400.00",
            "display_image": "/public/product/asun pack.png"
        },
        {
            "id": "123",
            "name": "Ayoola Poundo Yam 0.9kg",
            "slug": "ayoola-poundo-yam-1",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/Ayoola%20Poundo%20Yam%20Flour.png&size=150",
            "description": "This is an extraordinary product made from selected yam tubers. It has the taste and aroma of pounded yam freshly prepared without the stress of pounding.",
            "category_id": "1",
            "shelf_life": "365",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2018-01-26 14:18:21",
            "updated_at": "2020-01-07 15:05:47",
            "active": "1",
            "is_vatable": "1",
            "absorb_vat": "1",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "850",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                },
                {
                    "name": "Carton",
                    "price": "16200",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "133",
            "total_qty": "0",
            "min_inv_level": "4",
            "min_procurement": "20",
            "procurement_type": "1",
            "category_name": "Staples",
            "inventory_count": "2",
            "first_inventory_size": "Unit",
            "first_inventory_price": "850.00",
            "display_image": "/public/product/Ayoola Poundo Yam Flour.png"
        },
        {
            "id": "149",
            "name": "Ayoola Poundo Yam 1.8kg",
            "slug": "ayoola-poundo-yam",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/Ayoola%20Poundo%20Yam.png&size=150",
            "description": "This is an extraordinary product made from selected yam tubers. It has the taste and aroma of pounded yam freshly prepared without the stress of pounding.",
            "category_id": "1",
            "shelf_life": "365",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2018-02-09 15:53:43",
            "updated_at": "2019-12-17 19:35:14",
            "active": "1",
            "is_vatable": "1",
            "absorb_vat": "1",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "1700",
                    "b2b_price": "",
                    "unit_discount_percent": "0",
                    "unit_discount": 0
                },
                {
                    "name": "Carton",
                    "price": "16200",
                    "b2b_price": "13800",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "127",
            "total_qty": "0",
            "min_inv_level": "3",
            "min_procurement": "10",
            "procurement_type": "1",
            "category_name": "Staples",
            "inventory_count": "2",
            "first_inventory_size": "Unit",
            "first_inventory_price": "1700.00",
            "display_image": "/public/product/Ayoola Poundo Yam.png"
        },
        {
            "id": "675",
            "name": "Baby corn",
            "slug": "baby-corn",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/baby%20corn.png&size=150",
            "description": "",
            "category_id": "7",
            "shelf_life": "0",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2019-03-15 21:57:12",
            "updated_at": "2019-11-19 15:22:18",
            "active": "1",
            "is_vatable": "1",
            "absorb_vat": "1",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "450",
                    "b2b_price": "420",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                },
                {
                    "name": "Carton",
                    "price": "9600",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "79",
            "total_qty": "0",
            "min_inv_level": "2",
            "min_procurement": "24",
            "procurement_type": "1",
            "category_name": "Condiments",
            "inventory_count": "1",
            "first_inventory_size": "Carton",
            "first_inventory_price": "9600.00",
            "display_image": "/public/product/baby corn.png"
        },
        {
            "id": "563",
            "name": "Baker's Choice Cocoa Powder 250g",
            "slug": "baker-s-choice-alkalized-cocoa-powder",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/rsz_coco_powder.png&size=150",
            "description": "Baker's Choice classic unsweetened, Dutch processed, alkalized cocoa powder is ideal for hot cocoa, frostings, cakes, brownies and other rich chocolate desserts.",
            "category_id": "17",
            "shelf_life": "0",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2018-11-17 14:03:18",
            "updated_at": "2019-11-01 20:55:38",
            "active": "1",
            "is_vatable": "1",
            "absorb_vat": "1",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "680",
                    "b2b_price": "670",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "198",
            "total_qty": "0",
            "min_inv_level": "2",
            "min_procurement": "6",
            "procurement_type": "1",
            "category_name": "Baking",
            "inventory_count": "2",
            "first_inventory_size": "Unit",
            "first_inventory_price": "680.00",
            "display_image": "/public/product/rsz_coco_powder.png"
        },
        {
            "id": "30",
            "name": "Bama Mayonnaise - Big",
            "slug": "bama-mayo",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/imageedit_1_6852118518.png&size=150",
            "description": "Thick, creamy dressing",
            "category_id": "7",
            "shelf_life": "365",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2017-12-15 23:13:49",
            "updated_at": "2020-02-08 18:27:32",
            "active": "1",
            "is_vatable": "1",
            "absorb_vat": "1",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "1350",
                    "b2b_price": "1300",
                    "unit_discount_percent": "0",
                    "unit_discount": 0
                },
                {
                    "name": "Carton",
                    "price": "15800",
                    "b2b_price": "15200",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "140",
            "total_qty": "0",
            "min_inv_level": "12",
            "min_procurement": "24",
            "procurement_type": "1",
            "category_name": "Condiments",
            "inventory_count": "2",
            "first_inventory_size": "Carton",
            "first_inventory_price": "15800.00",
            "display_image": "/public/product/imageedit_1_6852118518.png"
        },
        {
            "id": "800",
            "name": "Bama Mayonnaise - Medium",
            "slug": "bama-mayonnaise-medium",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/bama%20mayonnaise%20-%20Medium.png&size=150",
            "description": "",
            "category_id": "7",
            "shelf_life": "0",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2019-10-25 19:45:52",
            "updated_at": "2019-11-18 17:48:15",
            "active": "1",
            "is_vatable": "1",
            "absorb_vat": "1",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "830",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                },
                {
                    "name": "Carton",
                    "price": "9500",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "42",
            "total_qty": "0",
            "min_inv_level": "3",
            "min_procurement": "12",
            "procurement_type": "1",
            "category_name": "Condiments",
            "inventory_count": "1",
            "first_inventory_size": "Carton",
            "first_inventory_price": "9500.00",
            "display_image": "/public/product/bama mayonnaise - Medium.png"
        },
        {
            "id": "398",
            "name": "Bama Mayonnaise - Small",
            "slug": "bama-mayonnaise-small",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/imageedit_7_5973711483.png&size=150",
            "description": "Thick, creamy dressing with a dash of lemon",
            "category_id": "7",
            "shelf_life": "0",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2018-06-25 12:18:41",
            "updated_at": "2020-01-16 22:29:32",
            "active": "1",
            "is_vatable": "1",
            "absorb_vat": "1",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "530",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                },
                {
                    "name": "Carton",
                    "price": "6200",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "86",
            "total_qty": "0",
            "min_inv_level": "2",
            "min_procurement": "12",
            "procurement_type": "1",
            "category_name": "Condiments",
            "inventory_count": "1",
            "first_inventory_size": "Carton",
            "first_inventory_price": "6200.00",
            "display_image": "/public/product/imageedit_7_5973711483.png"
        },
        {
            "id": "474",
            "name": "Barbecue Sauce",
            "slug": "barbeque-sauce",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/bbq%20sauce.png&size=150",
            "description": "",
            "category_id": "7",
            "shelf_life": "730",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2018-08-31 16:49:49",
            "updated_at": "2019-10-25 19:59:24",
            "active": "1",
            "is_vatable": "1",
            "absorb_vat": "1",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "850",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                },
                {
                    "name": "Carton",
                    "price": "",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "78",
            "total_qty": "0",
            "min_inv_level": "3",
            "min_procurement": "12",
            "procurement_type": "1",
            "category_name": "Condiments",
            "inventory_count": "1",
            "first_inventory_size": "Unit",
            "first_inventory_price": "850.00",
            "display_image": "/public/product/bbq sauce.png"
        },
        {
            "id": "184",
            "name": "Batchelors Green Peas",
            "slug": "batchelors-green-peas",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/peas.jpeg&size=150",
            "description": "Nothing beats the flavour of British peas. Batchelors Small Peas are produced using delicious peas nurtured by specialist growers and harvested at their best.",
            "category_id": "2",
            "shelf_life": "365",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2018-02-14 10:37:05",
            "updated_at": "2020-01-15 20:50:55",
            "active": "1",
            "is_vatable": "0",
            "absorb_vat": "0",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "220",
                    "b2b_price": "",
                    "unit_discount_percent": "0",
                    "unit_discount": 0
                },
                {
                    "name": "Carton",
                    "price": "5000",
                    "b2b_price": "5100",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "153",
            "total_qty": "0",
            "min_inv_level": "10",
            "min_procurement": "48",
            "procurement_type": "1",
            "category_name": "Vegetables",
            "inventory_count": "1",
            "first_inventory_size": "Carton",
            "first_inventory_price": "5000.00",
            "display_image": "/public/product/peas.jpeg"
        },
        {
            "id": "494",
            "name": "Bay Leaves - 125g",
            "slug": "bailey-leaf",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/product/Bay%20leaves.png&size=150",
            "description": "Aromatic herb for cooking that adds a distinctive richness and delicate herbal aroma as it simmers with food.",
            "category_id": "2",
            "shelf_life": "30",
            "deleted_at": "0000-00-00 00:00:00",
            "created_at": "2018-09-11 19:33:33",
            "updated_at": "2019-10-25 20:04:22",
            "active": "1",
            "is_vatable": "0",
            "absorb_vat": "0",
            "perishable": "0",
            "quantities": [
                {
                    "name": "Unit",
                    "price": "400",
                    "b2b_price": "",
                    "unit_discount_percent": "",
                    "unit_discount": 0
                }
            ],
            "basic_qty_index": "0",
            "smallest_qty_index": "0",
            "is_updated": "0",
            "exclude_from_discount": "0",
            "views": "86",
            "total_qty": "0",
            "min_inv_level": "1",
            "min_procurement": "8",
            "procurement_type": "1",
            "category_name": "Vegetables",
            "inventory_count": "1",
            "first_inventory_size": "Unit",
            "first_inventory_price": "400.00",
            "display_image": "/public/product/Bay leaves.png"
        }
    ],
    categories: [
        {
            "id": "1",
            "name": "Staples",
            "slug": "staples",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/1513358122.jpg&size=150"
        },
        {
            "id": "2",
            "name": "Vegetables",
            "slug": "vegetables",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/1513358137.jpg&size=150"
        },
        {
            "id": "3",
            "name": "Meat",
            "slug": "meat",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/1513358149.jpg&size=150"
        },
        {
            "id": "4",
            "name": "Pasta",
            "slug": "pasta",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/1513422767.jpg&size=150"
        },
        {
            "id": "5",
            "name": "Fruits",
            "slug": "fruits",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/1513358179.jpg&size=150"
        },
        {
            "id": "6",
            "name": "Oil",
            "slug": "oil",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/1513358166.jpg&size=150"
        },
        {
            "id": "7",
            "name": "Condiments",
            "slug": "condiments",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/1513358293.jpg&size=150"
        },
        {
            "id": "8",
            "name": "Fish",
            "slug": "fish",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/1513358191.jpg&size=150"
        },
        {
            "id": "9",
            "name": "Tubers",
            "slug": "tubers",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/1514373150.png&size=150"
        },
        {
            "id": "10",
            "name": "Poultry",
            "slug": "live-poultry",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/1514426644.png&size=150"
        },
        {
            "id": "11",
            "name": "Special Buys",
            "slug": "special-buys",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/nutella.png&size=150"
        },
        {
            "id": "12",
            "name": "Cereals",
            "slug": "cereals",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/Cereals.png&size=150"
        },
        {
            "id": "13",
            "name": "Processed",
            "slug": "processed",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/Beans%20Flour.png&size=150"
        },
        {
            "id": "14",
            "name": "Provisions",
            "slug": "provisions",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/Dano%20Milk%20850g.jpg&size=150"
        },
        {
            "id": "15",
            "name": "Drinks",
            "slug": "drinks",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/Mirinda%20Pineapple.png&size=150"
        },
        {
            "id": "16",
            "name": "Superfoods",
            "slug": "super-foods",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/Super%20Foods.jpg&size=150"
        },
        {
            "id": "17",
            "name": "Baking",
            "slug": "baking-materials",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/Baking%20Materials.jpg&size=150"
        },
        {
            "id": "18",
            "name": "Baby Food",
            "slug": "baby-food",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/Baby%20Food.jpg&size=150"
        },
        {
            "id": "19",
            "name": "Snacks",
            "slug": "snacks",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/Snacks.jpg&size=150"
        },
        {
            "id": "20",
            "name": "Biscuit",
            "slug": "biscuit",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/imageedit_13_2610097892.png&size=150"
        },
        {
            "id": "21",
            "name": "Kitchen Items",
            "slug": "kitchen-items",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/Foil%20Paper.jpg&size=150"
        },
        {
            "id": "23",
            "name": "Sweets",
            "slug": "sweets-candies-chocolates-etc",
            "image": "https://v2.foodlocker.com.ng/getImg.php?img=https://v2.foodlocker.com.ng//public/category/Candies%20chocolates%20etc.jpg&size=150"
        }
    ]
}

const rootReducer = (state = intialState, action) => {

    const newState = state;
    console.log("executing.....")

    if (action.type === "TOOGGLESIDEBAR") {
        newState.isSideNavOpen = !state.isSideNavOpen;

    }

    return newState;
}

export default rootReducer;