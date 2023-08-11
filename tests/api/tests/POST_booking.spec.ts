// @ts-check
import { test, expect } from "@playwright/test";
import {
  postDinamicRequest,
  postStaticRequest,
  randomFirstName,
  randomLastName,
} from "../requests/POST_booking.request";

test.describe.parallel("API TESTING - POST", () => {
  test("STATIC - Should be able to create a booking", async ({ request }) => {
    const response = await postStaticRequest({ request });
    const responseJson = await response.json();
    console.log(responseJson)
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(responseJson.booking).toHaveProperty("firstname", "Jim");
    expect(responseJson.booking).toHaveProperty("lastname", "Brown");
    expect(responseJson.booking).toHaveProperty("totalprice", 111);
    expect(responseJson.booking).toHaveProperty("depositpaid", true);
  });

  test("DINAMIC - Should be able to create a booking", async ({ request }) => {
    const response = await postDinamicRequest({ request });
    const responseJson = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    expect(responseJson.booking).toHaveProperty("firstname", randomFirstName);
    expect(responseJson.booking).toHaveProperty("lastname", randomLastName);
  });
});
