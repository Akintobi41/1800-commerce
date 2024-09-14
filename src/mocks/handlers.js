import { http, HttpResponse } from 'msw'
import { mockContentfulData } from './mockData'

export const handlers = [
    http.get('https://cdn.contentful.com/spaces/6hoi4gahctlw/environments/master/entries', () => {
        return HttpResponse.json(mockContentfulData,{status:200})
    })

]