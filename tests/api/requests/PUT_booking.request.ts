import { APIRequestContext } from "playwright";
import { postToken } from "./POST_token.request";
import * as bookingUpdate from "../payloads/POSTBooking.json";

import { faker } from "@faker-js/faker";

interface IPutRequest {
    request: APIRequestContext;
}

// const randomAdditionalNeeds = faker.word.sample();
const updatedBookingData = {
    ...bookingUpdate,
    additionalneeds: faker.word.sample()
};

export async function putRequest({request}: IPutRequest){
    const newToken = await postToken({request});
    return request.put(`/booking/1`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${newToken}`,
        },
        data: JSON.stringify(updatedBookingData),
    })
} 
    
