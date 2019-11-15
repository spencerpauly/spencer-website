# About This Project
This project was created to make a clean and expandable portfolio website for my ever-growing repository of projects.

## How to run

```
npm start
```

## How to build/deploy

Get PID of process currently running on port:
```
lsof -i :3000
```
Kill process:
```
kill <pid>
```
If there's changes from the previous build:
```
npm run build
```
Start new process:
```
setsid serve -s build -l 3000
```
* CTRL+L to break from GUI


## Potential bugs/security risks
Must make sure spotify public/private key is not commmitted to git repository.

## Future todo
- Add easier color pallette management through scss or sass
- Implement CI/CD pipeline
- Docker

## Other
#### Currently running projects
| Port          | Project                         |
| ------------- |:-------------------------------:|
| 3000          | Main Website                    |
| 3001          | Spotify Statistics Web App      |
| 3002          | Youtube Minimal Search App      |


## Developer's Note
This project was an entirely new concept for me. It incorporated JQuery, Ajax, HTML, CSS, Bootstrap, Javascript, UI & UX Design, NodeJS, and working with an API, many of which were entirely new technologies for me. I think this project was important, though, because I just went in and for the first time I felt like I had enough background knowledge in general software development that I could pick up any new technology fairly easily, so this project was definately a testemant to that. Looking back I'm still not too happy with the final design. I tried many times to make the javascript class-based, and each time failed, so if I was to try this again I would probably seek to understand classes in a functional programming language a lot better. I felt like I had a lot of hard to maintain code, but possibly in the future I will come back to this project and clean it up when I'm more knowledgable.
