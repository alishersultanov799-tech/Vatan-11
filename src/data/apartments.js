// Real residential complex apartment models based on architectural designs and Excel price matrix of "VATAN"
// Loyiha: "Yangi Qo‘yliq-2" turar-joy majmuasi (Comfort Class)
// Qavatlar: 2-4 qavatlar, 5-8 qavatlar (arzonroq), 9-12 qavatlar (eng arzon)
// Bosh to'lov variantlari: 100% to'lov (33% chegirma), 50% bosh to'lov (15% chegirma), 30% bosh to'lov (10% chegirma), Standart (60/75/99 mln)

export const APARTMENT_MODELS = [
  {
    "typeCode": "1A-22",
    "rooms": 1,
    "area": 22.0,
    "title": "1 xonali studio (22 m²)",
    "description": "Ixcham, barcha qulayliklari mujassamlashgan zamonaviy studio format.",
    "image": "/22.jpg",
    "onlyFullPayment": true,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 165825000.0,
          "pricePerM2": 7537500.0
        }
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 158455000.0,
          "pricePerM2": 7202500.0
        }
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 151085000.0,
          "pricePerM2": 6867500.0
        }
      }
    },
    "prices": {
      "standard": 165825000.0,
      "fullPayDiscount": 165825000.0,
      "pricePerM2": 7537500.0,
      "minPrice": 151085000.0,
      "maxPrice": 165825000.0
    }
  },
  {
    "typeCode": "1A-25",
    "rooms": 1,
    "area": 25.0,
    "title": "1 xonali shinam studio (25 m²)",
    "description": "Qulay rejalashtirish, katta oynali dahliz, alohida oshxona zonasi va sanuzel.",
    "image": "/25.jpg",
    "onlyFullPayment": true,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 188437500.0,
          "pricePerM2": 7537500.0
        }
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 180062500.0,
          "pricePerM2": 7202500.0
        }
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 171687500.0,
          "pricePerM2": 6867500.0
        }
      }
    },
    "prices": {
      "standard": 188437500.0,
      "fullPayDiscount": 188437500.0,
      "pricePerM2": 7537500.0,
      "minPrice": 171687500.0,
      "maxPrice": 188437500.0
    }
  },
  {
    "typeCode": "1B-34",
    "rooms": 1,
    "area": 34.0,
    "title": "1 xonali qulay xonadon (34 m²)",
    "description": "Dahliz, alohida oshxona, shinam yotoqxona va keng ochiq balkon.",
    "image": "/34.jpg",
    "onlyFullPayment": true,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 256275000.0,
          "pricePerM2": 7537500.0
        }
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 244885000.0,
          "pricePerM2": 7202500.0
        }
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 233495000.0,
          "pricePerM2": 6867500.0
        }
      }
    },
    "prices": {
      "standard": 256275000.0,
      "fullPayDiscount": 256275000.0,
      "pricePerM2": 7537500.0,
      "minPrice": 233495000.0,
      "maxPrice": 256275000.0
    }
  },
  {
    "typeCode": "1B-39",
    "rooms": 1,
    "area": 39.0,
    "title": "1 xonali yorug‘ xonadon (39 m²)",
    "description": "Katta derazali, quyosh nuri to‘la tushadigan shinam xonadon.",
    "image": "/39.jpg",
    "onlyFullPayment": true,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 293962500.0,
          "pricePerM2": 7537500.0
        }
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 280897500.0,
          "pricePerM2": 7202500.0
        }
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 267832500.0,
          "pricePerM2": 6867500.0
        }
      }
    },
    "prices": {
      "standard": 293962500.0,
      "fullPayDiscount": 293962500.0,
      "pricePerM2": 7537500.0,
      "minPrice": 267832500.0,
      "maxPrice": 293962500.0
    }
  },
  {
    "typeCode": "1A-41",
    "rooms": 1,
    "area": 41.0,
    "title": "1 xonali shinam xonadon (41 m²)",
    "description": "Keng dahliz, alohida oshxona va yotoqxona, qulay sanuzel hamda ochiq shinam balkon.",
    "image": "/41.jpg",
    "onlyFullPayment": false,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 309037500.0,
          "pricePerM2": 7537500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 309037500.0,
            "pricePerM2": 7537500.0,
            "initialPayment": 309037500.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (60 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 461250000.0,
            "pricePerM2": 11250000.0,
            "initialPayment": 60000000.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 281250000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 415125000.0,
            "pricePerM2": 10125000.0,
            "initialPayment": 124537500.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 170587500.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 392062500.0,
            "pricePerM2": 9562500.0,
            "initialPayment": 196031250.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 76031250.0,
            "isInstallment": true
          }
        ]
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 295302500.0,
          "pricePerM2": 7202500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 295302500.0,
            "pricePerM2": 7202500.0,
            "initialPayment": 295302500.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (60 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 440750000.0,
            "pricePerM2": 10750000.0,
            "initialPayment": 60000000.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 260750000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 396675000.0,
            "pricePerM2": 9675000.0,
            "initialPayment": 119002500.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 157672500.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 374637500.0,
            "pricePerM2": 9137500.0,
            "initialPayment": 187318750.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 67318750.0,
            "isInstallment": true
          }
        ]
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 281567500.0,
          "pricePerM2": 6867500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 281567500.0,
            "pricePerM2": 6867500.0,
            "initialPayment": 281567500.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (60 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 420250000.0,
            "pricePerM2": 10250000.0,
            "initialPayment": 60000000.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 240250000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 378225000.0,
            "pricePerM2": 9225000.0,
            "initialPayment": 113467500.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 144757500.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 357212500.0,
            "pricePerM2": 8712500.0,
            "initialPayment": 178606250.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 58606250.0,
            "isInstallment": true
          }
        ]
      }
    },
    "prices": {
      "standard": 461250000.0,
      "fullPayDiscount": 309037500.0,
      "pricePerM2": 7537500.0,
      "minPrice": 281567500.0,
      "maxPrice": 461250000.0
    }
  },
  {
    "typeCode": "1A-43",
    "rooms": 1,
    "area": 43.0,
    "title": "1 xonali keng xonadon (43 m²)",
    "description": "Zamonaviy ergonomik planirovka, yorug‘ mehmondosh xona, to‘liq bo‘lingan devorlar va sifatli Akfa romlar.",
    "image": "/43.jpg",
    "onlyFullPayment": false,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 324112500.0,
          "pricePerM2": 7537500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 324112500.0,
            "pricePerM2": 7537500.0,
            "initialPayment": 324112500.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (60 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 483750000.0,
            "pricePerM2": 11250000.0,
            "initialPayment": 60000000.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 303750000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 483750000.0,
            "pricePerM2": 11250000.0,
            "initialPayment": 145125000.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 218625000.0,
            "isInstallment": true
          }
        ]
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 309707500.0,
          "pricePerM2": 7202500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 309707500.0,
            "pricePerM2": 7202500.0,
            "initialPayment": 309707500.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (60 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 462250000.0,
            "pricePerM2": 10750000.0,
            "initialPayment": 60000000.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 282250000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 462250000.0,
            "pricePerM2": 10750000.0,
            "initialPayment": 138675000.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 203575000.0,
            "isInstallment": true
          }
        ]
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 295302500.0,
          "pricePerM2": 6867500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 295302500.0,
            "pricePerM2": 6867500.0,
            "initialPayment": 295302500.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (60 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 440750000.0,
            "pricePerM2": 10250000.0,
            "initialPayment": 60000000.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 260750000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 440750000.0,
            "pricePerM2": 10250000.0,
            "initialPayment": 132225000.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 188525000.0,
            "isInstallment": true
          }
        ]
      }
    },
    "prices": {
      "standard": 483750000.0,
      "fullPayDiscount": 324112500.0,
      "pricePerM2": 7537500.0,
      "minPrice": 295302500.0,
      "maxPrice": 483750000.0
    }
  },
  {
    "typeCode": "1A-49",
    "rooms": 1,
    "area": 49.0,
    "title": "1 xonali premium xonadon (49 m²)",
    "description": "Katta maydonli bir xonali format, xohishga ko‘ra yevro-2 formatga aylantirish imkoniyati.",
    "image": "/49.jpg",
    "onlyFullPayment": false,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 369337500.0,
          "pricePerM2": 7537500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 369337500.0,
            "pricePerM2": 7537500.0,
            "initialPayment": 369337500.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (60 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 551250000.0,
            "pricePerM2": 11250000.0,
            "initialPayment": 60000000.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 371250000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 496125000.0,
            "pricePerM2": 10125000.0,
            "initialPayment": 148837500.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 227287500.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 468562500.0,
            "pricePerM2": 9562500.0,
            "initialPayment": 234281250.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 114281250.0,
            "isInstallment": true
          }
        ]
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 352922500.0,
          "pricePerM2": 7202500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 352922500.0,
            "pricePerM2": 7202500.0,
            "initialPayment": 352922500.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (60 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 526750000.0,
            "pricePerM2": 10750000.0,
            "initialPayment": 60000000.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 346750000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 474075000.0,
            "pricePerM2": 9675000.0,
            "initialPayment": 142222500.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 211852500.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 447737500.0,
            "pricePerM2": 9137500.0,
            "initialPayment": 223868750.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 103868750.0,
            "isInstallment": true
          }
        ]
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 336507500.0,
          "pricePerM2": 6867500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 336507500.0,
            "pricePerM2": 6867500.0,
            "initialPayment": 336507500.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (60 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 502250000.0,
            "pricePerM2": 10250000.0,
            "initialPayment": 60000000.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 322250000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 452025000.0,
            "pricePerM2": 9225000.0,
            "initialPayment": 135607500.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 196417500.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 426912500.0,
            "pricePerM2": 8712500.0,
            "initialPayment": 213456250.0,
            "monthlyPayment": 4000000.0,
            "paid30m": 120000000.0,
            "remainingBalance": 93456250.0,
            "isInstallment": true
          }
        ]
      }
    },
    "prices": {
      "standard": 551250000.0,
      "fullPayDiscount": 369337500.0,
      "pricePerM2": 7537500.0,
      "minPrice": 336507500.0,
      "maxPrice": 551250000.0
    }
  },
  {
    "typeCode": "2A-54",
    "rooms": 2,
    "area": 54.0,
    "title": "2 xonali oilaviy xonadon (54 m²)",
    "description": "Alohida kattalar va bolalar xonasi, keng oshxona, shinam yo‘lak va qulay sanuzel.",
    "image": "/54.jpg",
    "onlyFullPayment": false,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 388935000.0,
          "pricePerM2": 7202500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 388935000.0,
            "pricePerM2": 7202500.0,
            "initialPayment": 388935000.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (75 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 580500000.0,
            "pricePerM2": 10750000.0,
            "initialPayment": 75000000.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 355500000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 522450000.0,
            "pricePerM2": 9675000.0,
            "initialPayment": 156735000.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 215715000.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 493425000.0,
            "pricePerM2": 9137500.0,
            "initialPayment": 246712500.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 96712500.0,
            "isInstallment": true
          }
        ]
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 370845000.0,
          "pricePerM2": 6867500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 370845000.0,
            "pricePerM2": 6867500.0,
            "initialPayment": 370845000.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (75 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 553500000.0,
            "pricePerM2": 10250000.0,
            "initialPayment": 75000000.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 328500000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 498150000.0,
            "pricePerM2": 9225000.0,
            "initialPayment": 149445000.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 198705000.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 470475000.0,
            "pricePerM2": 8712500.0,
            "initialPayment": 235237500.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 85237500.0,
            "isInstallment": true
          }
        ]
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 352755000.0,
          "pricePerM2": 6532500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 352755000.0,
            "pricePerM2": 6532500.0,
            "initialPayment": 352755000.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (75 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 526500000.0,
            "pricePerM2": 9750000.0,
            "initialPayment": 75000000.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 301500000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 473850000.0,
            "pricePerM2": 8775000.0,
            "initialPayment": 142155000.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 181695000.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 447525000.0,
            "pricePerM2": 8287500.0,
            "initialPayment": 223762500.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 73762500.0,
            "isInstallment": true
          }
        ]
      }
    },
    "prices": {
      "standard": 580500000.0,
      "fullPayDiscount": 388935000.0,
      "pricePerM2": 7202500.0,
      "minPrice": 352755000.0,
      "maxPrice": 580500000.0
    }
  },
  {
    "typeCode": "2A-55",
    "rooms": 2,
    "area": 55.0,
    "title": "2 xonali keng oilaviy xonadon (55 m²)",
    "description": "Yorug‘ ikki tomonlama derazalar, keng mehmondosh oshxona va 2 ta mustaqil xona.",
    "image": "/55.jpg",
    "onlyFullPayment": false,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 396137500.0,
          "pricePerM2": 7202500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 396137500.0,
            "pricePerM2": 7202500.0,
            "initialPayment": 396137500.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (75 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 591250000.0,
            "pricePerM2": 10750000.0,
            "initialPayment": 75000000.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 366250000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 532125000.0,
            "pricePerM2": 9675000.0,
            "initialPayment": 159637500.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 222487500.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 502562500.0,
            "pricePerM2": 9137500.0,
            "initialPayment": 251281250.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 101281250.0,
            "isInstallment": true
          }
        ]
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 377712500.0,
          "pricePerM2": 6867500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 377712500.0,
            "pricePerM2": 6867500.0,
            "initialPayment": 377712500.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (75 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 563750000.0,
            "pricePerM2": 10250000.0,
            "initialPayment": 75000000.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 338750000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 507375000.0,
            "pricePerM2": 9225000.0,
            "initialPayment": 152212500.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 205162500.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 479187500.0,
            "pricePerM2": 8712500.0,
            "initialPayment": 239593750.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 89593750.0,
            "isInstallment": true
          }
        ]
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 359287500.0,
          "pricePerM2": 6532500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 359287500.0,
            "pricePerM2": 6532500.0,
            "initialPayment": 359287500.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (75 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 536250000.0,
            "pricePerM2": 9750000.0,
            "initialPayment": 75000000.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 311250000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 482625000.0,
            "pricePerM2": 8775000.0,
            "initialPayment": 144787500.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 187837500.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 455812500.0,
            "pricePerM2": 8287500.0,
            "initialPayment": 227906250.0,
            "monthlyPayment": 5000000.0,
            "paid30m": 150000000.0,
            "remainingBalance": 77906250.0,
            "isInstallment": true
          }
        ]
      }
    },
    "prices": {
      "standard": 591250000.0,
      "fullPayDiscount": 396137500.0,
      "pricePerM2": 7202500.0,
      "minPrice": 359287500.0,
      "maxPrice": 591250000.0
    }
  },
  {
    "typeCode": "3A-70",
    "rooms": 3,
    "area": 70.0,
    "title": "3 xonali shohona xonadon (70 m²)",
    "description": "Katta oilalar uchun mo‘ljallangan lyuks format: keng mehmonxona, 2 ta yotoqxona, 2 ta balkon va oshxona.",
    "image": "/70.jpg",
    "onlyFullPayment": false,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 480725000.0,
          "pricePerM2": 6867500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 480725000.0,
            "pricePerM2": 6867500.0,
            "initialPayment": 480725000.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (99 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 717500000.0,
            "pricePerM2": 10250000.0,
            "initialPayment": 99000000.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 438500000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 645750000.0,
            "pricePerM2": 9225000.0,
            "initialPayment": 193725000.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 272025000.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 609875000.0,
            "pricePerM2": 8712500.0,
            "initialPayment": 304937500.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 124937500.0,
            "isInstallment": true
          }
        ]
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 457275000.0,
          "pricePerM2": 6532500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 457275000.0,
            "pricePerM2": 6532500.0,
            "initialPayment": 457275000.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (99 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 682500000.0,
            "pricePerM2": 9750000.0,
            "initialPayment": 99000000.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 403500000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 614250000.0,
            "pricePerM2": 8775000.0,
            "initialPayment": 184275000.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 249975000.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 580125000.0,
            "pricePerM2": 8287500.0,
            "initialPayment": 290062500.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 110062500.0,
            "isInstallment": true
          }
        ]
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 433825000.0,
          "pricePerM2": 6197500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 433825000.0,
            "pricePerM2": 6197500.0,
            "initialPayment": 433825000.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (99 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 647500000.0,
            "pricePerM2": 9250000.0,
            "initialPayment": 99000000.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 368500000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 582750000.0,
            "pricePerM2": 8325000.0,
            "initialPayment": 174825000.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 227925000.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 550375000.0,
            "pricePerM2": 7862500.0,
            "initialPayment": 275187500.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 95187500.0,
            "isInstallment": true
          }
        ]
      }
    },
    "prices": {
      "standard": 717500000.0,
      "fullPayDiscount": 480725000.0,
      "pricePerM2": 6867500.0,
      "minPrice": 433825000.0,
      "maxPrice": 717500000.0
    }
  },
  {
    "typeCode": "3A-77",
    "rooms": 3,
    "area": 77.0,
    "title": "3 xonali keng qulay xonadon (77 m²)",
    "description": "Maksimal qulaylik va erkinlik. Katta dahliz, vitraj oynalar va keng yashash maydoni.",
    "image": "/77.jpg",
    "onlyFullPayment": false,
    "floorsData": {
      "2-4": {
        "floorLabel": "2-3-4-qavatlar",
        "badge": "Talabgir qavatlar",
        "fullPayment": {
          "totalPrice": 528797500.0,
          "pricePerM2": 6867500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 528797500.0,
            "pricePerM2": 6867500.0,
            "initialPayment": 528797500.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (99 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 789250000.0,
            "pricePerM2": 10250000.0,
            "initialPayment": 99000000.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 510250000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 710325000.0,
            "pricePerM2": 9225000.0,
            "initialPayment": 213097500.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 317227500.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 670862500.0,
            "pricePerM2": 8712500.0,
            "initialPayment": 335431250.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 155431250.0,
            "isInstallment": true
          }
        ]
      },
      "5-8": {
        "floorLabel": "5-6-7-8-qavatlar",
        "badge": "Arzonroq narx",
        "fullPayment": {
          "totalPrice": 503002500.0,
          "pricePerM2": 6532500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 503002500.0,
            "pricePerM2": 6532500.0,
            "initialPayment": 503002500.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (99 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 750750000.0,
            "pricePerM2": 9750000.0,
            "initialPayment": 99000000.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 471750000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 675675000.0,
            "pricePerM2": 8775000.0,
            "initialPayment": 202702500.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 292972500.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 638137500.0,
            "pricePerM2": 8287500.0,
            "initialPayment": 319068750.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 139068750.0,
            "isInstallment": true
          }
        ]
      },
      "9-12": {
        "floorLabel": "9-10-11-12-qavatlar",
        "badge": "Eng hamyonbop",
        "fullPayment": {
          "totalPrice": 477207500.0,
          "pricePerM2": 6197500.0
        },
        "paymentPlans": [
          {
            "id": "plan_full",
            "name": "100% to‘lov",
            "discountBadge": "33% chegirma",
            "totalPrice": 477207500.0,
            "pricePerM2": 6197500.0,
            "initialPayment": 477207500.0,
            "monthlyPayment": 0,
            "paid30m": 0,
            "remainingBalance": 0,
            "isInstallment": false
          },
          {
            "id": "plan_fixed",
            "name": "Standart (99 mln bosh to‘lov)",
            "discountBadge": "0% ustama",
            "totalPrice": 712250000.0,
            "pricePerM2": 9250000.0,
            "initialPayment": 99000000.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 433250000.0,
            "isInstallment": true
          },
          {
            "id": "plan_30",
            "name": "30% bosh to‘lov",
            "discountBadge": "10% chegirma",
            "totalPrice": 641025000.0,
            "pricePerM2": 8325000.0,
            "initialPayment": 192307500.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 268717500.0,
            "isInstallment": true
          },
          {
            "id": "plan_50",
            "name": "50% bosh to‘lov",
            "discountBadge": "15% chegirma",
            "totalPrice": 605412500.0,
            "pricePerM2": 7862500.0,
            "initialPayment": 302706250.0,
            "monthlyPayment": 6000000.0,
            "paid30m": 180000000.0,
            "remainingBalance": 122706250.0,
            "isInstallment": true
          }
        ]
      }
    },
    "prices": {
      "standard": 789250000.0,
      "fullPayDiscount": 528797500.0,
      "pricePerM2": 6867500.0,
      "minPrice": 477207500.0,
      "maxPrice": 789250000.0
    }
  }
];

export const PROJECT_DETAILS = {
  companyName: "VATAN",
  brandSubtitle: "Твой родной дом.",
  brandLogo: "/vatan-logo.png",
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
    { title: "Barcha kommunal hisoblagichlar", desc: "Elektr, sovuq suv, issiq suv va gaz hisoblagichlari o‘rnatilgan" }
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
    salesPhone: "+998946032333",
    salesPhoneFormatted: "+998 94 603 23 33",
    managerName: "Alisher",
    telegramChannel: "https://t.me/yangiqoyliq_TJM",
    handoverDate: "2028-yil 4-chorak",
    workingHours: "Har kuni: 09:00 — 18:00 (Dam olish kunlarisiz)"
  }
};

