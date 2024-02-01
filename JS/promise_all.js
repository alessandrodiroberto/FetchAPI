"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("./url");
const dom_1 = require("dom");
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
let post$ = fetch(url_1.postUrl + "/1").then((resp) => resp.json());
let comments$ = fetch(url_1.postUrl + "/1/comments").then((resp) => resp.json());
Promise.all([post$, comments$]).then((resp) => {
    let post = resp[0];
    let comments = resp[1];
    let postTitle = dom_1.document.querySelector("#postTitle");
    let postBody = dom_1.document.querySelector("#postBody");
    if (postTitle)
        postTitle.innerHTML = post.title;
    if (postBody)
        postBody.innerHTML = post.body;
    let ul = dom_1.document.querySelector("#comments");
    comments.array.forEach((comment) => {
        let li = dom_1.document.createElement("li");
        li.innerHTML = comment.body;
        ul.appendChild(li);
    });
});
