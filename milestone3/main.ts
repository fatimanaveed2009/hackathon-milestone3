// Select form and display area elements
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.querySelector('.resume-display') as HTMLDivElement;

// Define an interface for form data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
}

// Function to generate the resume based on form data
function generateResume(data: ResumeData): void {
    resumeDisplay.innerHTML = `
        <h2>${data.name}'s Resume</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <h3>Education</h3>
        <p>${data.education}</p>
        <h3>Experience</h3>
        <p>${data.experience}</p>
        <h3>Skills</h3>
        <p>${data.skills}</p>
    `;
}

// Function to handle form submission
function handleSubmit(event: Event): void {
    event.preventDefault();

    // Collect input values and typecast
    const name = (document.getElementById('Name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Create ResumeData object
    const formData: ResumeData = { name, email, phone, education, experience, skills };

    // Generate the resume using collected data
    generateResume(formData);
}

// Event listener for form submission
resumeForm.addEventListener('submit', handleSubmit);
