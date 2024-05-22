import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Areas from './pages/areas'
// import Areas from './pages/Areas'
import Who from './pages/Who'
import What from './pages/What'
import Error from './pages/Error'
import Highlight from './pages/Highlights'
// Project Pages
import Projects from './pages/Projects'
import Matrix from './pages/projects/Matrix'
import Engage from './pages/projects/Engage'
import Horizon from './pages/projects/Horizon'
import Past from './pages/projects/Past'
import Uchoose from './pages/projects/Uchoose'
import Publications from './pages/Publications'

import ConradCollab from './pages/highlights/ConradCollab'
import FirstInClass from './pages/highlights/FirstInClass'
import LongActing from './pages/highlights/LongActing'
import Vuka from './pages/highlights/Vuka'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="who" element={<Who />} />
        <Route path="what" element={<What />} />
        <Route path="areas" element={<Areas />} />
        {/* <Route path="news" element={<News />} /> */}
        <Route path="projects" element={<Projects />}></Route>

        <Route path="/projects/Engage" element={<Engage />} />
        <Route path="/projects/Horizon" element={<Horizon />} />
        <Route path="/projects/Matrix" element={<Matrix />} />
        <Route path="/projects/Past" element={<Past />} />
        <Route path="/projects/Uchoose" element={<Uchoose />} />
        <Route path="Publications" element={<Publications />} />
        <Route path="Highlights" element={<Highlight />} />

        <Route path="/highlights/ConradCollab" element={<ConradCollab />} />
        <Route path="/highlights/FirstInClass" element={<FirstInClass />} />
        <Route path="/highlights/LongActing" element={<LongActing />} />
        <Route path="/highlights/Vuka" element={<Vuka />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
