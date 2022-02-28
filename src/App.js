import './App.css';
import UAParser from 'ua-parser-js';

function App() {
  const browserParser = new UAParser();
  const inspector = {
    Browser: browserParser.getBrowser(),
    Device: browserParser.getDevice(),
    OS: browserParser.getOS(),
  }
  const Content = () => Object
    .keys(inspector)
    .map(key => (
      <div>
        {key}
        <ul>
          {Object.keys(inspector[ key ])
            .map(k => (
              <li>{k}: {inspector[ key ][ k ]}</li>
            ))}
        </ul>
      </div>
    ));

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <p>Navigator response to exploit</p>
          <p>{navigator.userAgent}</p>
          <Content />
        </section>
      </header>
    </div>
  );
}

export default App;
