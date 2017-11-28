const fs = require('fs');

/*
+-- javascript
|   +-- essentials
|     +-- oop
|     +-- context
*/

function createJavascript() {
  return new Promise((resolve, reject) => {
    fs.mkdir('javascript', (err) => {
      if (!err) resolve();
      reject(err);
    });
  });
}
function javascriptHandler(err) {
  if (!err) {
    console.log('A pasta "javascript" foi criada');
  }
}
function createEssentials() {
  return new Promise((resolve, reject) => {
    fs.mkdir('javascript/essentials', (err) => {
      if (!err) resolve();
      reject(err);
    });
  });
}
function essentialsHandler(err){
  if (!err) {
    console.log('A pasta "essentials" foi criada');
  }
}
function createOop(){
  return new Promise((resolve, reject) => {
    fs.mkdir('javascript/essentials/oop', (err) => {
      if (!err) resolve();
      reject(err);
    });
  });

}
function oopHandler(err){
  if (!err) {
    console.log('A pasta "oop" foi criada');
  }
}
function createContext(){
  return new Promise((resolve, reject) => {
    fs.mkdir('javascript/essentials/context', (err) => {
      if(!err) resolve();
      reject(err);
    });
  });
}
function contextHandler(err){
  if (!err) {
    console.log('A pasta "context" foi criada');
  }
}
function fim(){
  console.log('Todas as pastas foram criadas');
}

createJavascript()
  .then(javascriptHandler)
  .then(createEssentials)
  .then(essentialsHandler)
  .then(createOop)
  .then(oopHandler)
  .then(createContext)
  .then(contextHandler)
  .then(fim)
  .catch( err => console.log(err) );

// Roda imediatamente
function deBoa(){
  console.log('Enquanto a função lenta estiver rodando eu estou de boa');
}
deBoa();
