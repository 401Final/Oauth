# Oauth
Oauth login via Google

### Authors: Riva Davidowski and Darius Lee Pasilaban


### Installing Dependencies/Using Oauth:

You will need to clone the repo and do an `npm i`. We used Google for our Oauth provider and connected our MongoDB schema/collection to our oauth route.

Our dependencies include:

- **The entry point for this app is: `index.js`**
- `npm install` for the following:
  
  ```
  
    "base-64": "^1.0.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "nodemon": "^2.0.6",
    "passport-google-oauth20": "^2.0.0",
    "passport": "^0.4.1"

```


**Start server:**

/* give it a port number and optionally pass a function to call when app starts listening on given port*/

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))



### env Requirements:

PORT=3001
JWT_SECRET=(add your secret string here)
CLIENT_ID=
CLIENT_SECRET=
REDIRECT_URI=http://localhost:3001/oauth
TOKEN_SERVER_URL=

### UML
