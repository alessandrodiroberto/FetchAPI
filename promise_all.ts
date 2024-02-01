import { postUrl } from "./url";
import { document } from "dom";

/*SENZA PROMISE.ALL

//console.log('POST');
//La variabile ha una promise, oppure un valore non ancora risolto
let post$ = fetch(postUrl + '/1').then((resp) => resp.json());
post$.then(post => console.log('POST:\n' + post));

//console.log('COMMENT');
let comments$ = fetch(postUrl + '/1/comments').then((resp) => resp.json());
comments$.then(comments => console.log('COMMENT:\n' + comments));

//La stampa "Finite" non indicherà la vera conclusione delle precedenti fetch 
console.log('Finite');

*/

//CON PROMISE.ALL

let post$ = fetch(postUrl + "/1").then((resp) => resp.json());
let comments$ = fetch(postUrl + "/1/comments").then((resp) => resp.json());

Promise.all([post$, comments$]).then((resp) => {
  let post = resp[0];
  let comments = resp[1];
  
  let postTitle: HTMLElement | null = document.querySelector("#postTitle");
  let postBody: HTMLElement | null = document.querySelector("#postBody");

  if (postTitle) postTitle.innerHTML = post.title;
  if (postBody) postBody.innerHTML = post.body;

  let ul = document.querySelector("#comments") as HTMLElement;
  comments.array.forEach((comment: any) => {
    let li = document.createElement("li");
    li.innerHTML = comment.body;
    ul.appendChild(li);
  });
});
