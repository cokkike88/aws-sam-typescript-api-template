import { APIGatewayEvent } from 'aws-lambda';
 
export const getByIdHandler = async (event: APIGatewayEvent) => {
  if (event.httpMethod !== 'GET') {
    throw new Error(`getMethod only accept GET method, you tried: ${event.httpMethod}`);
  }
  // All log statements are written to CloudWatch
  console.info('received:', event);

  const items = [
    {
        id: 1,
        name: 'name1'
    },
    {
        id: 2,
        name: 'name2'
    }
]

  // Get id from pathParameters from APIGateway because of `/{id}` at template.yml
  const id = parseInt(event.pathParameters.id);
    
  const data = items.filter(x => x.id === id);
 
  const response = {
    statusCode: 200,
    body: JSON.stringify(data)
  };
 
  // All log statements are written to CloudWatch
  console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
  return response;
}
