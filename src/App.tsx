import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionPage from './routes/questionPage';
import HomePage from './routes/homePage';
import InstructionsPage from './routes/instructionsPage';
import SurveyPage from './routes/surveyPage';
import EndPage from './routes/endPage';
import { StudyProvider } from './context/studyContext';

// Define the main App component
const App = () => {
  return (
    <Router>
      <StudyProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/instructions" element={<InstructionsPage />} />
            <Route path="/prompt" element={<QuestionPage />} />
            <Route path="/survey" element={<SurveyPage />} />
            <Route path="/end" element={<EndPage />} />
          </Routes>
        </div>
      </StudyProvider>
    </Router>
  );
}

export default App;