const profileContainer = document.getElementById("profile-container");
const searchInput = document.getElementById("search-input");
const clearFiltersButton = document.getElementById("clear-filters");
const interestFilter = document.getElementById("interest-filter");
const profileModal = document.getElementById("profile-modal");
const modalProfileContent = document.getElementById("modal-profile-content");
const closeModalButton = document.getElementById("close-modal");

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
    <img
    src="${member.photo}"
    alt="Profile placeholder for ${member.name}"
    class="profile-photo"
  >

      <h3>${member.name}</h3>
      <p class="profile-title">${member.title}</p>
      <p>${member.bio}</p>

      <h4>Skills</h4>
<ul class="skill-list">
  ${member.skills.map((skill) => `<li>${skill}</li>`).join("")}
</ul>

      <h4>Professional Interests</h4>
<ul class="interest-list">
  ${member.interests.map((interest) => `<li>${interest}</li>`).join("")}
</ul>

      <button
  type="button"
  class="view-profile-button"
  data-member-id="${member.id}"
>
  View Profile
</button>
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

profileContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".view-profile-button");

  if (!button) {
    return;
  }

  const memberId = Number(button.dataset.memberId);

  const selectedMember = allMembers.find((member) => {
    return member.id === memberId;
  });

  if (!selectedMember) {
    return;
  }

  modalProfileContent.innerHTML = `
  <img
    src="${selectedMember.photo}"
    alt="Profile photo for ${selectedMember.name}"
    class="profile-photo"
  >

  <h2>${selectedMember.name}</h2>

  <p class="profile-title">
    ${selectedMember.title}
  </p>

  <p>${selectedMember.bio}</p>

  <h3>Education</h3>
  <p>
    ${selectedMember.degree}<br>
    ${selectedMember.university}
  </p>

  <h3>Skills</h3>
  <ul class="skill-list">
    ${selectedMember.skills.map((skill) => `<li>${skill}</li>`).join("")}
  </ul>

  <h3>Certifications</h3>
  <ul>
    ${selectedMember.certifications
      .map((certification) => `<li>${certification}</li>`)
      .join("")}
  </ul>

<h3>Projects</h3>
<ul>
  ${selectedMember.projects
    .map(
      (project) => `
        <li>
          <strong>${project.name}</strong><br>
          ${project.description}
        </li>
      `,
    )
    .join("")}
</ul>

  <h3>Professional Interests</h3>
  <ul>
    ${selectedMember.interests
      .map((interest) => `<li>${interest}</li>`)
      .join("")}
  </ul>

  <h3>Location</h3>
  <p>${selectedMember.location}</p>

  <h3>Contact</h3>

<p>
  <a href="mailto:${selectedMember.email}">
    ${selectedMember.email}
  </a>
</p>

${
  selectedMember.linkedin
    ? `
    <p>
      <a href="${selectedMember.linkedin}" target="_blank" rel="noopener noreferrer">
        View LinkedIn Profile
      </a>
    </p>
  `
    : ""
}

${
  selectedMember.resume
    ? `
    <p>
      <a href="${selectedMember.resume}" target="_blank" rel="noopener noreferrer">
        View Resume
      </a>
    </p>
  `
    : ""
}
`;

  profileModal.hidden = false;
});

closeModalButton.addEventListener("click", () => {
  profileModal.hidden = true;
});
