const toggleLine1 = document.querySelector(".toggle1");
const toggleLine2 = document.querySelector(".toggle2");
const biography = document.querySelector(".bio");
const shows = document.querySelector(".shows");
const commentContainer = document.querySelector(".comment-container");
const conversationForm = document.querySelector("#conversation-form");
const name = document.querySelector("#name");
const comment = document.querySelector("#comment");

// comment

const commentData = [
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    text: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Connor Walton",
    date: "02/17/2021",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];

let currentTime = new Date();
let date = currentTime.getDate();
let month = currentTime.getMonth();
let year = currentTime.getFullYear();

function addComment() {
  commentData.forEach((el) => {
    let div = document.createElement("DIV");

    div.innerHTML = `
    <div class="comment">
        <div class="comment-img"></div>
        <div class="comment-content">
          <div class="name-date">
            <h4>${el.name}</h4>
            <h4 class="date">${el.date}</h4>
          </div>
          <p class="comment-text">
            ${el.text}
          </p>
        </div>
     </div>
     <hr />      
`;
    commentContainer.insertAdjacentElement("afterbegin", div);
  });
  let hr = document.createElement("HR");
  commentContainer.insertAdjacentElement("afterbegin", hr);
}

addComment();

// get input data

conversationForm.addEventListener("submit", pushComment);

function pushComment(e) {
  e.preventDefault();

  if (!name.value || !comment.value) {
    return;
  }

  commentData.push({
    name: name.value,
    date: `${month < 10 ? "0" + month : month}/${
      date < 10 ? "0" + date : date
    }/${year}`,
    text: comment.value,
  });

  commentContainer.innerHTML = "";
  addComment();

  name.value = "";
  comment.value = "";
}
