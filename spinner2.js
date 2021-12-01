
process.stdout.write('hello from spinner1.js... \rheyyy\n');


const array = ['\r|   ', '\r/   ', '\r/   ','\r\\   ', '\r\|   '];
let delay = 100;
for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    process.stdout.write(array[i]);
  }, delay + delay * (i + 1)); 
}

