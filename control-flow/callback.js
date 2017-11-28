const fs = require('fs');

/*
+-- javascript
|   +-- essentials
|     +-- oop
|     +-- context
*/
fs.mkdir('javascript', function (err) {
  if (!err) {
    console.log('A pasta "javascript" foi criada');
    // Cria a pasta essentials
    fs.mkdir('javascript/essentials', function (err) {
      if (!err) {
        console.log('A pasta "essentials" foi criada');
        // Cria a pasta oop
        fs.mkdir('javascript/essentials/oop', function (err) {
          if (!err) {
            console.log('A pasta "oop" foi criada');
            // Cria a pasta context
            fs.mkdir('javascript/essentials/context', function (err){
              if (!err) {
                console.log('A pasta "context" foi criada');
                // FIM
                console.log('Todas as pastas foram criadas com sucesso');
              }
            });
          }
        });
      }
    });
  }
});

// Roda imediatamente
function deBoa(){
  console.log('Enquanto a função lenta estiver rodando eu estou de boa');
}
deBoa();
