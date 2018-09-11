import { menuService } from '../../src/services/menu.service'
import { URL } from '../../src/helpers/auth_header'

describe('testing menu API endpoint', () => {

    const menuData = [
        {
            "dateCreated": "Mon, 10 Sep 2018 07:53:18 GMT",
            "day": {
                "id": 1,
                "name": "Monday"
            },
            "mealIds": [
                1,
                2,
                4
            ],
            "mealList": [
                {
                    "caterer_id": 3,
                    "id": 1,
                    "name": "Chicken Tandoori",
                    "price": 18.5
                },
                {
                    "caterer_id": 3,
                    "id": 2,
                    "name": "Fish Tikka",
                    "price": 11
                },
                {
                    "caterer_id": 3,
                    "id": 4,
                    "name": "Biryani Rice",
                    "price": 19
                }
            ]
        },
        {
            "dateCreated": "Thu, 06 Sep 2018 09:59:54 GMT",
            "day": {
                "id": 4,
                "name": "Thursday"
            },
            "mealIds": [
                2,
                3,
                4
            ],
            "mealList": [
                {
                    "caterer_id": 3,
                    "id": 2,
                    "name": "Fish Tikka",
                    "price": 11
                },
                {
                    "caterer_id": 3,
                    "id": 3,
                    "name": "Butter Chicken",
                    "price": 17
                },
                {
                    "caterer_id": 3,
                    "id": 4,
                    "name": "Biryani Rice",
                    "price": 19
                }
            ]
        },
        {
            "dateCreated": "Thu, 06 Sep 2018 09:09:54 GMT",
            "day": {
                "id": 5,
                "name": "Friday"
            },
            "mealIds": [
                3,
                2,
                1,
                4
            ],
            "mealList": [
                {
                    "caterer_id": 3,
                    "id": 3,
                    "name": "Butter Chicken",
                    "price": 17
                },
                {
                    "caterer_id": 3,
                    "id": 2,
                    "name": "Fish Tikka",
                    "price": 11
                },
                {
                    "caterer_id": 3,
                    "id": 1,
                    "name": "Chicken Tandoori",
                    "price": 18.5
                },
                {
                    "caterer_id": 3,
                    "id": 4,
                    "name": "Biryani Rice",
                    "price": 19
                }
            ]
        },
        {
            "dateCreated": "Sat, 08 Sep 2018 10:49:57 GMT",
            "day": {
                "id": 6,
                "name": "Saturday"
            },
            "mealIds": [
                9,
                2,
                3,
                4,
                1
            ],
            "mealList": [
                {
                    "caterer_id": 3,
                    "id": 9,
                    "name": "Chicken Tikka",
                    "price": 20
                },
                {
                    "caterer_id": 3,
                    "id": 2,
                    "name": "Fish Tikka",
                    "price": 11
                },
                {
                    "caterer_id": 3,
                    "id": 3,
                    "name": "Butter Chicken",
                    "price": 17
                },
                {
                    "caterer_id": 3,
                    "id": 4,
                    "name": "Biryani Rice",
                    "price": 19
                },
                {
                    "caterer_id": 3,
                    "id": 1,
                    "name": "Chicken Tandoori",
                    "price": 18.5
                }
            ]
        },
        {
            "dateCreated": "Sun, 09 Sep 2018 19:38:40 GMT",
            "day": {
                "id": 7,
                "name": "Sunday"
            },
            "mealIds": [
                1,
                2,
                4
            ],
            "mealList": [
                {
                    "caterer_id": 3,
                    "id": 1,
                    "name": "Chicken Tandoori",
                    "price": 18.5
                },
                {
                    "caterer_id": 3,
                    "id": 2,
                    "name": "Fish Tikka",
                    "price": 11
                },
                {
                    "caterer_id": 3,
                    "id": 4,
                    "name": "Biryani Rice",
                    "price": 19
                }
            ]
        }
    ]

    beforeEach(() => {
      fetch.resetMocks()
    });

    it('it loads menus', () => {
        fetch.mockResponseOnce(JSON.stringify({data: menuData}))
     
        //assert on the response
        menuService.getMenu().then(res => {
          expect(res.data).toEqual(menuData)
        })
     
        //assert on the times called and arguments given to fetch
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual(`${URL}/menu`)
    })

    it('it creates a menu', () => {
        const payload = {
                  "day": 1,
                  "meal_ids": [1,2,4]
              }
              
        const response =  menuData[0]
        fetch.mockResponseOnce(JSON.stringify({data: response}))
     
        //assert on the response
        menuService.createMenu(payload).then(res => {
          expect(res.data).toEqual(response)
        })
     
        //assert on the times called and arguments given to fetch
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual(`${URL}/menu`)
      })

      it('it updates a menu', () => {
        const payload = {
                  "meal_ids": [9,2,3,4,1]
              }
        const dayId = 6
              
        const response =  menuData[3] 
        fetch.mockResponseOnce(JSON.stringify({data: response}))
     
        //assert on the response
        menuService.updateMenu(dayId, payload).then(res => {
          expect(res.data).toEqual(response)
        })
     
        //assert on the times called and arguments given to fetch
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual(`${URL}/menu/${dayId}`)
      })

})
