var Pusher = require('pusher');

var channels_client = new Pusher({
  appId: '843339',
  key: '0e86220ab0d1dda9ba3e',
  secret: '0ddbda89ca51656bb139',
  cluster: 'us2',
  encrypted: true
});

channels_client.trigger('my-channel', 'my-event', {
  "message": https://query1.finance.yahoo.com/v7/finance/download/QQQ?period1=1534118400&period2=1566172800&interval=1wk&events=history&crumb=7uNBSSKjJmC
});
