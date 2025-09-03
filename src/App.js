import './index.css';
import Navbar from './components/navbar/nav.js';
import Main from './components/main/main.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#4f46e5" />

      <title>Dominik's Portfolio</title>
      <meta name="description" content="Portfolio von Dominik, 19-jähriger Wirtschaftsinformatik Student. Spezialisiert auf React, Java, Tailwind CSS und moderne Webtechnologien." />
      <meta name="keywords" content="Portfolio, Dominik, React, Java, Tailwind CSS, Webentwicklung" />
      <meta name="author" content="Dominik"/>

      <meta property="og:title" content="Dominik's Portfolio" />
      <meta property="og:description" content="Portfolio von Dominik, 19-jähriger Wirtschaftsinformatik Student. Spezialisiert auf React, Java, Tailwind CSS und moderne Webtechnologien." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://github.com/BlueCobra06" />
    </head>
    <Navbar />
    <Main />
    <Footer />
    </>
  );
}

export default App;
