export function getTodaysMenu(menus){
    const today = new Date();
    const dayId = today.getDay()
    let todayMenu = {};
    if(typeof menus !== "undefined" && menus.length !== 0 && Array.isArray(menus)){
        todayMenu = menus.filter(menu => menu.day.id === dayId)
        if (typeof todayMenu[0] == "undefined"){
            todayMenu = { dateCreated: "", day: {id: dayId}, mealIds: [], mealList: []}
        }
        else {
            todayMenu = todayMenu[0]
        }
    }
    return todayMenu
}

export function makeItemsUnchecked(items){
    let itemList = []
    if(typeof items !== "undefined" && items.length !== 0 && Array.isArray(items)){
        if(items.length > 0){
            itemList = items.map((item) => {
                item.isChecked = false;
                return item;
            });
        }
    }
    return itemList;
}

export function updateCheckedItems(event, id, selectedItems){
    let items = selectedItems;
    switch(event.target.checked){
        case true:
            items.push(id);
            break;
       case false:
            items.pop(id);
            break;
       default:
            break;
    }
    return items;
}
