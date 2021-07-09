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

const start = ()=>{
    const sec=1000;
    eventEmitter.emit('eventGreen');
    setTimeout(()=>{eventEmitter.emit('eventYellow')
    setTimeout(()=>{eventEmitter.emit('eventRed')
    setTimeout(()=>{eventEmitter.emit('eventYellow')
    setTimeout(()=>{},sec*3);
    },sec*30);
    },sec*3);
    },sec*30);
}
setInterval(() => {
    
    start();
    
    
}, 66000);


