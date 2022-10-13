export const user = {
    id: 0,
    status: true,
    username:'Ihab Hachem',
    userEmail:'ihab-hachem@outlook.com',
    userAddress:'Jdita chtaura Bekaa',
    desc:'admin' //admin driver client
}

export const adminInfo=[
{
    nbOfUsers:1500,
    nbOfOrders:1200,
    totalSell:2500,
}]

export const driverInfo=[
    {
        id:0, //1
        name:'delivery1',
        nb:1,
    },
    
]

export const driver=[
    {
        driverId:1,
        id:0,
        orderNb:1000,
        ordArr:[0,1],
        customer:'Omar Hachem',
        phone:'+96170871687',
        total:5000,
    },
    {
        driverId:0,
        id:1,
        orderNb:1001,
        ordArr:[2],
        customer:'Elie',
        phone:'+96170871687',
        total:500,
    },
    {
        driverId:0,
        id:2,
        orderNb:1002,
        ordArr:[3],
        customer:'Michel',
        phone:'+96170871687',
        total:200,
    },
    {
        driverId:0,
        id:3,
        orderNb:1003,
        ordArr:[4],
        customer:'Anthony',
        phone:'+96170871687',
        total:3000,
    },
    {
        driverId:0,
        id:4,
        orderNb:1004,
        ordArr:[5],
        customer:'Dalia',
        phone:'+96170871687',
        total:4000,
    },
    {
        driverId:0,
        id:5,
        orderNb:1004,
        ordArr:[6],
        customer:'Dalia',
        phone:'+96170871687',
        total:4000,
    },
    
]

export const services={
    delivery:1.5,
    vat:11,
    total:50.5
}

export const orders = [
    {
        userId: 0,
        oderId:0,
        orderedItem: {
            name: 'chicken burger',
            estimatedTime: 15,
            price: 12.50,
            qtty: 1,
            preference:['chicken burger','khas','banadoura','kabis'],
            checked:[true,true,true,true]
        }
    },
   
    {
        userId: 0,
        oderId:1,
        orderedItem: {
            name: 'nuggets',
            estimatedTime: 20,
            price: 10,
            qtty: 1,
            preference:['nuggets','fries','ketchup','mayonaise'],
            
        }
    },
    {
        userId: 1,
        oderId:2,
        orderedItem: {
            name: 'fish',
            estimatedTime: 10,
            price: 10,
            qtty: 2,
            preference:['fish','fries','ketchup','mayonaise'],
           
        }
    },
    {
        userId: 2,
        oderId:3,
        orderedItem: {
            name: 'fattoush',
            estimatedTime: 20,
            price: 5,
            qtty: 1,
            preference:['nuggets','fries','ketchup','mayonaise'],
       
        }
    },
    {
        userId: 3,
        oderId:4,
        orderedItem: {
            name: 'hotDog',
            estimatedTime: 20,
            price: 10,
            qtty: 1,
            preference:['hot dog','fries','ketchup','mayonaise'],
        
        }
    },
    {
        userId: 4,
        oderId:5,
        orderedItem: {
            name: 'hotDog',
            estimatedTime: 20,
            price: 10,
            qtty: 1,
            preference:['hot dog','fries','ketchup','mayonaise'],
            
        }
    },
    {
        userId: 5,
        oderId:6,
        orderedItem: {
            name: 'hotDog',
            estimatedTime: 20,
            price: 10,
            qtty: 1,
            preference:['hot dog','fries','ketchup','mayonaise'],
           
        }
    },
]


export const categories = [
    {
        id: 0,
        name: 'Salads',
        image: 'https://tse1.mm.bing.net/th?id=OIP.FwWEhdZLdiB9rRtmhrpUMgHaE9&pid=Api&P=0&w=243&h=163',
        subCategory: [
            {
                id: 0,
                name: 'Fattoush',
                description: 'Lebanese Salad',
                price: 5,
                qtty: 10,
                image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Fattoush_mixed-salad.jpg",
                ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
            {
                id: 1,
                name: 'Tabouleh',
                description: 'Lebanese Salad',
                price: 6,
                qtty: 8,
                image: "https://www.alphafoodie.com/wp-content/uploads/2020/01/Tabbouli-13-of-29.jpeg"
                , ingredients: [
                    'bandoura',
                    'ba2dounis',
                    'berghul',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
            {
                id: 2,
                name: 'Caesar Salad',
                description: 'Chicken Salad',
                price: 8,
                qtty: 8,
                image: "https://www.thespruceeats.com/thmb/S6hSYjz9-nUCPb_5bfuDIz15SwI=/2667x2000/smart/filters:no_upscale()/classic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg"
                , ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
        ]
    },
    {
        id: 1,
        name: 'Fast Food',
        image: 'https://tse2.mm.bing.net/th?id=OIP.PryfFlzzjqwk1EU4kqiKxAHaFP&pid=Api&P=0&w=251&h=177',
        subCategory: [
            {
                id: 0,
                name: 'Crispy',
                description: 'Chicken Crispy',
                price: 12,
                qtty: 8,
                image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Healthy-Crispy-chicken.jpg",
                ingredients: [
                    'crispy chicken',
                    'mayonaise',
                    'cocktail sauce',
                    'garlic sauce',
                    'fries',
                    'ketchup'
                ]
            },
            {
                id: 1,
                name: 'Twister',
                description: 'Spicy Chicken plate',
                price: 14,
                qtty: 0,
                image: "https://thumbs.dreamstime.com/b/indian-tandoori-chicken-roll-twister-side-salad-white-plate-served-chapati-buritto-68449309.jpg",
                ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
            {
                id: 2,
                name: 'Nuggets',
                description: 'Chicken plate',
                price: 13,
                qtty: 8,
                image: "https://bakeitwithlove.com/wp-content/uploads/2021/05/Air-Fryer-Chicken-Nuggets-sq.jpg"
                , ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
        ]
    },
    {
        id: 2,
        name: 'Burgers',
        image: 'https://tse2.mm.bing.net/th?id=OIP.kYB6rGQy8B-zpmV3G_M45AHaE8&pid=Api&P=0&w=283&h=188',
        subCategory: [
            {
                id: 0,
                name: 'Chicken Burger',
                description: 'Double Chicken Burger',
                price: 10,
                qtty: 8,
                image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190416-chicken-burger-082-1556204252.jpg?crop=1.00xw:0.752xh;0,0.113xh&resize=1200:*"
                , ingredients: [
                    'chicken',
                    'khas',
                    'banadoura',
                    'basal',
                    'mayonaise',
                    'ketchup'
                ]
            },
            {
                id: 1,
                name: 'Beef Burger',
                description: 'Double Beef Burger',
                price: 14,
                qtty: 8,
                image: "https://images.aws.nestle.recipes/resized/149b4419bbe2e02b3e5b87c813876a79_Beef-Burgers_944_531.jpg"
                , ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
            {
                id: 2,
                name: 'Cheese Burger',
                description: 'Double Cheese Burger',
                price: 16,
                qtty: 8,
                image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg"
                , ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]

            }
        ]
    },
    {
        id: 3,
        name: 'Hot Dog',
        image: 'https://tse3.mm.bing.net/th?id=OIP.-SQl_G7RcB51DITJy4ANWwHaE8&pid=Api&P=0&w=249&h=166',
        subCategory: [
            {
                id: 0,
                name: 'Hot Dog',
                description: 'Spicy Hot dog',
                price: 9,
                qtty: 8,
                image: "https://images.immediate.co.uk/production/volatile/sites/30/2021/07/Tropical-vegan-hot-dogs-1b1e00e.jpg",
                ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
            {
                id: 1,
                name: 'Hot Dog',
                description: 'Hot dog with vegetable',
                price: 10,
                qtty: 8,
                image: "https://images.immediate.co.uk/production/volatile/sites/2/2016/07/24724.jpg"
                , ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
            {
                id: 2,
                name: 'Cheesy Hot Dog',
                description: 'Cheesy Hot dog',
                price: 12,
                qtty: 8,
                image: "https://mobkitchen-objects.imgix.net/recipes/2021/9K8A7383.jpg?auto=format&crop=focalpoint&domain=mobkitchen-objects.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=1300&ixlib=php-3.3.1&q=82&w=1300&s=30b95e7edb69d6f6d9e78f09f75b2560"
                , ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },

        ]
    },
    {
        id: 4,
        name: 'Chinese',
        image: 'https://tse4.mm.bing.net/th?id=OIP.1x-2p5RqE4inxG3l0BYYAgHaE7&pid=Api&P=0&w=282&h=188',
        subCategory: [
            {
                id: 0,
                name: 'Green queen',
                description: 'Chinese food',
                price: 10,
                qtty: 8,
                image: "https://eatkc.com/wp-content/uploads/2019/01/Chinese.jpg"
                , ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
            {
                id: 1,
                name: 'Joy Ho',
                description: 'Chinese food',
                price: 10,
                qtty: 8,
                image: "https://yummyistanbul.com/wp-content/uploads/2022/02/chinese-food-istanbul.jpg"
                , ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
            {
                id: 2,
                name: 'Chinese wings',
                description: 'Chinese food',
                price: 10,
                qtty: 8,
                image: "https://www.kitchensanctuary.com/wp-content/uploads/2020/06/bbq-chicken-wings-square-FS-8-500x375.jpg"
                , ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
        ]
    },
    {
        id: 5,
        name: 'Mexican',
        image: 'https://tse4.mm.bing.net/th?id=OIP.Nw2_LOKAmKIVnCrpbMVKawHaE8&pid=Api&P=0&w=247&h=164',
        subCategory: [
            {
                id: 0,
                name: 'Tacos',
                description: 'Mexican plates',
                price: 18,
                qtty: 8,
                image: "https://primosmex.com/assets/images/MD03BajaWednesday.jpg"
                , ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
            {
                id: 1,
                name: 'El Alebrije',
                description: 'Mexican food',
                price: 22,
                qtty: 8,
                image: "https://wildwoodsnj.com/wp-content/uploads/2019/05/Capture.jpg"
                , ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
            {
                id: 2,
                name: 'Lazanos',
                description: 'Mexican food',
                price: 20,
                qtty: 8,
                image: "https://853556.smushcdn.com/1850159/wp-content/uploads/2020/12/tinga-sopes-mexican.jpg.jpg?lossy=1&strip=1&webp=1"
                , ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
        ]
    },
    {
        id: 6,
        name: 'Sea Foods',
        image: 'https://tse2.mm.bing.net/th?id=OIP.zduCLBbbodHFGgq8-tGcAwHaE8&pid=Api&P=0&w=257&h=171',
        subCategory: [
            {
                id: 0,
                name: 'Salmon',
                description: 'Sea food',
                price: 30,
                qtty: 8,
                image: "https://www.eatright.org/-/media/homefoodsafety/safetytips/food/keeping-your-seafood-safe-518087608.jpg"
                , ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
            {
                id: 1,
                name: 'Fish mix',
                description: 'Sea food',
                price: 33,
                qtty: 8,
                image: "https://media.istockphoto.com/photos/seafood-platter-grilled-lobster-shrimps-scallops-langoustines-octopus-picture-id1305699663?k=20&m=1305699663&s=612x612&w=0&h=x1FHZSXT9H8ttwoD6oDtBKB19QQdDml9ZmY_sZqHuNc="
                , ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
            {
                id: 2,
                name: 'shrimp',
                description: 'Sea food',
                price: 35,
                qtty: 8,
                image: "https://healthyrecipesblogs.com/wp-content/uploads/2021/02/seafood-mix-feature-2021.jpg"
                , ingredients: [
                    'bandoura',
                    'khyar',
                    'khas',
                    'hamoud',
                    'zayt',
                    'basal'
                ]
            },
        ]
    }


]

