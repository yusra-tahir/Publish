const form = document.querySelector("form");
form.addEventListener("submit", publishPost);

async function publishPost(e) {
  e.preventDefault();

  let formD = new FormData(form);
  const title = formD.get("title");
  const writer = formD.get("writer");
  const content = formD.get("content");
  const post = {
    title,
    writer,
    content,
  };

  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...post }),
    };

    const response = await fetch("http://localhost:3000/posts", options);

    const { id, err } = await response.json();
    if (err) {
      throw Error(err);
    } else {
      form.innerHTML = "";
      window.location = `#posts/${id}`;
      let titleOutput = document.createElement("h2");
      titleOutput.textContent = title;
      let writerOutput = document.createElement("h3");
      writerOutput.textContent = writer;
      let contentOutput = document.createElement("p");
      contentOutput.textContent = content;

      let newPostDiv = document.createElement("div");
      newPostDiv.appendChild(titleOutput);
      newPostDiv.appendChild(writerOutput);
      newPostDiv.appendChild(contentOutput);
      document.getElementById("post").prepend(newPostDiv);
    }
  } catch (err) {
    console.warn(err);
  }
}

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
