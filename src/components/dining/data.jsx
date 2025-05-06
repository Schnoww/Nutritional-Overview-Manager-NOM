let badDate = new Date("9999-12-31T23:59:59.999Z");
let date = new Date();
let funDate = new Date("2025-04-13T23:59:59.999Z");
let newdate = new Date + 1;

const iniData = [
    // Breakfast
        { name: "Vanilla Belgian Waffle", calories: 260, vegan: true, vegetarian: true, prob: ['Milk, ', 'wheat, ', 'soy, ', 'gluten, ', 'vegetarian'], time: "Breakfast", location: "Marketplace", image: "../BellWaffles.jpg", date: badDate, newdate, badDate, favorite: false},
        { name: "Hash Brown Patty", vega: true, vegetarian: true, calories: 150, prob: ['soy, ', 'vegetarian, ', 'vegan, '], time: "Breakfast", location: "FOD", image: "../HashBrownPatty.jpg", date: badDate, favorite: false },
        { name: "Omlet: Made to Order Omelet With Meat", calories: 290, keto: true, prob: ['Milk, ', 'eggs'], time: "Breakfast", location: "Marketplace", image: "../OmletMadetoOrderOmeletWithMeat.jpg", date: badDate, favorite: false  },
        { name: "Omlet: Made to Order Omelet With Vegetables", calories: 290, keto: true, vegetarian: true, prob: ['Milk, ', 'eggs, ', 'vegetarian'], time: "Breakfast", location: "Marketplace", image: "../OmletMadetoOrderOmeletWithVegetables.jpg", date: badDate, favorite: false  },
        { name: "Ham, Egg and Cheese Bagel", calories: 470, prob: ['Milk, ', 'eggs, ', 'wheat, ', 'soy, ', 'gluten'], time: "Breakfast", location: "Marketplace", image: "../Ham,EggandCheeseBagel.jpg", date: badDate, favorite: false  },
        { name: "Hash Browned Potatoes", calories: 470, prob: ['Milk, ', 'eggs, ', 'wheat, ', 'soy, ', 'gluten'], time: "Breakfast", location: "FOD", image: "../HashBrownedPotatoes.jpg", date: badDate, favorite: false  },
        { name: "Buttermilk Pancakes", calories: 180, vegetarian: true, prob: ['Milk, ', 'eggs, ', 'wheat, ', 'soy, ', 'gluten, ', 'vegetarian'], time: "FOD", location: "Marketplace",image: "../ButtermilkPancakes.jpg", date: badDate, favorite: false  },
        { name: "Scrambled Eggs", calories: 190, vegetarian: true, prob: ['eggs, ','vegetarian'], time: "Breakfast", location: "FOD",image: "../ScrambledEggs.jpg", date: badDate, favorite: false  },
        { name: "Bacon Slices", calories: 70, prob: ['N/A'], time: "Breakfast", location: "FOD",image: "../BaconSlices.jpg", date: badDate, favorite: false  },

    // // Lunch
        { name: "Oatmeal", calories: 110, prob: ['vegetarian, ', 'vegan'], time: "Lunch", location: "FOD", image: "../Oatmeal.jpg", date: badDate, favorite: false },
        { name: "Sauteed Spinach & Caramelized Onions", dairyfree: true, keto: true, vegan: true, vegetarian: true, calories: 45, prob: ['vegetarian, ', 'vegan, ', 'mindful'], image: "../Spinach.jpg", time: "Lunch", location: "Marketplace", date: date, badDate, favorite: false },
        { name: "Butter Tofu", calories: 240, vegetarian: true, prob: ['milk, ', 'soybean, ', 'vegetarian'], time: "Lunch", image: "../Tofu.jpg", location: "Marketplace", date: badDate, favorite: false },
        { name: "Butter Chicken", calories: 300, prob: ['milk'], time: "Lunch", location: "Marketplace", image: "../BUTTERCHICKEN.jpg", date: badDate, favorite: false },
        { name: "Basmati Rice With Green Peas", calories: 130, dairyfree: true, vegan: true, vegetarian: true, prob: ['vegetarian, ', 'vegan, ', 'mindful'], time: "Lunch", location: "FOD", image: "../RicenPea.jpg", date: badDate, favorite: false },

    // // Dinner
        { name: "Spicy Shrimp & Vegetable Stir Fry", calories: 360, dairyfree: true, keto: true, pescatarian: true, prob: ['shrimp '], time: "Lunch", location: "FOD", image: "../ShimpV.jpg", date: badDate, favorite: false },
        { name: "Vegetable Fried Rice", calories: 170, vegan: true, prob: ['egg, ', 'wheat, ', 'soybean, ', 'gluten, ', 'vegetarian'], time: "Lunch", location: "FOD", image: "../RiceV.jpg", date: badDate, favorite: false },
        { name: "Spicy Tofu & Vegetable Stir Fry",dairyfree: true, keto: true, vegan: true, vegetarian: true, calories: 420, prob: ['wheat, ', 'soybeans, ','sesame, ', 'gluten, ', 'vegetarian, ', 'vegan'], time: "Lunch", location: "FOD", image: "../TofuV.jpg", date: badDate, favorite: false },

    // // WOW Menu Items
    //     { name: "Veggie Quesadilla", calories: 990, prob: ['milk, ', 'wheat, ', 'gluten, ', 'soy'], time: "All Day", location: "WOW", date: badDate, favorite: false },
    //     { name: "Santa Fe Chicken Quesadilla", calories: 990, prob: ['egg, ', 'milk, ', 'wheat, ', 'gluten, ', 'soy'], time: "All Day", location: "WOW", date: badDate, favorite: true },
    //     { name: "Chicken Parm Quesadilla", calories: 927, prob: ["N/A"], time: "All Day", location: "WOW", date: badDate, favorite: false }

];
export default iniData;