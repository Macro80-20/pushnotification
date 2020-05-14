/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

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
  console.log('notification :', notification);
  const primaryKey = notification.data.primaryKey;

  console.log('Closed notification: ' + primaryKey);
});

// TODO 2.7 - Handle the notificationclick event

// TODO 3.1 - add push event listener
