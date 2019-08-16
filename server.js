var Pusher = require('pusher');

var channels_client = new Pusher({
  appId: '843339',
  key: '0e86220ab0d1dda9ba3e',
  secret: '0ddbda89ca51656bb139',
  cluster: 'us2',
  encrypted: true
});

channels_client.trigger('my-channel', 'my-event', {
  "message": "hello world"
});
