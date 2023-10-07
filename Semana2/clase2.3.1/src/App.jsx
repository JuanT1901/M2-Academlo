import { useState } from "react";
import "./App.css";
import dbQuestions from "./data/questions.json";
import Questions from "./components/Questions";

function App() {
  const [questions, setQuestions] = useState([]);

  const handleStartQuestions = () => {
    const newQuestions = dbQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
    
    const copyQuestions = JSON.parse(JSON.stringify(newQuestions));
    setQuestions(copyQuestions);
  };

  return (
    <main className="bg-gradient-to-b from-slate-950 to-slate-800 min-h-screen flex justify-center items-center text-white text-4xl font-bold text-center px-4">
      <section>
        <h1>
          Preguntas <span className="text-yellow-400">JS</span>
        </h1>

        {questions.length === 0 && (
          <button
            onClick={handleStartQuestions}
            className="bg-yellow-400 p-2 px-4 rounded-md mt-5 mx-auto block text-black font-bold text-lg hover:bg-yellow-600 transition-colors duration-200"
          >
            Empezar
          </button>
        )}

        {
          questions.length !== 0 && <Questions questions={questions} setQuestions={setQuestions}/>
        }
      </section>
    </main>
  );
}

export default App;
