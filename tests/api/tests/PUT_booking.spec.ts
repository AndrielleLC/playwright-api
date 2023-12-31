// @ts-check
import { test, expect } from '@playwright/test';
import { putRequest } from '../requests/PUT_booking.request';
import { postToken } from '../requests/POST_token.request';


test.describe.parallel("API TESTING - PUT", () =>{
    test('should be able to update the booking details', async ({ request }) => {
        const responseToken = await postToken ({request});
        const responseTokenJson = responseToken;
        console.log("New Token is: " + responseTokenJson);

        // PUT
        const response = await putRequest ({request});
        const putResponseBody = await response.json()
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        expect(putResponseBody).toHaveProperty("firstname", "Jim");
        expect(putResponseBody).toHaveProperty("lastname", "Brown");
        expect(putResponseBody).toHaveProperty("totalprice", 111);
        expect(putResponseBody).toHaveProperty("depositpaid", true);
    })
})