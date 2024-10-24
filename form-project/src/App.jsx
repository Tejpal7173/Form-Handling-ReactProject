import './App.css'
import Navigation from './navigation';
import Title from './title';
import Form from './form';


function App() {

  return (
    <>
      <Navigation />
      <main className='main-container'>
        <Title />
        <Form />
      </main>

    </>
  );
}

export default App
