import * as Api from "./apiRequest";
import * as path from "./apiList";

export const fetchBook = function (...params) {
  console.log("fetch Book ", params[0]);
  // add variable into url
  const { id } = params[0];
  let bookUrl = `${path.FETCH_BOOK}/${id}`;
        console.log("URL   ::   ", bookUrl)
  return Api.axiosGet(bookUrl, params[0]);
};
