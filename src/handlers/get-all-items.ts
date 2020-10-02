import { APIGatewayEvent } from 'aws-lambda';
import axios from 'axios';

/**
 * A simple example includes a HTTP get method to get all items from a DynamoDB table.
 */
export const getAllItemsHandler = async (event: APIGatewayEvent) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getAllItems only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);
    // const items = [
    //     {
    //         id: 1,
    //         name: 'name1'
    //     },
    //     {
    //         id: 2,
    //         name: 'name2'
    //     }
    // ]

    let items = await axios.get(`https://api.github.com/users/cokkike88`);

    console.log('ENVIROMENT', process.env.SAMPLE_TABLE);

    const response = {
        statusCode: 200,
        body: JSON.stringify(items.data)
    };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
