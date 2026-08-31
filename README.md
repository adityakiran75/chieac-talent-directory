# ChiEAC Talent Directory

The ChiEAC Talent Directory is a public, searchable directory designed to help employers, organizations, and partners discover ChiEAC members based on their professional skills, education, projects, and career interests.

The project was developed as a lightweight static website using HTML, CSS, JavaScript, and JSON.

## Features

- Browse ChiEAC member profiles
- Search members by name, skills, education, projects, and professional interests
- Filter members by professional interest
- View detailed member profiles
- Access member resumes and LinkedIn profiles
- Responsive layout for desktop, tablet, and mobile devices
- Keyboard-accessible navigation and profile interactions
- Member profile submission, update, and removal request process
- Public display consent and administrative review workflow

## Technologies Used

- HTML5
- CSS3
- JavaScript
- JSON
- Google Forms
- Git
- GitHub
- Visual Studio Code
- Live Server

## Project Structure

```text
chieac-talent-directory/
│
├── index.html
├── directory.html
├── about.html
├── privacy.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── app.js
│
├── data/
│   └── members.json
│
├── images/
│   └── profiles/
│
├── resumes/
│
├── profile-template.md
├── project-plan.md
├── wireframe.md
└── README.md
```

## Member Data

Member profile information is stored in:

`data/members.json`

Each profile can include information such as:

- Name
- Professional title
- Biography
- Professional email
- LinkedIn profile
- Resume
- University and degree
- Location
- Skills
- Certifications
- Projects
- Professional interests
- Employment interests
- Profile photo

The current project contains fictional sample profiles for development and demonstration purposes.

## Profile Management Workflow

The current version uses a file-based profile management process.

The workflow is:

1. A ChiEAC member submits a new profile, update request, or removal request through the profile form.
2. An administrator reviews the submission and verifies public display consent.
3. Approved profile information is added to or updated in `data/members.json`.
4. Associated profile photos and resumes are added to their respective folders.
5. The updated website is published.

Profiles should not be publicly displayed until they have been reviewed and approved.

## Google Form Integration

The current Google Form connected to the Talent Directory is a development form used for testing and demonstration.

Before production deployment, a new Google Form should be created under a ChiEAC-controlled Google account. The form links in the website should then be updated to point to the ChiEAC-owned production form.

The production form should support:

- New profile submissions
- Existing profile updates
- Profile removal requests
- Public display consent

Profile submissions should be reviewed and approved by an administrator before being added to the public directory.

## Running the Project Locally

1. Clone or download the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using Live Server.
4. Navigate through the website using the Home, Browse Talent, About, and Privacy links.

Using a local web server such as Live Server is recommended because the directory loads member information from the JSON data file using JavaScript.

## Accessibility and Responsive Design

The website includes several basic accessibility and responsive design features:

- Keyboard-accessible navigation
- Visible keyboard focus indicators
- Descriptive labels for profile buttons
- Alternative text for profile images
- Escape key support for closing detailed profiles
- Keyboard focus management for profile dialogs
- Responsive profile grids
- Responsive navigation and search controls

## Privacy

The Talent Directory is intended to display professional information voluntarily submitted for public display.

Members can request corrections, updates, or removal of their profiles. Sensitive personal information should not be included in public member profiles.

See `privacy.html` for the website's privacy notice.

## Project Status

The current version is an MVP (Minimum Viable Product) developed for testing, demonstration, and organizational review.

Before production use:

- Replace fictional sample profiles with approved member information.
- Create the production Google Form under a ChiEAC-controlled account.
- Update website links to the production form.
- Verify member consent before publication.
- Perform final testing with production content.