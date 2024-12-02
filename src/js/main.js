

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const randomFactButton = document.getElementById("random-fact-button");
  const funFactText = document.getElementById("fun-fact");
  const funImage = document.getElementById("fun-image");
  const body = document.body;

  // Theme toggle functionality
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    themeToggle.textContent = body.classList.contains("dark-mode")
      ? "Light Mode"
      : "Dark Mode";
  });

  // Array of fun facts and images
  const facts = [
    {
      fact: "Bucky Barnes was originally introduced as Captain America's teenage sidekick in 1941.",
      img: "https://th.bing.com/th/id/R.616a00b2203adcdc88469fe889196216?rik=F2jKjZBZqbMEsw&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f42800000%2fBucky-Barnes-Captain-America-The-First-Avenger-2011-the-first-avenger-captain-america-42801298-540-540.jpg&ehk=xZyMK6tUtORipxCQbzLdbcyDNiaEDaXPh0dKAMzA7uM%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      fact: "The Winter Soldier's cybernetic arm was designed by Hydra and gives him superhuman strength.",
      img: "https://i.pinimg.com/originals/d3/ba/03/d3ba03d5c31dfb0f493d313f2e626fdb.jpg",
    },
    {
      fact: "He is fluent in multiple languages, including Russian and German.",
      img: "https://i.pinimg.com/736x/09/0d/5a/090d5a0a4c57608ec32f2a808c48564a--bucky-barnes-marvel-movies.jpg",
    },
    {
      fact: "Bucky was brainwashed to become the Winter Soldier but retained fragments of his past memories.",
      img: "https://th.bing.com/th/id/OIP.PT2Oym6gkiUQq0JG8Q-oygHaHa?w=808&h=808&rs=1&pid=ImgDetMain",
    },
    {
      fact: "The Winter Soldier is a master of using any weapon, even those of his enemies.",
      img: "https://th.bing.com/th/id/R.1e26ca40e05b94c6228e95ed50c9fc7d?rik=B5EHe316G371Ng&pid=ImgRaw&r=0",
    },
  ];

  // Random fact button functionality
  randomFactButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const selectedFact = facts[randomIndex];

    funFactText.textContent = selectedFact.fact;
    funImage.src = selectedFact.img;
    funImage.alt = selectedFact.fact;
    funImage.classList.remove("hidden");
  });
});
