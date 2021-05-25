import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './profile/profile'



function App() {

 const handleName =() => alert('hello i am yosser')

   
return(
    <div className="App">


      <Profile fullName="m'sakni Yosr" profession="Designer" age="26" alert={handleName}></Profile>
      </div>
    )}
    
export default App;