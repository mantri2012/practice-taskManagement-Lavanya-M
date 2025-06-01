import './App.css'
import globalTaskData from './components/globalTaskData'
import TaskDetail from './components/TaskDetail'
import TaskList from './components/TaskList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskDetail data={globalTaskData}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App