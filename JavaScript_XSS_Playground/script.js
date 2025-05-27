// Refactored code for better readability and modularity
function setTestData() {
    // setting cookie for testing purposes
    document.cookie = "user=Sagar_Biswas; path=/";

    // Set localStorage and sessionStorage data for testing purposes
    localStorage.setItem("user", "Sagar_Biswas_LocalStorage");
    sessionStorage.setItem("sessionUser", "Sagar_Biswas_SessionStorage");
    console.log("Test data set:", {
        cookie: document.cookie,
        localStorage: localStorage.getItem("user"),
        sessionStorage: sessionStorage.getItem("sessionUser")
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    const mode = document.getElementById('modeToggle').value;
    const userInput = document.getElementById('userInput').value;
    const outputDiv = document.getElementById('output');

    if (mode === 'vulnerable') {
        // Log the user input for debugging
        console.log("Vulnerable mode input:", userInput);
        if (userInput.includes('<') || userInput.includes('>')) {
            // Treat input as HTML and inject using innerHTML
            outputDiv.innerHTML = userInput;
        } else {
            // Treat input as JavaScript and execute using eval()
            try {
                eval(userInput);
            } catch (error) {
                console.error("Error executing user input:", error);
            }
        }
    } else {
        // Secured mode: sanitize user input before injecting into the DOM
        const sanitizedInput = userInput.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        outputDiv.textContent = sanitizedInput;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTestData();
    document.getElementById('xssForm').addEventListener('submit', handleFormSubmit);
});
