import { mealService } from '../../src/services/meal.service'
import { URL } from '../../src/helpers/auth_header'

describe('testing meals API endpoint', () => {
    beforeEach(() => {
      fetch.resetMocks()
    })
   
    it('it loads meals', () => {
      const mealData = [
            {
                "id": 5,
                "name": "Chapati",
                "price": 8
            },
            {
                "id": 7,
                "name": "Chicken Tikka",
                "price": 15
            }
        ]
        
      fetch.mockResponseOnce(JSON.stringify({data: mealData}))
   
      //assert on the response
      mealService.getAllMeals().then(res => {
        expect(res.data).toEqual(mealData)
      })
   
      //assert on the times called and arguments given to fetch
      expect(fetch.mock.calls.length).toEqual(1)
      expect(fetch.mock.calls[0][0]).toEqual(`${URL}/meals`)
    })

    it('it creates a meal', () => {
        const payload = {
                  "id": 5,
                  "name": "Chapati",
                  "price": 8
              }
              
        const response =  {
            "Meal": {
                "id": 15,
                "name": "Beef Steak",
                "price": 17.5
            },
            "Message": "Meal added successfully"
        }
        fetch.mockResponseOnce(JSON.stringify({data: response}))
     
        //assert on the response
        mealService.createMeal(payload).then(res => {
          expect(res.data).toEqual(mealResponse)
        })
     
        //assert on the times called and arguments given to fetch
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual(`${URL}/meals`)
      })

    it('it updates a meal', () => {
        const payload = {
                "id": 5,
                "name": "Chapati & Rice",
                "price": 8
            }
              
        const response =  {
                "id": 5,
                "name": "Chapati & Rice",
                "price": 8
            }
        fetch.mockResponseOnce(JSON.stringify({data: response}))
     
        mealService.updateMeal(payload.id, payload.name, payload.price).then(res => {
          expect(res.data).toEqual(response)
        })
     
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual(`${URL}/meals/${payload.id}`)
      })

    it('it deletes a meal', () => {
        const mealId = 5
                
        const response =  {
            "message": "The meal has been deleted",
            "result": true
        }
    fetch.mockResponseOnce(JSON.stringify({data: response}))
    
    mealService.deleteMeal(mealId).then(res => {
        expect(res.data).toEqual(response)
    })
    
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual(`${URL}/meals/${mealId}`)
    })
  })
