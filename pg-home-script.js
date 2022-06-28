projects_btn = document.getElementById("projects-button");
projects = document.getElementById("projects");

projects_btn.addEventListener('click', e => {
    projects.scrollIntoView({behavior: 'smooth'});
})
