import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import BookIntro from './components/BookIntro';


function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/book-inf/:id" element={<BookIntro />}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
