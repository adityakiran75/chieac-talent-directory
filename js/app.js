const profileContainer = document.getElementById("profile-container");
const searchInput = document.getElementById("search-input");
const clearFiltersButton = document.getElementById("clear-filters");
const interestFilter = document.getElementById("interest-filter");

let allMembers = [];

fetch("data/members.json")
  .then((response) => response.json())
  .then((members) => {
    allMembers = members;

    populateInterestFilter(allMembers);
    displayMembers(allMembers);
  })
  .catch((error) => {
    console.error("Error loading member data:", error);
  });

function displayMembers(members) {
  profileContainer.innerHTML = "";

  if (members.length === 0) {
    profileContainer.innerHTML = `
      <p class="no-results">
        No profiles found. Try a different search term.
      </p>
    `;
    return;
  }

  members.forEach((member) => {
    const profileCard = document.createElement("article");

    profileCard.classList.add("profile-card");

    profileCard.innerHTML = `
      <h3>${member.name}</h3>
      <p>${member.title}</p>
      <p>${member.bio}</p>

      <h4>Skills</h4>
      <ul>
        ${member.skills.map((skill) => `<li>${skill}</li>`).join("")}
      </ul>

      <h4>Professional Interests</h4>
      <ul>
        ${member.interests.map((interest) => `<li>${interest}</li>`).join("")}
      </ul>

      <button type="button">View Profile</button>
    `;

    profileContainer.appendChild(profileCard);
  });
}

function populateInterestFilter(members) {
  const interests = members.flatMap((member) => member.interests);

  const uniqueInterests = [...new Set(interests)];

  uniqueInterests.sort();

  uniqueInterests.forEach((interest) => {
    const option = document.createElement("option");

    option.value = interest;
    option.textContent = interest;

    interestFilter.appendChild(option);
  });
}

function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedInterest = interestFilter.value;

  const filteredMembers = allMembers.filter((member) => {
    const searchableText = [
      member.name,
      member.title,
      member.bio,
      member.university,
      member.degree,
      ...member.skills,
      ...member.interests,
      ...member.projects.map((project) => project.name),
      ...member.projects.map((project) => project.description),
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    const matchesInterest =
      selectedInterest === "" || member.interests.includes(selectedInterest);

    return matchesSearch && matchesInterest;
  });

  displayMembers(filteredMembers);
}

searchInput.addEventListener("input", applyFilters);
interestFilter.addEventListener("change", applyFilters);

clearFiltersButton.addEventListener("click", () => {
  searchInput.value = "";
  interestFilter.value = "";

  applyFilters();
});
