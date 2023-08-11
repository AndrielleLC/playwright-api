// @ts-check
import { test, expect } from '@playwright/test';
import { getRequest, getRequest1, getRequestParam } from '../requests/GET_booking.request';

test.describe.parallel("API TESTING - GET", () => {
test('Should be get all the booking details', async ({ request }) => {
    const response = await getRequest({ request });
    //console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test('Should be get specific booking details', async ({ request }) => {
    const response = await getRequest1({ request });
    //const responseJson = await response.json();
    //console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200); 
    //expect(responseJson.firstname).toBe('James'); 
});

test('should be able to get subset of booking details using query parameters', async ({ request }) => {
    const response = await getRequestParam({request})
    //const responseJson = await response.json();
    //console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    //expect(responseJson[0].bookingid).toBe(2);     
    });
});