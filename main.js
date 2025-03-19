document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}

function yellow() {
  document.body.style.backgroundColor = 'yellow'
}

function lightBlue() {
  document.body.style.backgroundColor = 'lightblue'
}

function reset() {
  document.body.style.backgroundColor = 'white'
}

function showhtml() {
  document.getElementById('fig').src = 'image/HTML.png'
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다'
}

function showhtml() {
  document.getElementById('fig').src = 'image/HTML.png'
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다'
}
/*다시*/

function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}
