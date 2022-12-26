import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';
import Error from './components/Error';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Form from './components/Form';

function App() {

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Form />} />
      <Route path='/pageone' element={<PageOne />} />
      <Route path='/pagetwo' element={<PageTwo />} />
      <Route path='/pagethree' element={<PageThree />} />
      <Route path='/pagefour' element={<PageFour />} />
      <Route path='*' element={<Error />} />
     </Routes>
    </div>
  );
}

export default App;
