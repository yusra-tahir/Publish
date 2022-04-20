const form = document.querySelector("form");
const content = document.querySelector("section");

function NewPublish() {
  form.onsubmit = postStory;
  content.appendChild(form);
}

async function postStory(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };

    const response = await fetch("http://localhost:3000/posts", options);
    const { id, err } = await response.json();
    if (err) {
      throw Error(err);
    } else {
      window.location.hash = `#posts/${id}`;
    }
  } catch (err) {
    console.warn(err);
  }
}
