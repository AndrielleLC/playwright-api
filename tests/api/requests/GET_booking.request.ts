import { APIRequestContext } from "playwright";
import * as bookingGet from "../payloads/GETBooking.json";

interface IGetRequest {
  request: APIRequestContext;
}

 function getRequest({ request }: IGetRequest) {
  return request.get(`/booking`);
}

interface IGetRequest1 {
    request: APIRequestContext;
  }
  
function getRequest1({ request }: IGetRequest1) {
    return request.get(`/booking/2`);
  }

  interface IGetRequestParam {
    request: APIRequestContext;
  }
  
function getRequestParam({ request }: IGetRequestParam) {
    return request.get(`/booking`,{
        params: bookingGet,
    });
  }

  export{getRequest, getRequest1, getRequestParam};