// Getting Refrences to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayelement = document.getElementById('resume-display');
//Handle form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //Collect input values
    var name = document.getElementById('name').value;
    var fname = document.getElementById('f/name').value;
    var caste = document.getElementById('caste').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generate the resume details dynamically
    var resumeHTML = "\n    <h2><b><center><u>Editable Resume</u></b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name: </b><span contenteditable=\"true\">".concat(name, "</span></p> \n    <p><b>F/Name: </b><span contenteditable=\"true\">").concat(fname, "</span></p>\n    <p><b>Caste: </b><span contenteditable=\"true\">").concat(caste, "</span></p>\n    <p><b>Email: </b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Contact No: </b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    \n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    //Display the generated resume
    if (resumeDisplayelement) {
        resumeDisplayelement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
//Made Editable Resume by using span contenteditable="true" 
