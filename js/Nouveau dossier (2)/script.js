'use strict';

const dropTo = document.querySelector('#js-drop-to');
const myDraggable = document.querySelector('#js-draggable');

myDraggable.addEvenListener('dragstart', event => {
  console.log('e', event);
  event.dataTransfer.setData('text', event.target.id);
});

dropTo.addEvenListener('dragover', event => {
  event.preventDefault();
});

dropTo.addEvenListener('drop', event => {
  event.preventDefault();
  const data =event.dataTransfer.getData('text');
  const el = document.getElementById(data);
  event.target.appendChild(el);
});
