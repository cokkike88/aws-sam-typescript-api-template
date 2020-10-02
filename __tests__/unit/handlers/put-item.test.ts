import { AnyARecord } from 'dns';
import { putItemHandler } from '../../../src/handlers/put-item';

const event: any = { 
    httpMethod: 'POST', 
    body: '{"id": "1","name": "name1"}' 
}; 

test('should to be the same responde', async () => {
    const body = JSON.parse(event.body)

    let result = await putItemHandler(event);    
    const expectResult = {
        statusCode: 200,
        body: JSON.stringify(body)
    };

    expect(result).toEqual(expectResult);
})