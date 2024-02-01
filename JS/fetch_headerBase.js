"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("./url");
let TOKEN = "skjdfb";
let headers = new Headers();
headers.append("Authorization", "Bearer " + TOKEN);
let init = {
    headers: headers,
    method: "GET",
};
fetch(url_1.postUrl + "1", init)
    .then((result) => {
    if (result.ok) {
        let content = result.headers.get("Content-Type");
        if (content === null || content === void 0 ? void 0 : content.includes("application/json")) {
            return result.json();
        }
        else {
            throw new Error("Response type is not json");
        }
    }
    else {
        throw new Error("Response type is not json");
    }
})
    .then((json) => {
    console.log(json);
})
    .catch((error) => {
    console.log(error);
});
