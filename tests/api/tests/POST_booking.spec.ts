// @ts-check
import { test, expect } from "@playwright/test";
import { postStaticRequest } from "../requests/POST_booking.request";

test.describe.parallel("API TESTING - PLAYWRIGHT", () => {
  test("should be able to create a booking", async ({ request }) => {
    const response = await postStaticRequest({ request });

    const responseJson = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(responseJson.booking).toHaveProperty("firstname", "Jim");
    expect(responseJson.booking).toHaveProperty("lastname", "Brown");
    expect(responseJson.booking).toHaveProperty("totalprice", 111);
    expect(responseJson.booking).toHaveProperty("depositpaid", true);
  });
});
