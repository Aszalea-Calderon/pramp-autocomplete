SECURITY - SAME ORIGIN POLICY

Error mesage: 

`Access to script at 'file:///Users/eunice/github/boilerplate-gulp-basic/app/js/script.js' from origin 'null' has been blocked by CORS policy: The response is invalid.`

 ES6 modules only work when you're running a local server

ES6 module support in Chrome 62/Chrome Canary 64, does not work locally, CORS error<br>
https://stackoverflow.com/questions/46992463/es6-module-support-in-chrome-62-chrome-canary-64-does-not-work-locally-cors-er?rq=1

2017
Unlike regular scripts, ES6 modules are subject to same-origin policy. 
This means that you cannot import them from the file system or cross-origin without a CORS header (which cannot be set for local files).

Basically you need to run this code from a (local) server or disable same-origin in the browser for testing (do not do this permanently). 

---

Access to Image from origin 'null' has been blocked by CORS policy<br>
https://stackoverflow.com/questions/41965066/access-to-image-from-origin-null-has-been-blocked-by-cors-policy

You're running into a CORS error.
Trying to access your file using the local file system doesn't work in your case.
Origin is null because it's your local file system. Could you possibly host this png file?

---
NPM SHORTCUTS

Installing packages locally

- `npm init` - Creates package.json file
- `npm init --y` - Quicker method

devDependencies<br>
- `npm install --save-dev browser-sync gh-pages gulp@next`
- `npm i -S <package name>`

dependencies<br>
- `npm install --save <package name>`
- `npm i -D <package name>`

---
CLEAR AUTOCOMPLETE SUGGESTIONS

Example Code
- https://codepen.io/postleonardo/pen/PwdQmv?editors=1010
- https://www.w3schools.com/howto/howto_js_autocomplete.asp
- https://github.com/eunicode/Voyage2-Turtles-11/blob/master/src/components/GoogleAutosuggest.js

Control flow is important.
1. First do if inputString exists ...
2. Then do if inputString doesn't exist ...