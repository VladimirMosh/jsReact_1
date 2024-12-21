import './App.css';

function App() {
  return (
    <div className="App">
      <span className="message">
        <Message message="Hello World" />
      </span>
    </div>


  );


  function Message(props) {
    return (
      <div>
        <p>"{props.message}"</p>
      </div>
    );
  }
}

export default App;
