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
                        name: "Caesar Salad",
                        description: "Romaine lettuce, croutons, parmesan cheese, Caesar dressing.",
                        allergens: ["dairy", "gluten"]
                    },
                    {
                        name: "Greek Salad",
                        description: "Tomatoes, cucumbers, red onion, feta cheese, olives, olive oil.",
                        allergens: ["dairy"]
                    },
                    // Другие блюда
                ]
            },
            // Другие подгруппы
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
