const packages = {
    basic: {
        name: "Basic Package",
        price: 10,
        subgroups: [
            {
                name: "Salads",
                limit: 2, // Лимит выбора для этой подгруппы
                items: [
                    {
                        name: "Pork",
                        description: "Romaine lettuce, croutons, parmesan cheese, Caesar dressing.",
                        allergens: ["dairy", "gluten"]
                    },
                    {
                        name: "Greek Salad",
                        description: "Tomatoes, cucumbers, red onion, feta cheese, olives, olive oil.",
                        allergens: ["dairy"]
                    },
                    {
                        name: "Hummus",
                        description: "Cheekpeas, cucumbers, olives, olive oil.",
                        allergens: ["Vegitarian"]
                    }
                ]
            },
            {
                name: "Main Courses",
                limit: 1,
                items: [
                    {
                        name: "Grilled Chicken",
                        description: "Grilled chicken breast with herbs.",
                        allergens: []
                    },
                    {
                        name: "Beef Steak",
                        description: "Juicy beef steak with mashed potatoes.",
                        allergens: []
                    }
                ]
            }
        ]
    },
    premium: {
        name: "Premium Package",
        price: 20,
        subgroups: [
            // Аналогично Basic Package, но с другими блюдами
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
