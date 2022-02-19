import './App.css';
import Header from './components/header';

function App() {
  return (
    <div className='container'>
      <div className='header'>
        <Header />
      </div>
      <div className='content'>New Content</div>
      <div className='footer'>New Footer</div>
    </div>
  );
}

export default App;
