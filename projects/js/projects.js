// Projects page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "Project 1",
            description: "My first awesome project",
            link: "#"
        },
        {
            title: "Project 2",
            description: "My second amazing project",
            link: "#"
        }
    ];
    
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">View Project</a>
        `;
        container.appendChild(projectElement);
    });
});
