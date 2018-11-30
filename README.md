# Basic Gulp Boilerplate

## Description

This is a bare bones starting point for creating quick, simple web projects with vanilla CSS and JavaScript. It is a local development alternative to CodePen.

## Features

- Live reloading with Browsersync

## Getting started

### Creating a project

Change the working directory to the location you want the cloned directory to be made.

```
cd <path>
```

Clone the repo with HTTPS URLs.

```
git clone https://github.com/eunicode/boilerplate-gulp-basic.git <yourNewRepoName>
```

Or clone with SSH URLs.

```
git clone git@github.com:eunicode/boilerplate-gulp-basic.git <yourNewRepoName>
```

Then change directories to your new project.

```
cd <yourNewRepoName>
```

And remove the `.git` subdirectory. <br>
Then re-initialize the directory as a Git repository.

```
rm -rf .git
git init
```

Add/stage the files in your new repo.<br>
Then commit the files.

```
git add .
git commit -m ":tada: First commit"
```

### Creating a repo on GitHub

Create a new repo on GitHub. To avoid errors, do not initialize the new repo with README, license, or gitignore files.

Copy the remote repo URL, then add the remote to your local repo.

```
git remote add origin https://github.com/username/yourNewRepoName.git
```

### Directory structure

```
yourNewRepoName
├── README.md
├── LICENSE
├── notes.md
├── node_modules
├── package.json
├── .gitignore
└── app
    ├── css
    │   └── style.css
    ├── js
    │   └── script.js
    └── index.html
```

### Installation

Install dependencies

```
npm install
```

### Development

Inside the newly created project, you can run `gulp` to start the live reloading Browsersync server.


