const pressedArray = [];
const secretCode = 'dosia';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressedArray.push(e.key);
    console.log(pressedArray);
    pressedArray.splice(-secretCode.length -1, pressedArray.length - secretCode.length);
    
    if (pressedArray.join('').includes(secretCode)) {
        console.log('hell yeah!');
    }
});
