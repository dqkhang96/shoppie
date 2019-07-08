import oauthSignature from 'oauth-signature';

export function generateAuthorization(url, httpMethod, params) {
  var nonce = (Math.random() * 1e32).toString(32),
    // const timeStamp = new Date().getTime();
    timeStamp = '1559616233',//Tạm thời fix cứng vì device và server đang lệch múi giờ
    accessToken = Config.ACCESS_TOKEN,
    customerKey = Config.CONSUMER_KEY,
    consumerSecret = Config.CONSUMER_SECRET,
    tokenSecret = Config.TOKEN_SECRET,

    parameters = {
      oauth_consumer_key: consumerKey,
      oauth_nonce: nonce,
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: timeStamp,
      oauth_token: accessToken,
      oauth_version: '1.0',
    },

  // consumerSecret = Config.CONSUMER_SECRET,
  // tokenSecret = Config.TOKEN_SECRET;

  var allParams = parameters;
  if (typeof (params) != 'undefined')
    allParams = { ...parameters, ...params }

  signature = oauthSignature.generate(httpMethod, url, allParams, consumerSecret, tokenSecret);

  return "OAuth oauth_consumer_key=\"" + consumerKey + "\",oauth_nonce=\"" + nonce + "\",oauth_signature=\"" + signature + "\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"" + timeStamp + "\",oauth_token=\"" + accessToken + "\",oauth_version=\"1.0\"";
  // return signature;
}