// The actions array contains a set of action objects that define the buttons that
//  we want to show to the user. Actions get an ID (the action property) 
// when they are defined so that we can tell them apart in the service worker. We can also specify the display text (title), and add an optional image (icon).
//!! The Notifications API lets us display system notifications to the user

self.addEventListener('install', event => {
  console.log('Service worker installing...');
  // Add a call to skipWaiting here
self.skipWaiting();
  /// good place for caching assets 
});
self.addEventListener('activate', event => {
  console.log('Service worker activating...');
});
// When the user closes a notification, 
// a notificationclose event is triggered in the service worker.
// TODO 2.6 - Handle the notificationclose event
self.addEventListener('notificationclose', event => {
  const notification = event.notification;
//   console.log('notification :', notification);
  const primaryKey = notification.data.primaryKey;
//   console.log('Closed notification: ' + primaryKey);
});

// TODO 2.7 - Handle the notificationclick event
self.addEventListener('notificationclick', event => {
    //   clients.openWindow('https://google.com');
  // TODO 2.8 - change the code to open a custom page & close notifcation
  const notification = event.notification;
  const primaryKey = notification.data.primaryKey;
    // do not confuse actions with action. actions in notifcation hold the actions
    // whereas action in event.action is either what they do
// clients.openWindow('samples/page' + primaryKey + '.html');
// notification.close()
 const action = event.action
  // TODO 2.9 - handle actions
    //we check for the "close" action first and handle the "explore" action in an else block.
    // This is a best practice as not every platform supports action buttons, and not every platform displays all your actions. Handling actions in this way provides a 
    //default experience that works everywhere.
   if (action === 'close') {
        console.log('action  :', action );
    notification.close();
  } else {
    clients.openWindow('samples/page' + primaryKey + '.html');
    notification.close();
  }

});
// TODO 3.1 - add push event listener

//!! The Push API is an interface that lets your app subscribe to a push service and enables the service worker to receive push messages.
