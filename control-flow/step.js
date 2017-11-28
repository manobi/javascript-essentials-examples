// https://github.com/creationix/step
const fs = require('fs');
const Step = require('step');

/*
+-- javascript
|   +-- essentials
|     +-- oop
|     +-- context
*/

Step(
  function createJavascript() {
    return fs.mkdir('javascript', this);
  },
  function javascriptHandler(err) {
    if (!err) {
      console.log('A pasta "javascript" foi criada');
      return this();
    }
  },
  function createEssentials() {
    return fs.mkdir('javascript/essentials', this);
  },
  function essentialsHandler(err){
    if (!err) {
      console.log('A pasta "essentials" foi criada');
      return this();
    }
  },
  function createOop(){
    return fs.mkdir('javascript/essentials/oop', this);
  },
  function oopHandler(err){
    if (!err) {
      console.log('A pasta "oop" foi criada');
      return this();
    }
  },
  function createContext(){
    return fs.mkdir('javascript/essentials/context', this);
  },
  function contextHandler(err){
    if (!err) {
      console.log('A pasta "context" foi criada');
      return this();
    }
  },
  function fim(){
    console.log('Todas as pastas foram criadas');
  }
);

// Roda imediatamente
function deBoa(){
  console.log('Enquanto a função lenta estiver rodando eu estou de boa');
}
deBoa();
