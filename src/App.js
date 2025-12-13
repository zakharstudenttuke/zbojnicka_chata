import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      {/* Тут будуть інші секції сайту */}
      <main>
        <h1>Ласкаво просимо до Збойницької Хати!</h1>
      </main>
      
      <Footer />
    </ThemeProvider>
  );
}

export default App;