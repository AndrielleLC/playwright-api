import { APIRequestContext } from "playwright";
import * as bookingDetails from "../payloads/POSTBooking.json";

import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";

interface IPostStaticRequest {
  request: APIRequestContext;
}

function postStaticRequest({ request }: IPostStaticRequest) {
  return request.post(`/booking`, {
    data: bookingDetails,
  });
}

interface IPostDinamicRequest {
  request: APIRequestContext;
}

const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomNumber = faker.number.int(999);
const currentDate = DateTime.now().toFormat("yyyy-MM-dd");
const currentDatePlusFive = DateTime.now()
  .plus({ days: 5 })
  .toFormat("yyyy-MM-dd");

function postDinamicRequest({ request }: IPostDinamicRequest) {
  return request.post(`/booking`, {
    data: {
      firstname: randomFirstName,
      lastname: randomLastName,
      totalprice: randomNumber,
      depositpaid: true,
      bookingdates: {
        checkin: currentDate,
        checkout: currentDatePlusFive,
      },
      additionalneeds: "Breakfast",
    },
  });
}

export {
  postStaticRequest,
  postDinamicRequest,
  randomFirstName,
  randomLastName,
};
