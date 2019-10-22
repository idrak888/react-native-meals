import meals from '../../data/meals';

const initialState = {
    meals: meals,
    favoriteMeals: []
}

const MealsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'TOGGLE_FAVORITE': 
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.title === action.mealTitle);
            if ( existingIndex >= 0 ) {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);

                return { ...state, favoriteMeals: updatedFavMeals };
            } else {
                return { ...state, favoriteMeals: state.favoriteMeals.concat(state.meals.find(meal => meal.title === action.mealTitle)) }
            }
        default: 
            return state;
    }
}

export default MealsReducer;