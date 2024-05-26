const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const textbox = document.getElementById('textbox');

button1.addEventListener('click', () => {
  textbox.value += 'Button 1 clicked!\n';
});

button2.addEventListener('click', () => {
  textbox.value += 'Button 2 clicked!\n';
  textbox.value += 'Button 3 clicked!\n';
});

button3.addEventListener('click', () => {
  textbox.value += 'Button 3 clicked!\n';
});