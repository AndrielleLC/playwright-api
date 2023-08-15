import { APIRequestContext } from "playwright";
import * as authenticationToken from "../payloads/POSTToken.json";

interface IPostToken {
    request: APIRequestContext;
}  

export async function postToken({request}: IPostToken): Promise<string>{
    const response = await request.post(`/auth`, {
        data: authenticationToken
    })
    const responseBody = await response.json();
    return responseBody.token;
}

