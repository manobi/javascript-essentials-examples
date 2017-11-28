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

function createEssentials() {
  return new Promise((resolve, reject) => {
    fs.mkdir('javascript/essentials', (err) => {
      if (!err) resolve();
      reject(err);
    });
  });
}

function createOop(){
  return new Promise((resolve, reject) => {
    fs.mkdir('javascript/essentials/oop', (err) => {
      if (!err) resolve();
      reject(err);
    });
  });
}

function createContext(){
  return new Promise((resolve, reject) => {
    fs.mkdir('javascript/essentials/context', (err) => {
      if(!err) resolve();
      reject(err);
    });
  });
}

function fim(){
  console.log('Todas as pastas foram criadas');
}

async function run(){
  let js         = await createJavascript();
  let essentials = await createEssentials();
  let parallels = Promise.all([
    createOop(),
    createContext()
  ]);
  if(js && essentials && parallels){
    console.log('Todas as pastas foram cridas');
  }
}
run().catch(err => console.log(err));

// Roda imediatamente
function deBoa(){
  console.log('Enquanto a função lenta estiver rodando eu estou de boa');
}
deBoa();
