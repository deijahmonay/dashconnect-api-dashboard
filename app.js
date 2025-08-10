// 🎬 Movie Info
const movieButton = document.getElementById("movie-button");
const movieInput = document.getElementById("movie-input");
const movieOutput = document.getElementById("movie-output");

movieButton.addEventListener("click", async () => {
  const query = movieInput.value.trim();
  const apiKey = "3cc6a727"; 

  if (!query) {
    movieOutput.innerHTML = "Please enter a movie title.";
    return;
  }

  movieOutput.innerHTML = "Searching...";

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (data.Response === "False") {
      movieOutput.innerHTML = "No results found.";
      return;
    }

    movieOutput.innerHTML = data.Search.map(movie => `
      <div style="margin-bottom: 1rem;">
        <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/150?text=No+Image'}" alt="${movie.Title} Poster" style="max-width: 100px; border-radius: 5px;" />
        <p><strong>${movie.Title}</strong> (${movie.Year})</p>
      </div>
    `).join("");
  } catch (error) {
    console.error(error);
    movieOutput.innerHTML = "Error fetching movie info.";
  }
});

// 🐱 Cat Facts
const catButton = document.getElementById("catfact-button");
const catOutput = document.getElementById("catfact-output");

catButton.addEventListener("click", async () => {
  catOutput.innerHTML = "Loading...";
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    catOutput.innerHTML = `🐾 ${data.fact}`;
  } catch (error) {
    console.error("Error fetching cat fact:", error);
    catOutput.innerHTML = "Couldn't fetch a cat fact right meow.";
  }
});

// 📜 English to Shakespeare
const shakespeareButton = document.getElementById("shakespeare-button");
const shakespeareOutput = document.getElementById("shakespeare-output");
const shakespeareInput = document.getElementById("shakespeare-input");

shakespeareButton.addEventListener("click", async () => {
  shakespeareOutput.innerHTML = "Loading...";
  const text = shakespeareInput.value.trim();

  if (!text) {
    shakespeareOutput.innerHTML = "Please enter some text to translate.";
    return;
  }

  try {
    const response = await fetch(`https://api.funtranslations.com/translate/shakespeare.json?text=${encodeURIComponent(text)}`);
    const data = await response.json();

    if (data && data.contents && data.contents.translated) {
      shakespeareOutput.innerHTML = `📝 ${data.contents.translated}`;
    } else {
      shakespeareOutput.innerHTML = "Translation failed or limit reached.";
    }
  } catch (error) {
    console.error(error);
    shakespeareOutput.innerHTML = "Error loading translation.";
  }
});

// 🔗 QR Code Generator
const qrcodeButton = document.getElementById("qrcode-button");
const qrcodeInput = document.getElementById("qrcode-input");
const qrcodeOutput = document.getElementById("qrcode-output");

qrcodeButton.addEventListener("click", async () => {
  const url = qrcodeInput.value.trim();
  if (!url) {
    qrcodeOutput.innerHTML = "Please enter a valid URL.";
    return;
  }

  qrcodeOutput.innerHTML = "Loading...";
  try {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=200x200`;
    qrcodeOutput.innerHTML = `<img src="${qrUrl}" alt="QR Code">`;
  } catch (error) {
    console.error(error);
    qrcodeOutput.innerHTML = "Error generating QR code.";
  }
});


// 🎱 Magic GIF Ball (Yes/No API)
const yesnoButton = document.getElementById("yesno-button");
const yesnoOutput = document.getElementById("yesno-output");
const yesnoInput = document.getElementById("yesno-input");

yesnoButton.addEventListener("click", async () => {
  yesnoOutput.innerHTML = "Shaking the ball...";
  const question = yesnoInput.value.trim();
  try {
    const response = await fetch("https://yesno.wtf/api");
    const data = await response.json();
    yesnoOutput.innerHTML = `
      <p>Answer: <strong>${data.answer.toUpperCase()}</strong></p>
      <img src="${data.image}" alt="${data.answer}" style="max-width: 100%; border-radius: 8px; margin-top: 0.5rem;" />
    `;
  } catch (error) {
    console.error("Error fetching yes/no answer:", error);
    yesnoOutput.innerHTML = "The magic ball is confused. Try again!";
  }
});


// 🤣 Random Joke
const jokeButton = document.getElementById("joke-button");
const jokeOutput = document.getElementById("joke-output");

jokeButton.addEventListener("click", async () => {
  jokeOutput.innerHTML = "Loading...";
  try {
    const response = await fetch("https://sv443.net/jokeapi/v2/joke/Programming");
    const data = await response.json();

    if (data.type === "twopart") {
      jokeOutput.innerHTML = `😂 Set Up: ${data.setup}<br> Delivery: ${data.delivery}`;
    } else if (data.type === "single") {
      jokeOutput.innerHTML = `😂 Joke: ${data.joke}`;
    } else {
      jokeOutput.innerHTML = "Couldn't understand the joke format.";
    }
  } catch (error) {
    console.error(error);
    jokeOutput.innerHTML = "Error loading joke.";
  }
});


// 😅 Excuses Generator
const excuseButton = document.getElementById("excuse-button");
const excuseOutput = document.getElementById("excuse-output");

excuseButton.addEventListener("click", async () => {
  excuseOutput.innerHTML = "Loading...";
  try {
    const response = await fetch("https://excuser-three.vercel.app/v1/excuse/3");
    const data = await response.json();
    excuseOutput.innerHTML = data.map(excuse => `🙃 ${excuse.excuse}`).join("<br>");
  } catch (error) {
    console.error(error);
    excuseOutput.innerHTML = "Error loading excuse.";
  }
});


// 📚 Useless Facts
const uselessButton = document.getElementById("useless-button");
const uselessOutput = document.getElementById("useless-output");

uselessButton.addEventListener("click", async () => {
    uselessOutput.innerHTML = "Loading...";
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
    const data = await response.json();
    uselessOutput.innerHTML = data.text;
  } catch (error) {
    console.error("Error fetching useless fact:", error);
    uselessOutput.innerHTML = "Something went wrong. Try again!";
  }
});

