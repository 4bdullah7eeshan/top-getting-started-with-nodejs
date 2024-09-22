const EventEmitter = require('events');

const door = new EventEmitter();

door.on('open', () => {
    console.log('Door was opened');
});

door.emit('open');

console.log(door.eventNames());

door.on('slam', () => {
    console.log('Door was slammed');
});

door.emit('slam');

console.log(door.eventNames());

console.log(door.getMaxListeners());

door.on('lock', () => {
    console.log('Door is locked');
});

console.log(door.listenerCount('open'));

console.log(door.listenerCount('slam'));

console.log(door.listenerCount('lock'));

console.log(door.listeners('open'));

console.log(door.listeners('slam'));

console.log(door.listeners('lock'));

door.off('lock', () => {
    console.log('Door is locked');
}); // use same named function

console.log(door.eventNames());

const ee = new EventEmitter();

ee.once('my-event', () => {
  console.log('Once');
});

ee.emit('my-event');

ee.emit('my-event');
