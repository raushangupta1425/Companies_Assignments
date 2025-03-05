import './App.css'
import { AppLayout } from './components/layout/AppLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import ErrorHandling from './components/layout/ErrorHandling';

function App() {
  return (
    <>
     <Router>
            <Routes>
              <Route path="/" element={<AppLayout />} errorElement={<ErrorHandling />}>
                <Route index element={<Home />} />
              </Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
