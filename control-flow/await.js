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

async function run(){
  let js         = await createJavascript();
  let essentials = await createEssentials();
  let oop        = await createOop();
  let context    = await contextHandler();

  if(js && essentials && oop && context){
    console.log('Todas as pastas foram cridas');
  }
}
run();

// Roda imediatamente
function deBoa(){
  console.log('Enquanto a função lenta estiver rodando eu estou de boa');
}
deBoa();
