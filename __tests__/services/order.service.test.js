import { orderService } from '../../src/services/order.service'

const URL = 'https://bookamealapi.herokuapp.com/api/v1'

describe('testing orders API', () => {
    beforeEach(() => {
      fetch.resetMocks()
    })
   
    it('it loads orders', () => {
      const orderData = [
            {
                "caterer": {
                    "firstName": "Joseph",
                    "id": 3,
                    "lastName": "Odur"
                },
                "customer": {
                    "firstName": "James",
                    "id": 1,
                    "lastName": "Katarikawe"
                },
                "date_submitted": "2018-09-06T08:31:52.519712+00:00",
                "id": 1,
                "meal": {
                    "caterer_id": 3,
                    "id": 1,
                    "name": "Rice & Chicken",
                    "price": 10.5
                }
            }
        ]
        
      fetch.mockResponseOnce(JSON.stringify({data: orderData}))
   
      orderService.getAllOrders().then(res => {
        expect(res.data).toEqual(orderData)
      })
   
      //assert on the times called and arguments given to fetch
      expect(fetch.mock.calls.length).toEqual(1)
      expect(fetch.mock.calls[0][0]).toEqual(`${URL}/orders`)
    })

    it('it creates a order', () => {
        const payload = {
                "meal_id": 4
            }
              
        const response =  {
            "order": {
                "date_submitted": "2018-09-04T12:53:14.532109+00:00",
                "id": 4,
                "meal": {
                    "id": 4,
                    "name": "Pasta",
                    "price": 11
                },
                "user": {
                    "firstName": "Paul",
                    "id": 2,
                    "lastName": "Kayongo"
                }
            }
        }
        fetch.mockResponseOnce(JSON.stringify({data: response}))
     
        //assert on the response
        orderService.createOrder(payload).then(res => {
          expect(res.data).toEqual(orderResponse)
        })
     
        //assert on the times called and arguments given to fetch
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual(`${URL}/orders/`)
      })

    it('it updates a order', () => {
        const orderId = 4
        const payload = {
            "meal_id": 5
        }
           
        const response =  {
            "order": {
                "date_submitted": "2018-09-04T12:53:14.532109+00:00",
                "id": 4,
                "meal": {
                    "id": 4,
                    "name": "Pasta",
                    "price": 11
                },
                "user": {
                    "firstName": "Paul",
                    "id": 2,
                    "lastName": "Kayongo"
                }
            }
        }
        fetch.mockResponseOnce(JSON.stringify({data: response}))
     
        orderService.updateOrder(orderId, payload).then(res => {
          expect(res.data).toEqual(response)
        })
     
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual(`${URL}/orders/${orderId}`)
      })

    it('it deletes a order', () => {
        const orderId = 5
                
        const response =  {
            "message": "Order has been deleted"
        }
    fetch.mockResponseOnce(JSON.stringify({data: response}))
    
    orderService.deleteOrder(orderId).then(res => {
        expect(res.data).toEqual(response)
    })
    
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual(`${URL}/orders/${orderId}`)
    })
  })
