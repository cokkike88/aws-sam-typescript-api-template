import { getAllItemsHandler } from '../../../src/handlers/get-all-items';
import axios from 'axios';

describe('Test getAllItemHandler', () => {    

    const event:any = { 
        httpMethod: 'GET' 
    }

    
    test('getAllItemsTest', async () => {
        
        let result = await getAllItemsHandler(event);
        let items = await axios.get(`https://api.github.com/users/cokkike88`);
        
        const expectResult = {
            statusCode: 200,
            body: JSON.stringify(items.data)
        }
        console.log('result' , result);
        expect(result).toEqual(expectResult);
    })
})