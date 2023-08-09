import { APIRequestContext } from "playwright";
import * as bookingDetails from "../payloads/POSTBooking.json";

interface IPostStaticRequest {
  request: APIRequestContext;
}

export function postStaticRequest({ request }: IPostStaticRequest) {
  return request.post(`/booking`, {
    data: bookingDetails,
  });
}
