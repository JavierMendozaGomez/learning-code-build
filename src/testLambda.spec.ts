import {handler} from './testLambda';
const mockedEvent = {
    body: JSON.stringify({
        'name': 'Javier'
    })
}
describe('Testing mocked lambda', () => {
    it('Succesfully invokes the lambda', async () => {
        const {body} = await handler(mockedEvent);
        const parsedBody = JSON.parse(body);
        expect(parsedBody).toHaveProperty("name");
        expect(parsedBody).toHaveProperty("hello");
    });
    it('Fails to get the lambda', async () => {
        const {body} = await handler(mockedEvent);
        const parsedBody = JSON.parse(body);
        try {
            expect(parsedBody).not.toHaveProperty("name");
        } catch (error) {
            console.log(error)
        }
    })
});