// Getting Refrences to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayelement = document.getElementById('resume-display') as HTMLDivElement


//Handle form Submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); //prevent page reload

    //Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fname = (document.getElementById('f/name') as HTMLInputElement).value;
    const caste = (document.getElementById('caste') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    //Generate the resume details dynamically
    const resumeHTML=`
    <h2><b><center><u>Editable Resume</u></b></h2>
    <h3>Personal Information</h3>
    <p><b>Name: </b><span contenteditable="true">${name}</span></p> 
    <p><b>F/Name: </b><span contenteditable="true">${fname}</span></p>
    <p><b>Caste: </b><span contenteditable="true">${caste}</span></p>
    <p><b>Email: </b><span contenteditable="true">${email}</span></p>
    <p><b>Contact No: </b><span contenteditable="true">${phone}</span></p>
    
    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;
    

    //Display the generated resume
    if(resumeDisplayelement){
        resumeDisplayelement.innerHTML = resumeHTML;
    }else {
        console.error('The resume display element is missing.')
    }

    
});


//Made Editable Resume by using span contenteditable="true" 
