
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import TaskDetails from './components/TaskDetail'
import TaskList from './components/TaskList'

function App() {

  return (
      <Router>
        <Routes>
        <Route path = "/" element = {<TaskList />}/>
        <Route path= "/task/:id" element= {<TaskDetails />}/>
        </Routes>
      </Router>
  )
}

export default App