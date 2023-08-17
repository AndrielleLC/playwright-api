// @ts-check
import { test, expect } from '@playwright/test';
import { getAllBookings, getSpecificBooking, getBookingParam } from '../requests/GET_booking.request';

test.describe.parallel("API TESTING - GET", () => {
test('Should get all booking details', async ({ request }) => {
    const response = await getAllBookings({ request });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test('Should get a specific booking details', async ({ request }) => {
    const response = await getSpecificBooking({ request });
    //const responseJson = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200); 
    //expect(responseJson.firstname).toBe('Susan'); //The database is rotating. The return can be different every time it is restarted.
});

test('Should get a booking details using query parameters', async ({ request }) => {
    const response = await getBookingParam({request})
    //const responseJson = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    //expect(responseJson[0].bookingid).toBe(2); //The database is rotating. The return can be different every time it is restarted.   
    });
});