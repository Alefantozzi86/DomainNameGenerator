/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const domain = [".com", ".es", ".net", ".us"];
  newDomain(pronoun, adj, noun, domain);
};

function newDomain(pronoun, adj, noun, domain) {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          // console.log(pronoun[i] + adj[j] + noun[k] + domain[l]);

          let div = document.createElement("div");
          div.innerText = `
        ${pronoun[i]}${adj[j]}${noun[k]}${domain[l]}
        `;
          document.body.appendChild(div);
        }
      }
    }
  }
}
