// Real residential complex apartment models based on architectural designs and Excel price matrix of "VATAN"
// Loyiha: "Yangi Qo‘yliq-2" turar-joy majmuasi (Comfort Class)
// Qavatlar: 2-4 qavatlar, 5-8 qavatlar (arzonroq), 9-12 qavatlar (eng arzon)
// Bosh to'lov variantlari: 100% to'lov (33% chegirma), 50% bosh to'lov (15% chegirma), 30% bosh to'lov (10% chegirma), Standart (29/39/69 mln)

export const APARTMENT_MODELS = [
  {
    "typeCode": "1A-22",
    "rooms": 1,
    "area": 22,
    "title": "1 xonali studio (22 m²)",
    "description": "Ixcham, barcha qulayliklari mujassamlashgan zamonaviy studio format.",
    "image": "/22.jpg",
    "onlyFullPayment": true,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 165825000,
          "pricePerM2": 7537500
        }
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 158455000,
          "pricePerM2": 7202500
        }
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 151085000,
          "pricePerM2": 6867500
        }
      }
    },
    "prices": {
      "standard": 165825000,
      "fullPayDiscount": 165825000,
      "pricePerM2": 7537500,
      "minPrice": 151085000,
      "maxPrice": 165825000
    }
  },
  {
    "typeCode": "1A-25",
    "rooms": 1,
    "area": 25,
    "title": "1 xonali shinam studio (25 m²)",
    "description": "Qulay rejalashtirish, katta oynali dahliz, alohida oshxona zonasi va sanuzel.",
    "image": "/25.jpg",
    "onlyFullPayment": true,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 188437500,
          "pricePerM2": 7537500
        }
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 180062500,
          "pricePerM2": 7202500
        }
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 171687500,
          "pricePerM2": 6867500
        }
      }
    },
    "prices": {
      "standard": 188437500,
      "fullPayDiscount": 188437500,
      "pricePerM2": 7537500,
      "minPrice": 171687500,
      "maxPrice": 188437500
    }
  },
  {
    "typeCode": "1B-34",
    "rooms": 1,
    "area": 34,
    "title": "1 xonali qulay xonadon (34 m²)",
    "description": "Dahliz, alohida oshxona, shinam yotoqxona va keng ochiq balkon.",
    "image": "/34.jpg",
    "onlyFullPayment": true,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 256275000,
          "pricePerM2": 7537500
        }
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 244885000,
          "pricePerM2": 7202500
        }
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 233495000,
          "pricePerM2": 6867500
        }
      }
    },
    "prices": {
      "standard": 256275000,
      "fullPayDiscount": 256275000,
      "pricePerM2": 7537500,
      "minPrice": 233495000,
      "maxPrice": 256275000
    }
  },
  {
    "typeCode": "1B-39",
    "rooms": 1,
    "area": 39,
    "title": "1 xonali yorug‘ xonadon (39 m²)",
    "description": "Katta derazali, quyosh nuri to‘la tushadigan shinam xonadon.",
    "image": "/39.jpg",
    "onlyFullPayment": true,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 293962500,
          "pricePerM2": 7537500
        }
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 280897500,
          "pricePerM2": 7202500
        }
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 267832500,
          "pricePerM2": 6867500
        }
      }
    },
    "prices": {
      "standard": 293962500,
      "fullPayDiscount": 293962500,
      "pricePerM2": 7537500,
      "minPrice": 267832500,
      "maxPrice": 293962500
    }
  },
  {
    "typeCode": "1A-41",
    "rooms": 1,
    "area": 41,
    "title": "1 xonali shinam xonadon (41 m²)",
    "description": "Keng dahliz, alohida oshxona va yotoqxona, qulay sanuzel hamda ochiq shinam balkon.",
    "image": "/41.jpg",
    "onlyFullPayment": false,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 309037500,
          "pricePerM2": 7537500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 309037500,
            "pricePerM2": 7537500,
            "initialPayment": 309037500,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (29 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 461250000,
            "pricePerM2": 11250000,
            "initialPayment": 29000000,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 312250000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 415125000,
            "pricePerM2": 10125000,
            "initialPayment": 124537500,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 170587500,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 392062500,
            "pricePerM2": 9562500,
            "initialPayment": 196031250,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 76031250,
            "isInstallment": true
          }
        ]
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 295302500,
          "pricePerM2": 7202500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 295302500,
            "pricePerM2": 7202500,
            "initialPayment": 295302500,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (29 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 440750000,
            "pricePerM2": 10750000,
            "initialPayment": 29000000,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 291750000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 396675000,
            "pricePerM2": 9675000,
            "initialPayment": 119002500,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 157672500,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 374637500,
            "pricePerM2": 9137500,
            "initialPayment": 187318750,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 67318750,
            "isInstallment": true
          }
        ]
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 281567500,
          "pricePerM2": 6867500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 281567500,
            "pricePerM2": 6867500,
            "initialPayment": 281567500,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (29 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 420250000,
            "pricePerM2": 10250000,
            "initialPayment": 29000000,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 271250000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 378225000,
            "pricePerM2": 9225000,
            "initialPayment": 113467500,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 144757500,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 357212500,
            "pricePerM2": 8712500,
            "initialPayment": 178606250,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 58606250,
            "isInstallment": true
          }
        ]
      }
    },
    "prices": {
      "standard": 461250000,
      "fullPayDiscount": 309037500,
      "pricePerM2": 7537500,
      "minPrice": 281567500,
      "maxPrice": 461250000
    }
  },
  {
    "typeCode": "1A-43",
    "rooms": 1,
    "area": 43,
    "title": "1 xonali keng xonadon (43 m²)",
    "description": "Zamonaviy ergonomik planirovka, yorug‘ mehmondosh xona, to‘liq bo‘lingan devorlar va sifatli Akfa romlar.",
    "image": "/43.jpg",
    "onlyFullPayment": false,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 324112500,
          "pricePerM2": 7537500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 324112500,
            "pricePerM2": 7537500,
            "initialPayment": 324112500,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (29 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 483750000,
            "pricePerM2": 11250000,
            "initialPayment": 29000000,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 334750000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 483750000,
            "pricePerM2": 11250000,
            "initialPayment": 145125000,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 218625000,
            "isInstallment": true
          }
        ]
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 309707500,
          "pricePerM2": 7202500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 309707500,
            "pricePerM2": 7202500,
            "initialPayment": 309707500,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (29 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 462250000,
            "pricePerM2": 10750000,
            "initialPayment": 29000000,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 313250000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 462250000,
            "pricePerM2": 10750000,
            "initialPayment": 138675000,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 203575000,
            "isInstallment": true
          }
        ]
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 295302500,
          "pricePerM2": 6867500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 295302500,
            "pricePerM2": 6867500,
            "initialPayment": 295302500,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (29 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 440750000,
            "pricePerM2": 10250000,
            "initialPayment": 29000000,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 291750000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 440750000,
            "pricePerM2": 10250000,
            "initialPayment": 132225000,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 188525000,
            "isInstallment": true
          }
        ]
      }
    },
    "prices": {
      "standard": 483750000,
      "fullPayDiscount": 324112500,
      "pricePerM2": 7537500,
      "minPrice": 295302500,
      "maxPrice": 483750000
    }
  },
  {
    "typeCode": "1A-49",
    "rooms": 1,
    "area": 49,
    "title": "1 xonali premium xonadon (49 m²)",
    "description": "Katta maydonli bir xonali format, xohishga ko‘ra yevro-2 formatga aylantirish imkoniyati.",
    "image": "/49.jpg",
    "onlyFullPayment": false,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 369337500,
          "pricePerM2": 7537500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 369337500,
            "pricePerM2": 7537500,
            "initialPayment": 369337500,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (29 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 551250000,
            "pricePerM2": 11250000,
            "initialPayment": 29000000,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 402250000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 496125000,
            "pricePerM2": 10125000,
            "initialPayment": 148837500,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 227287500,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 468562500,
            "pricePerM2": 9562500,
            "initialPayment": 234281250,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 114281250,
            "isInstallment": true
          }
        ]
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 352922500,
          "pricePerM2": 7202500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 352922500,
            "pricePerM2": 7202500,
            "initialPayment": 352922500,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (29 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 526750000,
            "pricePerM2": 10750000,
            "initialPayment": 29000000,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 377750000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 474075000,
            "pricePerM2": 9675000,
            "initialPayment": 142222500,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 211852500,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 447737500,
            "pricePerM2": 9137500,
            "initialPayment": 223868750,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 103868750,
            "isInstallment": true
          }
        ]
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 336507500,
          "pricePerM2": 6867500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 336507500,
            "pricePerM2": 6867500,
            "initialPayment": 336507500,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (29 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 502250000,
            "pricePerM2": 10250000,
            "initialPayment": 29000000,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 353250000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 452025000,
            "pricePerM2": 9225000,
            "initialPayment": 135607500,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 196417500,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 426912500,
            "pricePerM2": 8712500,
            "initialPayment": 213456250,
            "monthlyPayment": 4000000,
            "paid30m": 120000000,
            "remainingBalance": 93456250,
            "isInstallment": true
          }
        ]
      }
    },
    "prices": {
      "standard": 551250000,
      "fullPayDiscount": 369337500,
      "pricePerM2": 7537500,
      "minPrice": 336507500,
      "maxPrice": 551250000
    }
  },
  {
    "typeCode": "2A-54",
    "rooms": 2,
    "area": 54,
    "title": "2 xonali oilaviy xonadon (54 m²)",
    "description": "Alohida kattalar va bolalar xonasi, keng oshxona, shinam yo‘lak va qulay sanuzel.",
    "image": "/54.jpg",
    "onlyFullPayment": false,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 388935000,
          "pricePerM2": 7202500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 388935000,
            "pricePerM2": 7202500,
            "initialPayment": 388935000,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (39 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 580500000,
            "pricePerM2": 10750000,
            "initialPayment": 39000000,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 391500000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 522450000,
            "pricePerM2": 9675000,
            "initialPayment": 156735000,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 215715000,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 493425000,
            "pricePerM2": 9137500,
            "initialPayment": 246712500,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 96712500,
            "isInstallment": true
          }
        ]
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 370845000,
          "pricePerM2": 6867500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 370845000,
            "pricePerM2": 6867500,
            "initialPayment": 370845000,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (39 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 553500000,
            "pricePerM2": 10250000,
            "initialPayment": 39000000,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 364500000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 498150000,
            "pricePerM2": 9225000,
            "initialPayment": 149445000,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 198705000,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 470475000,
            "pricePerM2": 8712500,
            "initialPayment": 235237500,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 85237500,
            "isInstallment": true
          }
        ]
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 352755000,
          "pricePerM2": 6532500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 352755000,
            "pricePerM2": 6532500,
            "initialPayment": 352755000,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (39 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 526500000,
            "pricePerM2": 9750000,
            "initialPayment": 39000000,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 337500000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 473850000,
            "pricePerM2": 8775000,
            "initialPayment": 142155000,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 181695000,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 447525000,
            "pricePerM2": 8287500,
            "initialPayment": 223762500,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 73762500,
            "isInstallment": true
          }
        ]
      }
    },
    "prices": {
      "standard": 580500000,
      "fullPayDiscount": 388935000,
      "pricePerM2": 7202500,
      "minPrice": 352755000,
      "maxPrice": 580500000
    }
  },
  {
    "typeCode": "2A-55",
    "rooms": 2,
    "area": 55,
    "title": "2 xonali keng oilaviy xonadon (55 m²)",
    "description": "Yorug‘ ikki tomonlama derazalar, keng mehmondosh oshxona va 2 ta mustaqil xona.",
    "image": "/55.jpg",
    "onlyFullPayment": false,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 396137500,
          "pricePerM2": 7202500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 396137500,
            "pricePerM2": 7202500,
            "initialPayment": 396137500,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (39 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 591250000,
            "pricePerM2": 10750000,
            "initialPayment": 39000000,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 402250000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 532125000,
            "pricePerM2": 9675000,
            "initialPayment": 159637500,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 222487500,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 502562500,
            "pricePerM2": 9137500,
            "initialPayment": 251281250,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 101281250,
            "isInstallment": true
          }
        ]
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 377712500,
          "pricePerM2": 6867500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 377712500,
            "pricePerM2": 6867500,
            "initialPayment": 377712500,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (39 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 563750000,
            "pricePerM2": 10250000,
            "initialPayment": 39000000,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 374750000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 507375000,
            "pricePerM2": 9225000,
            "initialPayment": 152212500,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 205162500,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 479187500,
            "pricePerM2": 8712500,
            "initialPayment": 239593750,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 89593750,
            "isInstallment": true
          }
        ]
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 359287500,
          "pricePerM2": 6532500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 359287500,
            "pricePerM2": 6532500,
            "initialPayment": 359287500,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (39 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 536250000,
            "pricePerM2": 9750000,
            "initialPayment": 39000000,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 347250000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 482625000,
            "pricePerM2": 8775000,
            "initialPayment": 144787500,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 187837500,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 455812500,
            "pricePerM2": 8287500,
            "initialPayment": 227906250,
            "monthlyPayment": 5000000,
            "paid30m": 150000000,
            "remainingBalance": 77906250,
            "isInstallment": true
          }
        ]
      }
    },
    "prices": {
      "standard": 591250000,
      "fullPayDiscount": 396137500,
      "pricePerM2": 7202500,
      "minPrice": 359287500,
      "maxPrice": 591250000
    }
  },
  {
    "typeCode": "3A-70",
    "rooms": 3,
    "area": 70,
    "title": "3 xonali shohona xonadon (70 m²)",
    "description": "Katta oilalar uchun mo‘ljallangan lyuks format: keng mehmonxona, 2 ta yotoqxona, 2 ta balkon va oshxona.",
    "image": "/70.jpg",
    "onlyFullPayment": false,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 480725000,
          "pricePerM2": 6867500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 480725000,
            "pricePerM2": 6867500,
            "initialPayment": 480725000,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (69 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 717500000,
            "pricePerM2": 10250000,
            "initialPayment": 69000000,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 468500000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 645750000,
            "pricePerM2": 9225000,
            "initialPayment": 193725000,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 272025000,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 609875000,
            "pricePerM2": 8712500,
            "initialPayment": 304937500,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 124937500,
            "isInstallment": true
          }
        ]
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 457275000,
          "pricePerM2": 6532500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 457275000,
            "pricePerM2": 6532500,
            "initialPayment": 457275000,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (69 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 682500000,
            "pricePerM2": 9750000,
            "initialPayment": 69000000,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 433500000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 614250000,
            "pricePerM2": 8775000,
            "initialPayment": 184275000,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 249975000,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 580125000,
            "pricePerM2": 8287500,
            "initialPayment": 290062500,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 110062500,
            "isInstallment": true
          }
        ]
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 433825000,
          "pricePerM2": 6197500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 433825000,
            "pricePerM2": 6197500,
            "initialPayment": 433825000,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (69 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 647500000,
            "pricePerM2": 9250000,
            "initialPayment": 69000000,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 398500000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 582750000,
            "pricePerM2": 8325000,
            "initialPayment": 174825000,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 227925000,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 550375000,
            "pricePerM2": 7862500,
            "initialPayment": 275187500,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 95187500,
            "isInstallment": true
          }
        ]
      }
    },
    "prices": {
      "standard": 717500000,
      "fullPayDiscount": 480725000,
      "pricePerM2": 6867500,
      "minPrice": 433825000,
      "maxPrice": 717500000
    }
  },
  {
    "typeCode": "3A-77",
    "rooms": 3,
    "area": 77,
    "title": "3 xonali keng qulay xonadon (77 m²)",
    "description": "Maksimal qulaylik va erkinlik. Katta dahliz, vitraj oynalar va keng yashash maydoni.",
    "image": "/77.jpg",
    "onlyFullPayment": false,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 528797500,
          "pricePerM2": 6867500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 528797500,
            "pricePerM2": 6867500,
            "initialPayment": 528797500,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (69 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 789250000,
            "pricePerM2": 10250000,
            "initialPayment": 69000000,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 540250000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 710325000,
            "pricePerM2": 9225000,
            "initialPayment": 213097500,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 317227500,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 670862500,
            "pricePerM2": 8712500,
            "initialPayment": 335431250,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 155431250,
            "isInstallment": true
          }
        ]
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 503002500,
          "pricePerM2": 6532500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 503002500,
            "pricePerM2": 6532500,
            "initialPayment": 503002500,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (69 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 750750000,
            "pricePerM2": 9750000,
            "initialPayment": 69000000,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 501750000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 675675000,
            "pricePerM2": 8775000,
            "initialPayment": 202702500,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 292972500,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 638137500,
            "pricePerM2": 8287500,
            "initialPayment": 319068750,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 139068750,
            "isInstallment": true
          }
        ]
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 477207500,
          "pricePerM2": 6197500
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 477207500,
            "pricePerM2": 6197500,
            "initialPayment": 477207500,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (69 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 712250000,
            "pricePerM2": 9250000,
            "initialPayment": 69000000,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 463250000,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 641025000,
            "pricePerM2": 8325000,
            "initialPayment": 192307500,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 268717500,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 605412500,
            "pricePerM2": 7862500,
            "initialPayment": 302706250,
            "monthlyPayment": 6000000,
            "paid30m": 180000000,
            "remainingBalance": 122706250,
            "isInstallment": true
          }
        ]
      }
    },
    "prices": {
      "standard": 789250000,
      "fullPayDiscount": 528797500,
      "pricePerM2": 6867500,
      "minPrice": 477207500,
      "maxPrice": 789250000
    }
  }
];

export const PROJECT_DETAILS = {
  companyName: "VATAN QK",
  brandSubtitle: "Yangi Qo‘yliq-2 loyihasi",
  brandLogo: "/vatan-full-logo.png",
  projectName: "Yangi Qo‘yliq-2",
  projectClass: "Comfort class",
  headline: "Yangi Qo‘yliq-2 — Kelajakdagi shinam xonadoningiz",
  subtitle: "Yangi Toshkent hududida joylashgan zamonaviy 'Comfort class' turar-joy majmuasi",
  
  // Asosiy ko'rsatkichlar
  keyMetrics: [
    { label: "Umumiy hudud maydoni", value: "13 gektar", icon: "map-pin", desc: "Katta va toza yashil maydon" },
    { label: "Balandlik & Monolit", value: "12 qavat", icon: "building", desc: "Monolit pishiq konstruksiya (9 ball)" },
    { label: "Shinam xonadonlar fondi", value: "3 800 ta", icon: "home", desc: "Turli maydondagi qulay xonadonlar" },
    { label: "Ta’mirlash holati", value: "70% tayyor", icon: "wrench", desc: "Oq suvoq va eshiklar bilan topshiriladi" }
  ],

  // Kompaniya ishonch ko'rsatkichlari (13 yillik tajriba)
  companyStats: [
    { value: "2013-yildan", label: "Tashkil topgan yili", desc: "13 yillik mustahkam qurilish tajribasi" },
    { value: "10 000+", label: "Topshirilgan xonadonlar", desc: "Minglab oilalar yangi uyiga ko‘chib o‘tdi" },
    { value: "7 000+", label: "Topshirilgan noturar do‘konlar", desc: "Faol savdo va xizmat ko‘rsatish maskanlari" },
    { value: "6 ta yirik", label: "Muvaffaqiyatli loyiha", desc: "To‘liq foydalanishga topshirilgan" }
  ],

  // Muvaffaqiyatli topshirilgan 6 ta yirik loyiha
  completedProjects: [
    {
      name: "Yakkasaroy City Mall",
      category: "Savdo-ko‘ngilochar majmuasi",
      image: "/Yakkasroy loyixasi.jpg",
      status: "Topshirilgan",
      year: "2020",
      desc: "Toshkent markazidagi hashamatli premium savdo va xarid markazi."
    },
    {
      name: "Madrid",
      category: "Turar-joy majmuasi",
      image: "/Madrid loyixasi.jpg",
      status: "Topshirilgan",
      year: "2021",
      desc: "Yevropa arxitekturasi asosida barpo etilgan shinam kvartallar."
    },
    {
      name: "O‘z",
      category: "Turar-joy majmuasi",
      image: "/O'z loyixasi.jpg",
      status: "Topshirilgan",
      year: "2022",
      desc: "Milliy va zamonaviy uslub uyg‘unlashgan oilaviy turar-joy majmuasi."
    },
    {
      name: "IKAT",
      category: "Turar-joy majmuasi",
      image: "/IKAT loyixasi.jpg",
      status: "Topshirilgan",
      year: "2023",
      desc: "Eksklyuziv dizayn, keng hovli va qulay transport infratuzilmasi."
    },
    {
      name: "Qo‘yliq Katta bozori",
      category: "Savdo va biznes markazi",
      image: "/Qoyliq katta bozori loyixasi.jpg",
      status: "Topshirilgan",
      year: "2024",
      desc: "Keng ko‘lamli zamonaviy tijorat va ulgurji savdo majmuasi."
    },
    {
      name: "Yangi Qo‘yliq-1 (1-bosqich)",
      category: "Turar-joy majmuasi",
      image: "/Yangi Qoyliq-1 loyixasi.jpg",
      status: "1-bosqich topshirilgan",
      year: "2025",
      desc: "Minglab xonadonlardan iborat keng ko‘lamli zamonaviy turar-joy hududi."
    }
  ],

  // Davom etayotgan loyihalar grafigi (Roadmap timeline)
  ongoingRoadmap: [
    {
      name: "Yangi Qo‘yliq-1",
      years: "2026-yil",
      status: "Yakuniy pardozlash",
      progress: 92,
      desc: "Fasad va hududni obodonlashtirish ishlari yakunlanmoqda",
      image: "/ongoing/yangi-qoyliq-1.jpg"
    },
    {
      name: "Ostona",
      years: "2027-yil",
      status: "Faol qurilish",
      progress: 60,
      desc: "Monolit qavatlar va devor konstruksiyalari qad rostlamoqda",
      image: "/ongoing/ostona.jpg"
    },
    {
      name: "O‘rmonsaroy",
      years: "2027–2028-yil",
      status: "Montaj jarayoni",
      progress: 35,
      desc: "Poydevor va dastlabki monolit qavatlar montaji ketmoqda",
      image: "/ongoing/ormonsaroy.jpg"
    },
    {
      name: "Yangi Qo‘yliq-2",
      years: "2028–2029-yil (Topshirish: 2028 IV chorak)",
      status: "Asosiy sotuvlar ochiq",
      progress: 25,
      isCurrent: true,
      desc: "13 gektarlik Comfort class majmua, xonadonlar eng qulay boshlang‘ich narxlarda",
      image: "/ongoing/yangi-qoyliq-2.png"
    }
  ],

  // 70% tayyor ta'mirlash holati (Devorlar, eshiklar, romlar)
  repairFeatures: [
    { title: "Xonalar to‘liq bo‘lingan", desc: "Pishiq g‘isht va bloklar bilan barcha xona devorlari ko‘tarilgan" },
    { title: "Sifatli oq suvoq", desc: "Devorlar tekislangan va pardozlashga (oboy/bo‘yoq) 100% tayyor" },
    { title: "Kirish temir eshigi", desc: "Yuqori xavfsizlik sinfidagi qalin, shovqin o‘tkazmaydigan po‘lat eshik" },
    { title: "Barcha xonalararo ichki eshiklar", desc: "Xonadon ichidagi barcha sifatli eshiklar o‘rnatilgan" },
    { title: "Akfa premium shovqinsiz romlar", desc: "Ko‘p kamerali, ovoz va issiqlikni saqlovchi premium romlar" },
    { title: "Barcha kommunal hisoblagichlar", desc: "Elektr, sovuq suv va issiq suv hisoblagichlari o‘rnatilgan" }
  ],

  // Qulay infratuzilma (Ikonkalar bilan)
  infrastructures: [
    { name: "Zamonaviy maktab", icon: "school", time: "Hudud ichida", desc: "Farzandlar xavfsiz piyoda qatnaydigan maktab" },
    { name: "Bolalar bog‘chasi", icon: "baby", time: "Hudud ichida", desc: "Shinam va xavfsiz bolalar tarbiya maskani" },
    { name: "Korzinka supermarketi", icon: "shopping-cart", time: "1 daqiqa", desc: "Kunlik sifatli oziq-ovqat va maishiy xaridlar" },
    { name: "Keng tartibli avtoturargoh", icon: "car", time: "Hudud ichida", desc: "Xavfsiz va keng yer usti avtoturargoh joylari" },
    { name: "Bozor majmuasi", icon: "store", time: "Food City chorrahasi", desc: "Food City va yirik agro-savdo markazi" },
    { name: "Sun'iy ko‘l va eko-zona", icon: "waves", time: "Hudud ichida", desc: "Salqin dam olish, eko-hudud va oilaviy sayr maydoni" },
    { name: "Ochiq amfiteatr", icon: "theater", time: "Hudud ichida", desc: "Ochiq osmon ostida bayramlar va madaniy tadbirlar" }
  ],

  // Joylashuv va aloqa ma'lumotlari
  location: {
    legalAddress: "Toshkent viloyati, O‘rtachirchiq tumani, O‘choqli MFY, Yashnobod ko‘chasi, 44a-uy",
    region: "Toshkent viloyati, O‘rtachirchiq tumani, O‘choqli MFY, Yashnobod ko‘chasi, 44a-uy",
    zone: "Yangi Toshkent hududi",
    landmark: "Food City bozor chorrahasi",
    officeName: "Янги Қўйлик-2 оффиси ва қурилиш майдони",
    mapLink: "https://yandex.com/maps/org/93362741697?si=paavuny8ar13tb74cnyu5e4ny8",
    yandexLink: "https://yandex.com/maps/org/93362741697?si=paavuny8ar13tb74cnyu5e4ny8",
    yandexWidget: "https://yandex.com/map-widget/v1/org/93362741697",
    googleMapLink: "https://maps.app.goo.gl/rqxoui8NCAsDu1Ks9",
    salesPhone: "",
    salesPhoneFormatted: "",
    managerName: "Alisher",
    telegramBot: "https://t.me/Vatan2333_bot",
    telegramBotUsername: "@Vatan2333_bot",
    telegramChannel: "https://t.me/yangiqoyliq_TJM",
    telegramChannelUsername: "@yangiqoyliq_TJM",
    handoverDate: "2028-yil 4-chorak",
    workingHours: "Har kuni: 09:00 — 18:00 (Dam olish kunlarisiz)"
  }
};

