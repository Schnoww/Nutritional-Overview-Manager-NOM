let badDate = new Date("9999-12-31T23:59:59.999Z");
let date = new Date();
let funDate = new Date("2025-04-13T23:59:59.999Z");
let newdate = new Date + 1;

const iniData = [
    // Breakfast
        { name: "Vanilla Belgian Waffle", calories: 260, prob: ['Milk, ', 'wheat, ', 'soy, ', 'gluten, ', 'vegetarian'], time: "Breakfast", location: "Marketplace", image: "../BellWaffles.jpg", date: badDate, newdate, badDate, favorite: false},
        { name: "Hash Brown Patty", calories: 150, prob: ['soy, ', 'vegetarian, ', 'vegan, '], time: "Breakfast", location: "Marketplace", image: "../HashBrownPatty.jpg", date: badDate, favorite: false },
        { name: "Omlet: Made to Order Omelet With Meat", calories: 290, prob: ['Milk, ', 'eggs'], time: "Breakfast", location: "Marketplace", image: "../OmletMadetoOrderOmeletWithMeat.jpg", date: badDate, favorite: false  },
        { name: "Omlet: Made to Order Omelet With Vegetables", calories: 290, prob: ['Milk, ', 'eggs, ', 'vegetarian'], time: "Breakfast", location: "Marketplace", image: "../OmletMadetoOrderOmeletWithVegetables.jpg", date: badDate, favorite: false  },
        { name: "Ham, Egg and Cheese Bagel", calories: 470, prob: ['Milk, ', 'eggs, ', 'wheat, ', 'soy, ', 'gluten'], time: "Breakfast", location: "Marketplace", image: "../Ham,EggandCheeseBagel.jpg", date: badDate, favorite: false  },
        { name: "Hash Browned Potatoes", calories: 470, prob: ['Milk, ', 'eggs, ', 'wheat, ', 'soy, ', 'gluten'], time: "Breakfast", location: "Marketplace", image: "../HashBrownedPotatoes.jpg", date: badDate, favorite: false  },
        { name: "Buttermilk Pancakes", calories: 180, prob: ['Milk, ', 'eggs, ', 'wheat, ', 'soy, ', 'gluten, ', 'vegetarian'], time: "Breakfast", location: "Marketplace",image: "../ButtermilkPancakes.jpg", date: badDate, favorite: false  },
        { name: "Scrambled Eggs", calories: 190, prob: ['eggs, ','vegetarian'], time: "Breakfast", location: "Marketplace",image: "../ScrambledEggs.jpg", date: badDate, favorite: false  },
        { name: "Bacon Slices", calories: 70, prob: ['N/A'], time: "Breakfast", location: "Marketplace",image: "../BaconSlices.jpg", date: badDate, favorite: false  },

    // // Lunch
        { name: "Oatmeal", calories: 110, prob: ['vegetarian, ', 'vegan'], time: "Lunch", location: "Marketplace", date: badDate, favorite: false },
        { name: "Sauteed Spinach & Caramelized Onions", calories: 45, prob: ['vegetarian, ', 'vegan, ', 'mindful'], time: "Lunch", location: "Marketplace", date: date, badDate, favorite: false },
        { name: "Butter Tofu", calories: 240, prob: ['milk, ', 'soybean, ', 'vegetarian'], time: "Lunch", location: "Marketplace", date: badDate, favorite: false },
        { name: "Butter Chicken", calories: 300, prob: ['milk'], time: "Lunch", location: "Marketplace", date: badDate, favorite: false },
        { name: "Basmati Rice With Green Peas", calories: 130, prob: ['vegetarian, ', 'vegan, ', 'mindful'], time: "Lunch", location: "Marketplace", date: badDate, favorite: false },

    // // Dinner
        { name: "Spicy Shrimp & Vegetable Stir Fry", calories: 360, prob: ['shrimp, ', 'vegan'], time: "Dinner", location: "Marketplace", date: badDate, favorite: false },
        { name: "Vegetable Fried Rice", calories: 170, prob: ['egg, ', 'wheat, ', 'soybean, ', 'gluten, ', 'vegetarian'], time: "Dinner", location: "Marketplace", date: badDate, favorite: false },
        { name: "Spicy Tofu & Vegetable Stir Fry", calories: 420, prob: ['wheat, ', 'soybeans, ','sesame, ', 'gluten, ', 'vegetarian, ', 'vegan'], time: "Dinner", location: "Marketplace", date: badDate, favorite: false },

    // WOW Menu Items
        { name: "Veggie Quesadilla", calories: 990, prob: ['milk, ', 'wheat, ', 'gluten, ', 'soy'], time: "All Day", location: "WOW", date: badDate, favorite: false },
        { name: "Santa Fe Chicken Quesadilla", calories: 990, prob: ['egg, ', 'milk, ', 'wheat, ', 'gluten, ', 'soy'], time: "All Day", location: "WOW", date: badDate, favorite: true },
        { name: "Chicken Parm Quesadilla", calories: 927, prob: ["N/A"], time: "All Day", location: "WOW", date: badDate, favorite: false }

];
export default iniData;