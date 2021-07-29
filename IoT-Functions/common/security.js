function authentication(authheader) 
{
    // Check if HTTP Basic Authentication header was sent
    if (!authheader) 
    {
        return false;
    }

    // Parse the User and Password from the HTTP Basic Authentication header 
    var auth = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
 
    // Authenticate the User and Password
    if (user == '[REPLACE ME]' && pass == '[REPLACE ME]') 
    {
        return true; 
    } 
    else 
    {
        return false;
    }
}

module.exports = { authentication: authentication };