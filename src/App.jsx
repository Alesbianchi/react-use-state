import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AccordionsList from './components/AccordionsList'

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const languages = [
    { id: 1, title: "HTML" },
    { id: 2, title: "CSS" },
    { id: 3, title: "JavaScript" },
    { id: 4, title: "Node.js" },
    { id: 5, title: "Express" },
    { id: 6, title: "ReactJS" }
  ];

  return (
    <>
      <h1>Learn Web Development</h1>

      {languages.map((lang) => (
        <button
          key={lang.id}
          type="button"
          className={`btn m-3 ${selectedLanguage === lang.title ? "btn-warning" : "btn-primary"}`}
          onClick={() => setSelectedLanguage(lang.title)}
        >
          {lang.title}
        </button>
      ))}

      <AccordionsList selectedLanguage={selectedLanguage} />
    </>
  );
}

export default App
