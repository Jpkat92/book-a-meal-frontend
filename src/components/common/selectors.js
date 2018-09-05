export function mealsFormattedForDropdown(meals) {
    return meals.map(meal => {
      return {
        value: meal.id,
        text: meal.name + ' ' + meal.price
      };
    });
}

export function daysFormattedForDropdown(days) {
    
    return days.map(day => {
        return {
            id: day.id,
            name: day.name
        };
    });
}
