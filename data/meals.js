const meals = [
    {title: 'Veg Pizza', categories: ['Italian', 'American'], imageUrl: 'https://recipes.timesofindia.com/thumb/53351352.cms?imgsize=151967&width=800&height=800',
     instructions: `Cut the veges into strips and pan-fry in a little butter. When they are just done, toss them in a large tablespoon of pesto. Keep warm in a very low oven.
     Cut the sun-dried tomatoes into strips and mix with ½ the goats cheese. Pop in the oven to warm.
     In a pot of boiling water, cook the lasagna sheets and lay onto a baking tray. Cut them in half.
     `},
    {title: 'Maki rolls', categories: ['Japanese', 'Light & Lovely'], imageUrl: 'https://i.ytimg.com/vi/SeQQizcFGls/maxresdefault.jpg',
     instructions: `Cut the crab into strips and pan-fry in a little butter. When they are just done, toss them in a large tablespoon of pesto. Keep warm in a very low oven.
     Cut the sun-dried tomatoes into strips and mix with ½ the goats cheese. Pop in the oven to warm.
     In a pot of boiling water, cook the lasagna sheets and lay onto a baking tray. Cut them in half.
     `},
    {title: 'Tandoori chicken', categories: ['Indian'], imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-tandori-1526595014.jpg',
     instructions: `Cut the chicken breast into strips and pan-fry in a little butter. When they are just done, toss them in a large tablespoon of pesto. Keep warm in a very low oven.
     Cut the sun-dried tomatoes into strips and mix with ½ the goats cheese. Pop in the oven to warm.
     In a pot of boiling water, cook the lasagna sheets and lay onto a baking tray. Cut them in half.
     `},
    {title: 'Caesar salad', categories: ['Light & Lovely', 'American'], imageUrl: 'https://www.simplyrecipes.com/wp-content/uploads/2009/09/caesar-salad-horiz-a-1800.jpg',
     instructions: `Cut the chicken breast into strips and pan-fry in a little butter. When they are just done, toss them in a large tablespoon of pesto. Keep warm in a very low oven.
     Cut the sun-dried tomatoes into strips and mix with ½ the goats cheese. Pop in the oven to warm.
     In a pot of boiling water, cook the lasagna sheets and lay onto a baking tray. Cut them in half.
     `},
    {title: 'Cheese burger', categories: ['American'], imageUrl: 'https://prods3.imgix.net/images/articles/2017_05/Facebook-shake-shack-cheese-burger-recipe.jpg',
     instructions: `Cut the patty into strips and pan-fry in a little butter. When they are just done, toss them in a large tablespoon of pesto. Keep warm in a very low oven.
     Cut the sun-dried tomatoes into strips and mix with ½ the goats cheese. Pop in the oven to warm.
     In a pot of boiling water, cook the lasagna sheets and lay onto a baking tray. Cut them in half.
     `},
    {title: 'Seafood pasta', categories: ['Italian', 'Exotic'], imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/197736_640x428.jpg',
     instructions: `Cut the squid into strips and pan-fry in a little butter. When they are just done, toss them in a large tablespoon of pesto. Keep warm in a very low oven.
     Cut the sun-dried tomatoes into strips and mix with ½ the goats cheese. Pop in the oven to warm.
     In a pot of boiling water, cook the lasagna sheets and lay onto a baking tray. Cut them in half.
     `},
    {title: 'Chicken curry', categories: ['Indian'], imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/01/easy-chicken-curry.jpg?itok=CgZ_ngWo',
     instructions: `Cut the chicken breast into strips and pan-fry in a little butter. When they are just done, toss them in a large tablespoon of pesto. Keep warm in a very low oven.
     Cut the sun-dried tomatoes into strips and mix with ½ the goats cheese. Pop in the oven to warm.
     In a pot of boiling water, cook the lasagna sheets and lay onto a baking tray. Cut them in half.
     `},
    {title: 'Beef chilli', categories: ['American'], imageUrl: 'https://www.thespruceeats.com/thmb/aGIPQHflB3cKeUOFj2P_K8VSr9M=/1500x844/smart/filters:no_upscale()/easy-ground-beef-chili-3053290-7-5b3f8cff46e0fb00375b1d6a.jpg',
     instructions: `Cut the beef into strips and pan-fry in a little butter. When they are just done, toss them in a large tablespoon of pesto. Keep warm in a very low oven.
     Cut the sun-dried tomatoes into strips and mix with ½ the goats cheese. Pop in the oven to warm.
     In a pot of boiling water, cook the lasagna sheets and lay onto a baking tray. Cut them in half.
     `},
    {title: 'Crab rolls', categories: ['Japanese', 'Light & Lovely'], imageUrl: 'https://www.foxvalleyfoodie.com/wp-content/uploads/2015/01/imitation-crab-roll-recipe.jpg',
     instructions: `Cut the crab into strips and pan-fry in a little butter. When they are just done, toss them in a large tablespoon of pesto. Keep warm in a very low oven.
     Cut the sun-dried tomatoes into strips and mix with ½ the goats cheese. Pop in the oven to warm.
     In a pot of boiling water, cook the lasagna sheets and lay onto a baking tray. Cut them in half.
     `},
    {title: 'Veg fried rice', categories: ['Indian', 'American'], imageUrl: 'https://www.whiskaffair.com/wp-content/uploads/2017/10/Vegetable-Fried-Rice-3.jpg',
     instructions: `Cut the veges into strips and pan-fry in a little butter. When they are just done, toss them in a large tablespoon of pesto. Keep warm in a very low oven.
     Cut the sun-dried tomatoes into strips and mix with ½ the goats cheese. Pop in the oven to warm.
     In a pot of boiling water, cook the lasagna sheets and lay onto a baking tray. Cut them in half.
     `},
    {title: 'Black pepper squid', categories: ['Exotic'], imageUrl: 'https://headbangerskitchen.com/wp-content/uploads/2017/12/BLACK-PEPPER-SQUID-THUMB1.jpg',
     instructions: `Cut the squid into strips and pan-fry in a little butter. When they are just done, toss them in a large tablespoon of pesto. Keep warm in a very low oven.
     Cut the sun-dried tomatoes into strips and mix with ½ the goats cheese. Pop in the oven to warm.
     In a pot of boiling water, cook the lasagna sheets and lay onto a baking tray. Cut them in half.
     `}
];

for (let i=0;i<meals.length;i++) {
    meals[i]['key'] = `${i}`;
}

export default meals;