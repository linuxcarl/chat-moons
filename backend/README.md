# API chat moons

This API REST was generated with NODE JS
## Installation

Installation
```
npm install
```
Run
```
npm start
```
Develop

If you want run, run the next line:
```
npm run dev
```

## API url
Allowed routes:

### `/messages`

This route handles messages.

#### POST /messages
Create a message record.

Data send in body as JSON.
```
{
  "user": "",
  "message": ""
}
```
Response code 201:
```
{
    "error": false,
    "status": 201,
    "body": {
        "_id": "5f26245d75898342a923fd2b",
        "user": "nameUser",
        "message": "Message content",
        "date": "2020-08-02T02:26:37.677Z"
    }
}
```
#### GET /messages

Retrieve all messages.

Response 200:
```
{
  "error": false,
    "status": 200,
    "body": [
        {
            "_id": "5f261dc13b5dc61abfa5e2a2",
            "user": "NameUser",
            "message": "MessageContent",
            "date": "2020-08-02T11:58:25.542Z"
        }
    ]
}
```
Response code 404:
```
{
    "statusCode": 404,
    "error": "Not Found",
    "message": "Not Found",
}
```

### [socket.io](https://www.npmjs.com/package/socket.io)

Socket.IO enables real-time bidirectional event-based communication. 

### [Helmet](https://helmetjs.github.io/)

Helmet helps you secure your Express apps by setting various HTTP headers. It’s not a silver bullet, but it can help!

### [Cors](https://www.npmjs.com/package/cors)

CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS

## Errors / Validation

### [Boom](https://github.com/hapijs/boom)

@hapi/boom is part of the hapi ecosystem and was designed to work seamlessly with the hapi web framework and its other components (but works great on its own or with other frameworks).

### [Joi](https://github.com/hapijs/joi)

@hapi/joi Is part of the hapi ecosystem and was designed to work seamlessly with the hapi web framework and its other components (but works great on its own or with other frameworks).

## Code Stand

### [Eslint](https://eslint.org/)

Find and fix problems in your JavaScript code.

### [Prettier](https://prettier.io/)

An opinionated code formatter.

### [Husky](https://www.npmjs.com/package/husky)
Husky can prevent bad git commit, git push and more 🐶 woof!

## Databases

### [MongoDB](https://www.mongodb.com/es)

This database stores the chats.


* **Carlos Enrique Ramírez Flores** - *Backend Development* - [GitHub](https://github.com/linuxcarl),  [Web Site](https://www.carlosramirezflores.com), [Linkedin](https://www.linkedin.com/in/carlos-enrique-ram%C3%ADrez-flores/)


## License
[MIT](https://choosealicense.com/licenses/mit/)