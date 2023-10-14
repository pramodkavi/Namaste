export const babyDetails = [
    {
        id: 1,
        name: 'Kasun Perera',
        height: '50',
        year: '1',
        month: '5',
        weight: '4.6',
        image: require('../assets/images/baby1.png'),
        desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.',
        dob: '2022-09-29',
    },

    {
        id: 2,
        name: 'Saduni Perera',
        height: '102',
        year: '2',
        month: '6',
        weight: '4.3',
        image: require('../assets/images/baby3.png'),
        desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.',
        dob: '2022-09-29',
    },

    {
        id: 3,
        name: 'Nimash Pamud',
        height: '58',
        year: '3',
        month: '1',
        weight: '4.0',
        image: require('../assets/images/baby2.png'),
        desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.',
        dob: '2022-09-29',
    },


]

export const mainFeatures = [
    {
        name: 'Feeding',
        image: require('../assets/images/milkBottle.png'),
        location: 'Feeding',
    },

    {
        name: 'Sleeping',
        image: require('../assets/images/sleep.png'),
        location: 'Sleeping',
    },

    {
        name: 'Diaper',
        image: require('../assets/images/diaper.png'),
        location: 'DiaperScreen',

    },

    {
        name: 'Growth',
        image: require('../assets/images/growth.png'),
        location: 'GrowthDetails',
    },

    {
        name: 'Symptom',
        image: require('../assets/images/symptom.png'),
        location: 'SymptomList',
    },

    {
        name: 'Immunization',
        image: require('../assets/images/syringe.png'),
        location: 'ImmunizationScreen',
    },

    {
        name: 'Expense',
        image: require('../assets/images/expense.png'),
        location: 'Expense',
    },

    {
        name: 'Milestones',
        image: require('../assets/images/milestones.png'),
        location: 'Milestones',
    },
]

export const sortCategoryData = ['All', 'Popular', 'Recommended', 'More'];

export const categoriesData = [
    {
        title: 'Ocean',
        image: require('../assets/images/ocean.png')
    },
    {
        title: 'Mountain',
        image: require('../assets/images/mountain.png')
    },
    {
        title: 'Camp',
        image: require('../assets/images/camp.png')
    },
    {
        title: 'Sunset',
        image: require('../assets/images/sunset.png')
    },
    {
        title: 'Hiking',
        image: require('../assets/images/hiking.png')
    },
    {
        title: 'Beach',
        image: require('../assets/images/beach.png')
    },
    {
        title: 'Forest',
        image: require('../assets/images/forest.png')
    },

]
export const destinationData = [
    {
        title: 'Digital Wellbeing',
        duration: '12 Days',
        distance: '400 KM',
        weather: '20 C',
        price: 1200,
        shortDescription: "11 application have been controlled",
        image: require('../assets/images/hotel.png'),
        location: 'DigitalWellbeing',
    },
    {
        title: 'Relaxing',
        duration: '7 Days',
        distance: '450 KM',
        weather: '30 C',
        price: 3000,
        shortDescription: "Maditation/Yoga/Excersices.",
        longDescription: "Itsukushima Shrine is a Shinto shrine on the island of Itsukushima, best known for its 'floating' torii gate. It is in the city of Hatsukaichi in Hiroshima Prefecture in Japan, accessible from the mainland by ferry at Miyajimaguchi Station.",
        image: require('../assets/images/island.png'),
        location: 'Relaxing',
    },

    {
        title: 'Health',
        duration: '5 Days',
        distance: '299 KM',
        weather: '14 C',
        price: 1000,
        shortDescription: "Heart reate : 67 bpm",
        longDescription: "Babusar Pass or Babusar Top is a mountain pass in Pakistan at the north of the 150 km long Kaghan Valley, connecting it via the Thak Nala with Chilas on the Karakoram Highway. It is the highest point in Kaghan Valley that can be easily accessed by cars.",
        image: require('../assets/images/camp.png'),
        location: 'Health',
    },
    {
        title: 'Activites',
        duration: '20 Days',
        distance: '604 KM',
        weather: '34 C',
        price: 400,
        shortDescription: "8 Acitivites ",
        longDescription: "Tōdai-ji is a Buddhist temple complex that was once one of the powerful Seven Great Temples, located in the city of Nara, Japan. Though it was originally founded in the year 738 CE, Tōdai-ji was not opened until the year 752 CE.",
        image: require('../assets/images/forest.png'),
        location: 'GrowthDetails',
    },
]

export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Matara Bath Kade',
            image: require('../assets/images/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: 'Colombo 4',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 2,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 3,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
            ]

        },
        {
            id: 2,
            name: 'Pinnawala Food',
            image: require('../assets/images/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '30/2 street, Pinnwala',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 2,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 3,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
            ]

        },
        {
            id: 3,
            name: 'Papa Johns',
            image: require('../assets/images/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 2,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 3,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pizzaDish.png')
                },
            ]

        }
    ]
}
export const categories = [
    {
        id: 1,
        name: 'All',
        image: require('../assets/images/recommand.png'),
    },
    {
        id: 2,
        name: 'Maditate',
        image: require('../assets/images/maditate.png'),
    },
    {
        id: 3,
        name: 'Yoga',
        image: require('../assets/images/flower.png'),
    },
    {
        id: 4,
        name: 'Focus',
        image: require('../assets/images/focus.png'),
    },
    {
        id: 5,
        name: 'Read',
        image: require('../assets/images/read.png'),
    },
    {
        id: 5,
        name: 'Sleep',
        image: require('../assets/images/sleep.png'),
    }
]

export const articals = {
    id: 1,
    title: 'For You',
    description: 'Featured Articals',
    restaurants: [
        {
            id: 1,
            name: 'Letting you mind to fall a sleep',
            image: require('../assets/images/art2.png'),
            address: 'Dr.Vishwa Kumar',


        },
        {
            id: 2,
            name: 'Self-love and fulfilment',
            image: require('../assets/images/art1.png'),
            address: 'Dr.Kapila Silva',
        },
        {
            id: 3,
            name: 'Inhale deeply through your nose',
            image: require('../assets/images/art3.png'),
            address: 'Dr.Jhon Wickremasinghe',
        }
    ]
}