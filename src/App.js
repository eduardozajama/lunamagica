import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import UserForm from './components/UserForm';




function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <UserForm/>
      <Footer/>
    </div>
  );
}

export default App;
