import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
          <div className="container">
            <Routes> 
              <Route path="/" exact Component={ListEmployeeComponent}></Route>
              <Route path="/employees" Component={ListEmployeeComponent}></Route>
              <Route path="/add-employee/:id" Component={CreateEmployeeComponent}></Route>
              <Route path="/view-employee/:id" Component={ViewEmployeeComponent}></Route>
            </Routes>
          </div>
         <FooterComponent/>  
      </Router>
    </div>
  
  );
}

export default App;
