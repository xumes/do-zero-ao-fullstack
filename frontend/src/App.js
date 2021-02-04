const leDados = ( ) => {
  fetch('/api')
  .then(resultado => {
    console.log("dados do backend", resultado)
  })
}


function App() {
  return (
    <div>
      {leDados()}
      Bem vindo ao frontend
    </div>
  );
}

export default App;
