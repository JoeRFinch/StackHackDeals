const comments = JSON.parse(localStorage.getItem("comments") || "[]");
const commentSection = document.getElementById("commentSection");
const postBtn = document.getElementById("postComment");

function renderComments() {
  commentSection.innerHTML = comments
    .map((c, i) => `<div class="comment"><strong>User:</strong> ${c}</div>`)
    .join("");
}

postBtn.addEventListener("click", () => {
  const input = document.getElementById("commentInput");
  const text = input.value.trim();
  if (!text) return;
  comments.push(text);
  localStorage.setItem("comments", JSON.stringify(comments));
  input.value = "";
  renderComments();
});

renderComments();
