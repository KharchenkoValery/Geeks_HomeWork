import './App.css';

function Header() {
  return (
    <header>
       <h1>Hello! i`m Valery`s home work</h1>
        <Title text='Hi! I`m Header component' id={1}/>
    </header>
  )
}

function Content() {
  return (
    <>
      <Title text='Hi! I`m Content component' id={2}/>
    </>
  )
}

function Footer() {
  return (
    <>
      <Title text='Hi! I`m Footer component' id={3}/>
    </>
  )
}
function Title(props) {
  return <h2>{props.text} id: {props.id}</h2>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
