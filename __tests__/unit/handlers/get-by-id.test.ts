import { getByIdHandler } from '../../../src/handlers/get-by-id';

const event: any = { 
    httpMethod: 'GET', 
    pathParameters: { 
        id: '1' 
    } 
} 

test('should get item by id', async () => {
    const item = [{
        id: 1,
        name: 'name1'
    }];

    const result = await getByIdHandler(event);
    const expectedResult = { 
        statusCode: 200, 
        body: JSON.stringify(item) 
    }; 

    expect(result).toEqual(expectedResult);

})