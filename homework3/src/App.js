import './App.css';
import { AboutPage } from './pages/aboutPage/AboutPage';
import { MainPage } from './pages/mainPage/MainPage';
import TodosPage from './pages/todosPage/TodosPage';



function App() {
  
  return (
    <div className="App">
      {/* <h2>ksvhnnskn</h2> */}
      <MainPage/>
      <h2>=================</h2>
      <AboutPage/>
      <h2>=================</h2>
      <TodosPage/>
    </div>
  );
}

export default App;
