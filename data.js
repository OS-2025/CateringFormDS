const packages = {
    basic: {
        name: "Anoush’ella Armenian Buffet",
        price: 13.50,
        subgroups: [
            {
                name: "Grains",
                limit: 2, // Лимит выбора для этой подгруппы
                items: [
                    {
                        name: "Lentil rice",
                        description: "Romaine lettuce, croutons, parmesan cheese, Caesar dressing.",
                        allergens: ["dairy", "gluten"]
                    },
                    {
                        name: "Brown rice",
                        description: "Tomatoes, cucumbers, red onion, feta cheese, olives, olive oil.",
                        allergens: ["dairy"]
                    },
                    {
                        name: "Toasted couscous",
                        description: "Cheekpeas, cucumbers, olives, olive oil.",
                        allergens: ["Vegitarian"]
                    }
                ]
            },
            {
                name: "Mezze",
                limit: 1,
                items: [
                    {
                        name: "hummus",
                        description: "Grilled chicken breast with herbs.",
                        allergens: []
                    },
                    {
                        name: "babaganoush",
                        description: "Juicy beef steak with mashed potatoes.",
                        allergens: []
                    }
                ]
            }
        ]
    },
    premium: {
        name: "M’anoush Platter",
        price: 15,
        subgroups: [
            // Аналогично Armenian, но с другими блюдами
        ]
    },
    luxury: {
        name: "Luxury Package",
        price: 30,
        subgroups: [
            // Аналогично Basic Package, но с другими блюдами
        ]
    }
};
