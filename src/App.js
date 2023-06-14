import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route index element={<Home />} />
        <Route path="quote" element={<Quote />} />
        <Route path="calculator" element={<Calculator />} />
      </Route>
    </Routes>
  );
}

export default App;
