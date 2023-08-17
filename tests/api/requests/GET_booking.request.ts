import { APIRequestContext } from "playwright";
import * as bookingGet from "../payloads/GETBooking.json";

interface IGetRequest {
  request: APIRequestContext;
}

 function getAllBookings({ request }: IGetRequest) {
  return request.get(`/booking`);
}

interface IGetRequest1 {
    request: APIRequestContext;
  }
  
function getSpecificBooking({ request }: IGetRequest1) {
    return request.get(`/booking/2`);
  }

  interface IGetRequestParam {
    request: APIRequestContext;
  }
  
function getBookingParam({ request }: IGetRequestParam) {
    return request.get(`/booking`,{
        params: bookingGet,
    });
  }

  export{getAllBookings, getSpecificBooking, getBookingParam};