const PRODUCTS = [
    {
        id: 0,
        name: "Plastic Board Complete",
        src:"../imgs/priyanuch-konkaew-wYG0QiyhrVY-unsplash.jpg",
        price: 29.99,
        category:"Completes",
        featured:"true",
        description:"Squirly plastic board."
    },
    {
        id: 1,
        name: 'Flamingo Complete 8"',
        src:"../imgs/zachary-staines-jhMt5TTqJS0-unsplash.jpg",
        price: 89.99,
        category:"Completes",
        featured:"true",
        description:"Caw Caw!"
    },
    {
        id: 2,
        name: 'Tucan Complete 8.25"',
        src:"../imgs/hello-i-m-nik-wMMfcoH2j-o-unsplash.jpg",
        price: 89.99,
        category:"Completes",
        featured:"true",
        description:"For all the fruit loops fans."
    },
    {
        id: 3,
        name: 'Hands Complete 8.5"',
        src:"../imgs/niket-nigde-9N3rS-xLfkI-unsplash.jpg",
        price: 109.99,
        category:"Completes",
        featured:"true",
        description:"Hands Complete Deck"
    },
    {
        id: 4,
        name: 'Painterly Deck 8.25"',
        src:"../imgs/luis-arias-e5uBYJkgjQU-unsplash.jpg",
        price: 59.99,
        category:"Decks",
        featured:"false",
        description:"Painted Deck"
    },
    {
        id: 5,
        name: 'Born to Ride 7" Cruiser Deck',
        src:"../imgs/oleg-gospodarec-tYtabHRAYw0-unsplash.jpg",
        price: 49.99,
        category:"Decks",
        featured:"false",
        description:"Born to Ride!"
    },
    {
        id: 6,
        name: 'Lion 8.5" Deck',
        src:"../imgs/yangbeiyao-yu-XQcQcHfppo4-unsplash.jpg",
        price: 64.99,
        category:"Decks",
        featured:"true",
        description:"Rawr."
    },
    {
        id: 7,
        name: 'Not Stressed 8" Deck',
        src:"../imgs/chris-stein-x_4q8AapBbk-unsplash.jpg",
        price: 59.99,
        category:"Decks",
        featured:"false",
        description:""
    },
    {
        id: 8,
        name: 'Wood Cream 8.125"',
        src:"../imgs/maksym-zakharyak-IjPWFZncmxs-unsplash.jpg",
        price: 59.99,
        category:"Decks",
        featured:"true",
        description:"Wood Cream"
    },
    {
        id: 9,
        name: 'Silver Trucks 8"',
        src:"../imgs/travis-jones-ovwpmi_G3zE-unsplash.jpg",
        price: 49.99,
        category:"Trucks",
        featured:"false",
        description:"Silver Trucks"
    },
    {
        id: 10,
        name: 'Silver Trucks 8.5"',
        src:"../imgs/nathan-dumlao-hMnwfpg_u6A-unsplash.jpg",
        price: 49.99,
        category:"Trucks",
        featured:"false",
        description:"Silver Trucks, but wider."
    },
    {
        id: 11,
        name: "Black & Red Trucks",
        src:"../imgs/gabrielle-meschini-fvIshUFYs8I-unsplash.jpg",
        price: 49.99,
        category:"Trucks",
        featured:"false",
        description:"Black & Red Trucks"
    },
    {
        id: 12,
        name: "White Trucks",
        src:"../imgs/ryland-dean-g5IwIhDAjQg-unsplash.jpg",
        price: 49.99,
        category:"Trucks",
        featured:"false",
        description:"White Trucks"
    },
    {
        id: 13,
        name: "Black Trucks",
        src:"../imgs/keaton-dickinson-GYpaddU1cXs-unsplash.jpg",
        price: 49.99,
        category:"Trucks",
        featured:"false",
        description:"Black Trucks"
    },
    {
        id: 14,
        name: "Splatter Trucks",
        src:"../imgs/harrison-kugler-wUEpTTjlnJs-unsplash.jpg",
        price: 49.99,
        category:"Trucks",
        featured:"false",
        description:"Splatter Trucks"
    },
    {
        id: 15,
        name: "Black Wheels",
        src:"../imgs/the-nigmatic-4B6pzUjkYBo-unsplash.jpg",
        price: 29.99,
        category:"Wheels",
        featured:"false",
        description:"Black Wheels"
    },
    {
        id: 16,
        name: "Off-Road Wheels",
        src:"../imgs/colton-sturgeon-XqaH94nwtSM-unsplash.jpg",
        price: 49.99,
        category:"Wheels",
        featured:"false",
        description:"Off-Road Wheels"
    },
    {
        id: 17,
        name: "White Wheels",
        src:"../imgs/quinton-coetzee-Vc1x6tKeGf8-unsplash.jpg",
        price: 29.99,
        category:"Wheels",
        featured:"false",
        description:"White Wheels"
    },
    {
        id: 18,
        name: "Ultra Bearings",
        src:"../imgs/pexels-ovidio-rey-163909.jpg",
        price: 49.99,
        category:"Bearings",
        featured:"false",
        description:"Ultra Bearings"
    },
    {
        id: 19,
        name: "Great Bearings",
        src:"../imgs/pexels-cottonbro-4929028.jpg",
        price: 29.99,
        category:"Bearings",
        featured:"false",
        description:"Great Bearings"
    },
    {
        id: 20,
        name: "Good Bearings",
        src:"../imgs/pexels-budgeron-bach-5157775.jpg",
        price: 15.99,
        category:"Bearings",
        featured:"false",
        description:"Good Bearings"
    },
    {
        id: 21,
        name: "Tech Decks",
        src:"../imgs/lazar-gugleta-IVT4-mJKTc8-unsplash.jpg",
        price: 4.99,
        category:"Accessories",
        featured:"false",
        description:"Tech Decks"
    },
    {
        id: 22,
        name: "Socks",
        src:"../imgs/nick-page-XMg8GBzNmgA-unsplash.jpg",
        price: 14.99,
        category:"Accessories",
        featured:"false",
        description:"Socks"
    },
    {
        id: 23,
        name: "Masks",
        src:"../imgs/ibrahim-boran-L06w0Qkjgmc-unsplash.jpg",
        price: 9.99,
        category:"Accessories",
        featured:"false",
        description:"Masks"
    },
    {
        id: 24,
        name: "Octopus Black Tee",
        src:"../imgs/michael-demoya-Dwl-zp3Os5M-unsplash.jpg",
        price: 24.99,
        category:"Clothing",
        featured:"false",
        description:"Octopus Black Tee"
    },
    {
        id: 25,
        name: "Burgundy Tee",
        src:"../imgs/nijwam-swargiary-fk4e0R8Xw9I-unsplash.jpg",
        price: 24.99,
        category:"Clothing",
        featured:"false",
        description:"Burgundy Tee"
    },
    {
        id: 26,
        name: "",
        src:"",
        price: 0,
        category:"",
        featured:"",
        description:""
    },
    {
        id: 27,
        name: "",
        src:"",
        price: 0,
        category:"",
        featured:"",
        description:""
    },
    {
        id: 28,
        name: "",
        src:"",
        price: 0,
        category:"",
        featured:"",
        description:""
    },
    {
        id: 29,
        name: "",
        src:"",
        price: 0,
        category:"",
        featured:"",
        description:""
    },
    {
        id: 30,
        name: "",
        src:"",
        price: 0,
        category:"",
        featured:"",
        description:""
    },
    {
        id: 31,
        name: "",
        src:"",
        price: 0,
        description:""
    },
    {
        id: 32,
        name: "",
        src:"",
        price: 0,
        category:"",
        featured:"",
        description:""
    },
    {
        id: 33,
        name: "",
        src:"",
        price: 0,
        category:"",
        featured:"",
        description:""
    },
    {
        id: 34,
        name: "",
        src:"",
        price: 0,
        category:"",
        featured:"",
        description:""
    },
    {
        id: 35,
        name: "",
        src:"",
        price: 0,
        category:"",
        featured:"",
        description:""
    }
    



];

export default PRODUCTS;