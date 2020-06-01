import * as Api from "./apiRequest";
import * as path from "./apiList";

export const fetchLibrary = function (...params) {
  console.log("fetch library ", params[0]);
  // add variable into url
  let libraryUrl = `${path.FETCH_LIBRARY}`;
  return Api.axiosGet(libraryUrl, params[0]);
};
