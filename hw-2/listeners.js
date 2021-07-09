import { EventEmitter } from 'events'

const eventEmitter = new EventEmitter()


eventEmitter.on('eventRed', () => {
  console.log("Красный")
});
eventEmitter.on('eventGreen', () => {
    console.log("Zeleniy")
  });
  eventEmitter.on('eventYellow', () => {
    console.log("Zheltiy")
  });
export default eventEmitter