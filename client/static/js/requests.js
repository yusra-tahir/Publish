const form = document.querySelector("form");

form.addEventListener("submit", createPost);

async function getAllPosts() {
  try {
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function getItem(id) {
  try {
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function createPost(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(e.target)),
    };

    let response = await fetch(`http://localhost:3000/posts/${id}`, options);

    const { id, err } = await response.json();
    if (err) {
      throw Error(err);
    } else {
      window.location = `#posts/${id}`;
    }
  } catch (err) {
    console.warn(err);
  }
}