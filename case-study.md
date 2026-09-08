# ChiEAC Talent Directory — Project Case Study

## Project Overview

The ChiEAC Talent Directory is a public, searchable website designed to help showcase the professional skills, education, projects, and career interests of ChiEAC members.

The project was developed as a lightweight web application using HTML, CSS, JavaScript, JSON, and Google Forms. The final MVP allows employers and recruiters to browse member profiles, search for talent, filter profiles by professional interests, view detailed profile information, access resumes and LinkedIn profiles, and connect with potential candidates.

The website also provides ChiEAC members with a process for submitting new profiles and requesting updates or removal of existing profiles.

## The Problem

ChiEAC provides students and volunteers with opportunities to contribute to projects and gain practical experience. However, completing a project or volunteer experience does not automatically provide those individuals with visibility in the employment market.

A collection of resumes or a spreadsheet could store member information, but it would not provide employers with a convenient public interface for discovering and comparing potential candidates.

The Talent Directory was developed to create a bridge between the experience members gain through ChiEAC and potential employment or professional opportunities.

## Users and Value

The project was designed around three primary groups.

### ChiEAC Members

Members who have volunteered or completed projects through ChiEAC gain a platform where they can represent themselves professionally and showcase their skills, education, projects, interests, and experience.

This provides another opportunity for members to increase their visibility in the broader employment market.

### ChiEAC

The directory provides ChiEAC with a way to demonstrate how the organization supports its community beyond simply assigning projects.

ChiEAC can provide students and volunteers with opportunities to gain practical experience while also helping make that experience visible to organizations that may be seeking talent.

### Employers and Recruiters

Employers and recruiters can use the directory to identify potential candidates based on skills, education, projects, professional interests, and location.

For employers already familiar with ChiEAC, or organizations interested in identifying talent relevant to their needs, the directory can reduce the effort required to locate potential candidates and provide a more direct connection to ChiEAC members.

## Starting Point

I began this project with no prior exposure to or experience with HTML, CSS, or JavaScript.

As a result, the project involved learning the fundamentals of web development while simultaneously applying those concepts to a real organizational use case.

Instead of learning each technology independently and then beginning the project, much of my learning occurred while developing, testing, and debugging individual features.

## MVP Approach

The first version of the Talent Directory was intentionally designed around function over form.

Rather than introducing a database, authentication system, or complex administrative interface, the MVP uses a lightweight architecture consisting of:

- HTML for website structure
- CSS for layout, styling, and responsive design
- JavaScript for interactivity and dynamic profile rendering
- JSON for storing member profile data
- Google Forms for profile submission and update requests
- Git and GitHub for version control
- GitHub Pages for public deployment

The objective was to create a system that was reliable, understandable, and relatively easy to maintain.

Member submissions are reviewed before approved information is manually added to the public dataset. This keeps the administrative workflow simple while providing control over what information becomes publicly visible.

The approach also limits the number of components that need to be maintained or troubleshot if a problem occurs.

## Development Process

Development was completed incrementally.

### Website Structure

The initial stage focused on establishing the basic website structure and navigation.

The website includes:

- Home
- Browse Talent
- About
- Privacy

A reusable profile structure was also defined to determine what professional information would be displayed for each member.

### Member Data and Dynamic Profiles

A JSON dataset was created containing fictional sample member profiles for development and testing.

JavaScript was then used to load the dataset and dynamically generate profile cards rather than manually creating separate HTML content for every member.

Each profile can include:

- Name
- Professional title
- Biography
- Skills
- Education
- Certifications
- Projects
- Professional interests
- Employment interests
- Location
- Professional email
- LinkedIn profile
- Resume
- Profile photo

### Search and Filtering

Search functionality was added to allow users to locate members using information such as names, skills, degrees, projects, and professional interests.

A professional interest filter was also implemented.

Search and filtering can be used together, and users can clear the selected criteria to return to the complete directory.

### Detailed Profiles

Detailed profile views were implemented using a modal interface.

Users can select View Profile to see additional information without leaving the directory.

The detailed view includes professional information as well as links to the member's resume and LinkedIn profile when available.

### Member Submission Workflow

A Google Form was created to support:

- New profile submissions
- Existing profile updates
- Profile removal requests
- Public display consent

For the MVP, submissions are intended to be reviewed by an administrator before approved profile information is added to the public directory.

The current form is a development form. A production version should eventually be created and maintained through a ChiEAC-controlled account.

### Responsive Design and Accessibility

The website was tested and adjusted for different screen sizes.

The profile directory changes between three, two, and one-column layouts depending on the available screen width.

Search controls, navigation, and detailed profile views also adapt to smaller displays.

Basic accessibility improvements include:

- Keyboard navigation
- Visible keyboard focus indicators
- Alternative text for profile images
- Descriptive labels for profile buttons
- Escape key support for closing detailed profiles
- Keyboard focus management when opening and closing profiles

### Deployment

The completed MVP was stored in GitHub and publicly deployed using GitHub Pages.

The live deployment was tested separately from the local development environment to verify that navigation, profile data, search, filtering, detailed profiles, resumes, external links, the Google Form, and responsive layouts continued to function correctly.

## Primary Challenge

The most difficult part of the project was debugging when something did not work as expected.

Because I started with no web development experience, locating a problem often required tracing through HTML, CSS, or JavaScript that was still relatively unfamiliar to me.

Navigation-related problems were particularly challenging. Small mistakes in page structure or related code could affect how a page appeared or behaved, requiring me to locate the source of the problem rather than simply identify the visible symptom.

As the project progressed, I became more comfortable isolating problems, examining the relevant code, making targeted changes, and testing the result in the browser.

Quickly scanning unfamiliar code and identifying faults is still an area I want to continue developing.

## Key Learning

One of my biggest takeaways from the project was understanding how the primary components of a website work together.

I came to understand HTML as the structural foundation of a webpage. CSS controls how that structure is visually presented, while JavaScript provides behavior and interactivity.

For example, HTML can define a search input, CSS can determine how that input appears, and JavaScript can use the user's input to dynamically change which profiles are displayed.

I also became considerably more confident reading code. Code that would have been completely unfamiliar to me at the beginning of the project became increasingly understandable as I worked through the development process.

The project also provided practical exposure to Git and GitHub, including version control, commits, repositories, and deployment.

This experience is particularly useful because I am also learning machine learning, where Git and GitHub can be used to manage, document, and share technical projects.

## Final MVP

The completed MVP provides a functional public talent directory with:

- Five fictional demonstration profiles
- Dynamic profile generation from JSON data
- Keyword search
- Professional interest filtering
- Detailed member profiles
- Resume and LinkedIn integration
- Member submission and update workflow
- About and Privacy pages
- Responsive layouts
- Keyboard accessibility features
- Public deployment through GitHub Pages
- Technical and administrative documentation

The project intentionally remains lightweight. Its purpose is to provide a reliable foundation that ChiEAC can evaluate and expand rather than introduce unnecessary technical complexity in the first version.

## Reflection

After completing the project, I would be comfortable taking on another basic web development project and using the opportunity to continue expanding my skills.

Having completed the development cycle once, I now have a better understanding of both my strengths and the areas where I still need improvement.

A future project would allow me to approach the planning stage differently because I would no longer be learning all of the fundamental technologies for the first time. I could spend more time considering alternative website structures, design approaches, and user workflows before implementation begins.

I would also use future projects to continue improving my debugging skills and my ability to quickly identify problems within code.

Beyond technical development, the experience provides a foundation for strengthening other skills including requirements gathering, project planning, stakeholder communication, and project management.

## Potential Version 2.0 Improvements

Future versions of the Talent Directory could consider:

- Organization-controlled profile submission forms
- Improved administrative profile management
- Automated processing of approved profile submissions
- Expanded search and filtering options
- Individual profile URLs
- Improved visual branding based on ChiEAC brand standards
- Additional accessibility testing
- Analytics to understand how visitors use the directory
- A database-backed architecture if the number of members grows enough to justify it

These improvements should be evaluated based on actual organizational needs rather than added solely to increase technical complexity.