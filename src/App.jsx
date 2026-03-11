import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import Akanksha from './pages/resume/Akanksha'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Akanksha />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}