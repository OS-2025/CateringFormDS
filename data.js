const packages = {
    basic: {
        name: "Basic Package",
        price: 10,
        subgroups: [
            {
                name: "Salads",
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
                    {
                        name: "Caprese Salad",
                        description: "Tomatoes, fresh mozzarella, basil, balsamic glaze.",
                        allergens: ["dairy"]
                    },
                    {
                        name: "Waldorf Salad",
                        description: "Apples, celery, walnuts, grapes, mayonnaise.",
                        allergens: ["nuts"]
                    },
                    {
                        name: "Coleslaw",
                        description: "Cabbage, carrots, mayonnaise, vinegar, sugar.",
                        allergens: []
                    }
                ]
            },
            {
                name: "Main Courses",
                items: [
                    {
                        name: "Grilled Chicken",
                        description: "Grilled chicken breast with herbs.",
                        allergens: []
                    },
                    {
                        name: "Beef Steak",
                        description: "Grilled beef steak with garlic butter.",
                        allergens: ["dairy"]
                    },
                    {
                        name: "Vegetable Stir Fry",
                        description: "Mixed vegetables stir-fried in soy sauce.",
                        allergens: ["gluten"]
                    },
                    {
                        name: "Pasta Carbonara",
                        description: "Spaghetti with creamy sauce, bacon, and parmesan.",
                        allergens: ["dairy", "gluten"]
                    },
                    {
                        name: "Fish and Chips",
                        description: "Battered fish with fries.",
                        allergens: ["gluten"]
                    }
                ]
            },
            {
                name: "Desserts",
                items: [
                    {
                        name: "Chocolate Cake",
                        description: "Rich chocolate cake with chocolate frosting.",
                        allergens: ["dairy", "gluten"]
                    },
                    {
                        name: "Cheesecake",
                        description: "Creamy cheesecake with berry topping.",
                        allergens: ["dairy", "gluten"]
                    },
                    {
                        name: "Fruit Tart",
                        description: "Pastry crust with custard and fresh fruits.",
                        allergens: ["dairy", "gluten"]
                    },
                    {
                        name: "Ice Cream",
                        description: "Vanilla ice cream with chocolate sauce.",
                        allergens: ["dairy"]
                    },
                    {
                        name: "Tiramisu",
                        description: "Coffee-flavored dessert with mascarpone cheese.",
                        allergens: ["dairy", "gluten"]
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
