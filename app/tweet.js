
/*
*	Code snippet for posting tweets to your own twitter account from node.js.
*	You must first create an app through twitter, grab the apps key/secret,
*	and generate your access token/secret (should be same page that you get the 
*	app key/secret).
* 	Uses oauth package found below:
*		https://github.com/ciaranj/node-oauth
*		npm install oauth
*	For additional usage beyond status updates, refer to twitter api
*		https://dev.twitter.com/docs/api/1.1
*/

var OAuth = require('oauth');

var twitter_application_consumer_key = '';  // API Key
var twitter_application_secret = '';  // API Secret
var twitter_user_access_token = '';  // Access Token
var twitter_user_secret = '';  // Access Token Secret

var oauth = new OAuth.OAuth(
	'https://api.twitter.com/oauth/request_token',
	'https://api.twitter.com/oauth/access_token',
	twitter_application_consumer_key,
	twitter_application_secret,
	'1.0A',
	null,
	'HMAC-SHA1'
);

var status = '';  // This is the tweet (ie status)

var postBody = {
	'status': status
};

// console.log('Ready to Tweet article:\n\t', postBody.status);
oauth.post('https://api.twitter.com/1.1/statuses/update.json',
	twitter_user_access_token,  // oauth_token (user access token)
    twitter_user_secret,  // oauth_secret (user secret)
    postBody,  // post body
    '',  // post content type ?
	function(err, data, res) {
		if (err) {
			console.log(err);
		} else {
			// console.log(data);
		}
	});