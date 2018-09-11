const days = [
    {
        id: 1,
        name: "Monday"
    },
    {
        id: 2,
        name: "Tuesday"
    },
    {
        id: 3,
        name: "Wednesday"
    },
    {
        id: 4,
        name: "Thursday"
    },
    {
        id: 5,
        name: "Friday"
    },
    {
        id: 6,
        name: "Saturday"
    },
    {
        id: 7,
        name: "Sunday"
    },
]


export function mealsFormattedForDropdown(meals) {
    return meals.map(meal => {
      return {
        value: meal.id,
        text: meal.name + ' ' + meal.price
      };
    });
}

export function daysFormattedForDropdown() {
    
    return days.map(day => {
        return {
            id: day.id,
            name: day.name
        };
    });
}

export function caterersFormattedForDropdown(caterers){
    return caterers.map(item => {
        return {
            id: item.caterer.id,
            name: item.caterer.firstName+" "+item.caterer.lastName,
            menu: item.caterer.menu
        };
    });
}
