import React, { useEffect, useState } from "react";
import QuoteSection from "../components/QuoteSection";
import TasksPage from "./TasksPage";
import CompletedPage from "./CompletedPage";
import IncompletePage from "./IncompletePage";
import ExplorePage from "./ExplorePage";
import AboutPage from "./AboutPage";
import Footer from "../components/Footer";

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);
  const [incompleteCount, setIncompleteCount] = useState(0);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);

    const completed = savedTasks.filter((t) => t.completed).length;
    const incomplete = savedTasks.filter((t) => !t.completed).length;

    setCompletedCount(completed);
    setIncompleteCount(incomplete);
  }, []);

  return (
    <div className="scroll-container">
      {/* Home Section */}
      <section id="home" className="page-card">
        <h1 className="title">السلام عليكم ورحمة الله وبركاته
          <br/>
           Welcome to My Islamic ToDo App 
        </h1>
        <h2 className="subtitle">
   وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا وَأَحْسِن  <br/>كَمَا أَحْسَنَ اللَّهُ إِلَيْكَ وَلَا تَبْغِ الْفَسَادَ فِي الْأَرْضِ إِنَّ اللَّهَ لَا يُحِبُّ الْمُفْسِدِينَ
</h2>
        <p className="motivation">
          Stay organized in your daily tasks.
        </p>

        {/* Stats */}
        <div className="task-stats">
          <div className="stat-card total">
            <h3>Total Tasks</h3>
            <p>{tasks.length}</p>
          </div>
          <div className="stat-card incomplete">
            <h3>Incomplete</h3>
            <p>{incompleteCount}</p>
          </div>
          <div className="stat-card completed">
            <h3>Completed</h3>
            <p>{completedCount}</p>
          </div>
        </div>
      </section>
      {/* Tasks Section */}
      <section id="tasks" className="page-card">
        <TasksPage />
      </section>

      {/* Completed Section */}
      <section id="completed" className="page-card">
        <CompletedPage />
      </section>

      {/* Incomplete Section */}
      <section id="incomplete" className="page-card">
        <IncompletePage />
      </section>

      {/* Explore Section */}
      <section id="explore" className="page-card">
        <ExplorePage />
      </section>

      {/* About Section */}
      <section id="about" className="page-card">
        <AboutPage />
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}

export default HomePage;
