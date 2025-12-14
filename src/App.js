import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  background: #f0f0f0; /* Можеш змінити на потрібний колір фону */
`;

const ScaledWrapper = styled.div`
  width: 1920px;
  transform-origin: top center;
  
  @media (max-width: 1920px) {
    transform: scale(${props => props.scale});
  }
`;

function App() {
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth < 1920) {
        setScale(viewportWidth / 1920);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppContainer>
          <ScaledWrapper scale={scale}>
            <Header />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              {/* Додай інші маршрути пізніше */}
              {/* <Route path="/accommodation" element={<AccommodationPage />} /> */}
            </Routes>
            <Footer />
          </ScaledWrapper>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;