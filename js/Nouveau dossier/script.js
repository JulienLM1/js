'use strict'
document.cookie = 'lang=fr'

document.cookie = 'lang=fr;expires=${new Date('2019-02-12')}';

docCookies.setItem('test', 'test', new Date('2019-12-31'));

docCookies.setItem('usedId', 123);
console.log(docCookie.getItem('userID'));

docCookies.setItem('usedId', 321);

console.log(docCookies.getItem('lang'));
console.log(docCookies.getItem('previewSeen'));
console.log(docCookies.getItem('userID'));
console.log(docCookies.getItem('studentID'));

docCookies.setItem('testObject', JSON.stringify({ id: 1 }));

const myObj = docCookies.setItem('testObject');
console.log(docCookies.getItem('myObj', myObj));
console.log(docCookies.getItem('myObj parsed',JSON.parse('myObj'));

docCookies.removeItem('test');
docCookies.setItem('test','',new Date('2000-01-01'));


if (localStorage) {
  localStorage.setItem('greeting', 'Hello Worls');
  localStorage.setItem('adIds', JSON.stringify({top: 1, bottom:2});

  console.log (localStorage.getItem('greeting'));

  localStorage.setItem('greeting', 'Welcome');

  localStorage.removeItem('greeting');
  localStorage.clear();
}
