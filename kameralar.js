const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
const loadMoreButton = document.getElementById("loadMoreButton");

let users = [];
let visibleUsers = 10; // Number of user cards to show initially
const increment = 10; // Number of user cards to load at a time

loadMoreButton.addEventListener("click", () => {
  visibleUsers += increment;
  showUserCards();
});

// Function to generate a unique ID based on the name without the "page" prefix
function generateId(name) {
  // Remove spaces and convert to lowercase
  return name.replace(/\s+/g, '').toLowerCase();
}

function showUserCards() {
  const searchValue = searchInput.value.toLowerCase();

  const uniqueUsers = {}; // Use an object to store unique users by ID

  users.forEach(user => {
    if (
      user.name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue)
    ) {
      uniqueUsers[user.id] = user; // Store unique users by ID
    }
  });

  const filteredUsers = Object.values(uniqueUsers); // Convert back to an array

  userCardContainer.innerHTML = ""; // Clear existing cards

  filteredUsers.slice(0, visibleUsers).forEach(user => {
    const card = userCardTemplate.content.cloneNode(true).querySelector(".card");
    const header = card.querySelector("[data-header]");
    const body = card.querySelector("[data-body]");
    header.textContent = user.name;
    body.textContent = user.email;

    const userId = generateId(user.name);
    const userPageLink = document.createElement("a");
    userPageLink.href = `${userId}.html`; // Remove the "page" prefix from the page link
    userPageLink.appendChild(card);
    userCardContainer.appendChild(userPageLink);
  });

  // Hide "Load More" button if all matching user cards are displayed
  if (visibleUsers >= filteredUsers.length) {
    loadMoreButton.style.display = "none";
  } else {
    loadMoreButton.style.display = "block";
  }
}

searchInput.addEventListener("input", () => {
  visibleUsers = increment; // Reset the visible users count
  showUserCards();
});

fetch("https://raw.githubusercontent.com/ilhamisayev/ilhamisayev.github.io/main/JSON/cameras.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => ({ id: generateId(user.name), name: user.name, email: user.email }));
    showUserCards();
  });
