let baseUrl = "https://jsonplaceholder.typicode.com";
let postUrl = baseUrl + "/posts/";

fetch(postUrl + "1")
  .then((result) => {
    //console.log(result);

    if (result.ok) {
      let content = result.headers.get("Content-Type");
      console.log(content);

      if (content?.includes("application/json")) {
        console.log("L'applicazione è json!!");
        return result.json();
      } else {
        throw new Error("Response type is not json");
      }
    }
  })
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.log(error);
  });
