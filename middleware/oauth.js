'use strict'

// const tokenServerUrl = process.env.TOKEN_SERVER_URL;
// const remoteAPI = process.env.REMOTE_API;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

/**
 * This function is the oauth middleware
 * By now, the redirect has taken place and I have the code from the oauth provider
 * Now I can get user information based on the id from the oauth provider
 * @param {Objects} req 
 * @param {Object} res 
 * @param {Callback} next 
 */
module.exports = async (req, res, next) => {
    //redirect has taken place and I have a code from the oauth provider
    try {
        const access_token = await exchangeCodeForToken(req.query.code);
        //getting user info from the oauth provider
        const userInfo = await getRemoteUserInfo(access_token);
        //get my user info based on the id from the oauth provider
        const { user, token } = await getUser(userInfo);
        req.user = user;
        req.token = token;
        next();
    } catch (e){
        res.status(404).send(e.message);
    }
};

/**
 * This function takes the code from Oauth that is associated with the user and exchanges it for access token.
 * Ask provider for token that gives us login abilites of user.
 * If Google validates, it will give us access token similar to the token the user gets
 * @param {String} code 
 */ 
async function exchangeCodeForToken(code) {
    const tokenRequest = {
        code: code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
    }
    // We will not be using superagent
    // const tokenResponse = await superagent.post(tokenServerUrl).type('form').send(tokenRequest)
    let access_token = tokenResponse.body.access_token;
    return access_token;
}


/**
 * This function provides access to to the user information
 * By this stage, I have the bearer token that makes us 'logged in as user'
 * @param {String} token 
 */
async function getRemoteUserInfo(token) {
    let userResponse =
      await superagent.get(remoteAPI)
        .set('user-agent', 'express-app')
        .set('Authorization', `Bearer ${token}`)
  
    let user = userResponse.body;
    return user;
}


 /**
  * This function retrieves an account from my Mongo users DB matching the user's account
  * This function uses the remoteUser object to find the corresponding user in the DB
  * @param {Object} remoteUser 
  */
async function getUser(remoteUser) {
    let userRecord = {
        googleId: remoteUser.ID
    }
    let user = await Users.find(userRecord);
    let token = await Users.generateToken(user[0]);
    return { user, token };
}