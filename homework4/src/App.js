
import './App.css';
import { ErrorPage } from './pages/errorPage/ErrorPage';
import { MainPage } from './pages/mainPage/MainPage';


 
 const user = {
    name : prompt("Введите имя"),
    lastName : prompt("Введите фамилию")
 }

//  const error = {
//   name: prompt("Введите имя"),
//   lastName: prompt("Введите фамилию")
//  } 

 

function App() {
  
 let component = <MainPage user={user}/>
 let componenttwo = <ErrorPage error={user}/>

  return (
    <div className="App">
    
    {
      user.name === "John" && user.lastName === "Johns" ? component : componenttwo
    }
      
     
    </div>
  );
}

export default App;
