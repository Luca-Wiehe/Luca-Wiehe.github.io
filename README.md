# My Homepage
This page serves as an overview for anyone who is interested in past programming projects I created or contributed to.

## Preview
<div style="display: grid; grid-template-columns: repeat(2, 1fr); grid-gap: 20px; justify-content: center; text-align: center;">
  <div>
    <img width="1400" alt="image" src="https://github.com/Luca-Wiehe/Luca-Wiehe.github.io/assets/85710000/0e193b62-c915-4ded-bb8e-0fd841b665d8">
    <br>
    <em>Screenshot 1: Landing Page</em>
  </div>
  <br>
  <div>
    <img width="1400" alt="image" src="https://github.com/Luca-Wiehe/Luca-Wiehe.github.io/assets/85710000/b9e82a2b-7203-4881-868d-3147b3dd2ed3">
    <br>
    <em>Screenshot 2: Timeline</em>
  </div>
  <div>
    <img width="1400" alt="image" src="https://github.com/Luca-Wiehe/Luca-Wiehe.github.io/assets/85710000/0bf1ca32-4f00-4cee-adab-3553227e6c12">
    <br>
    <em>Screenshot 3: Project Overview</em>
  </div>
</div>

## Projection Description

### Motivation for Application
Having a personal portfolio website can be a more interactive way to explore my past experience than a .pdf-file with my CV. I use this website as a sandbox for experimenting with different UI-designs, even if they are not at the core of my programming interests. It allows me to periodically refresh my knowledge of web architectures since taste and my portfolio evolve over time.

### Choice of Tech Stack
The portfolio uses React.js as a framework. Reasons for choosing React.js include:
+ Component-based architecture: Reusable components allow clean and readable code
+ Exposure to HTML, CSS, JavaScript: Many web architectures are based on these technologies so I consider it valuable to have them as part of my skill set
+ Github Pages Support: React.js Applications can be made available to the public because of Github Pages support

### Repository Structure
`/public/`: Contains resources (e.g. images/.txt files)

`/src/`: Contains source code
+ `/src/UiComponents/`: Reusable UI Components and their corresponding .css-styling
+ `/src/Views/Header`: Navigation Components
+ `/src/Views/Body`: UI for pages of the website (e.g. overview of CV entries with corresponding styles)
+ `/src/Constants/`: Constants (e.g. CV entries, project descriptions, etc.)
