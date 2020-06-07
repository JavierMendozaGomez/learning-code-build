import {APIGatewayProxyResult} from 'aws-lambda';

const handler = async (event: {body: string}): Promise<APIGatewayProxyResult> => {
    const body = JSON.parse(event.body);
    return {
        statusCode: 200,
        headers: {},
        body: JSON.stringify({
            ...body,
            "hello":124
        })
    }
};

export {
    handler
};
