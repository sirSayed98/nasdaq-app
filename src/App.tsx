// react -libs
import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// pages
import NotFoundPage from '@pages/Not-Found';
import SplashScreen from '@pages/Splash';
// Lazy load the Home component
const Home = lazy(() => import('@pages/Home'));

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<SplashScreen />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
