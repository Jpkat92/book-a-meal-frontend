export function getTodaysMenu(menus){
    const today = new Date();
    const dayId = today.getDay()
    let todayMenu = {};
    if(typeof menus !== "undefined" && menus.length !== 0 && Array.isArray(menus)){
        todayMenu = menus.filter(menu => menu.day.id === dayId)
        todayMenu = todayMenu[0]
        debugger;
    }
    return todayMenu
}

export function makeItemsUnchecked(items){
    if(typeof items !== "undefined" && items.length !== 0 && Array.isArray(items)){
        if(items.length > 0){
            items.map((item) => {
                item.isChecked = false;
                return item;
            });
        }
    }
    return items;
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
