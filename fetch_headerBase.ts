import { postUrl } from "./url";

let TOKEN = "skjdfb";
let headers = new Headers();
headers.append("Authorization", "Bearer " + TOKEN);

let init: RequestInit = {
  headers: headers,
  method: "GET",
};

fetch(postUrl + "1", init)
  .then((result) => {
    if (result.ok) {
      let content = result.headers.get("Content-Type");
      if (content?.includes("application/json")) {
        return result.json();
      } else {
        throw new Error("Response type is not json");
      }
    } else {
      throw new Error("Response type is not json");
    }
  })
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.log(error);
  });
