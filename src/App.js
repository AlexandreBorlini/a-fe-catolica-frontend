import './App.css';
import CatechismIcon from './components/icon/CatechismIcon';
import SubjectIcon from './components/icon/SubjectIcon';
import SidebarItem from './components/sidebar-item/SidebarItem';
import Sidebar from './components/sidebar/Sidebar'
import { useState, useContext } from 'react';
import Banner from './components/banner/Banner';
import ContactIcon from './components/icon/ContactIcon';
import SubjectListPage from './pages/subject-list/SubjectListPage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import SubjectContentPage from './pages/subject-content/SubjectContentPage';
import { SystemProvider, SystemContext } from './providers/ContextProvider';
import DailyCatechismPage from './pages/daily-catechism/DailyCatechismPage';
import InfosPage from './pages/infos/InfosPage';

function App() {

  const ASSUNTOS_ROUTE      = "/assuntos"
  const CATECISMO_ANO_ROUTE = "/catecismo-ano"
  const INFOS_ROUTE         = "/infos"
  const ASSUNTO_ROUTE       = "/assunto"

  const [expanded, setExpanded] = useState(true);
  const [actualRoute, setActualRoute] = useState("/");

  return (

    <div>
      <BrowserRouter>
      <SystemProvider>
        <Banner setExpanded={setExpanded} />
        <Sidebar expanded={expanded} setExpanded={setExpanded}> 
          
          <SidebarItem text="Assuntos" 
              icon={<SubjectIcon />} 
              destination={ASSUNTOS_ROUTE} 
              setActualRoute={setActualRoute} actualRoute={actualRoute} />

          <SidebarItem text="Catecismo em um Ano" 
              icon={<CatechismIcon/>} 
              destination={CATECISMO_ANO_ROUTE} 
              setActualRoute={setActualRoute} actualRoute={actualRoute}/>
          
          <SidebarItem 
              text="Informações" 
              icon={<ContactIcon/>} 
              destination={INFOS_ROUTE} 
              setActualRoute={setActualRoute} actualRoute={actualRoute}/>
        </Sidebar>
      
        <div>
          <Routes>
            <Route path="/" />
            <Route path={ASSUNTOS_ROUTE}      element={<SubjectListPage    /> } />
            <Route path={CATECISMO_ANO_ROUTE} element={<DailyCatechismPage /> } />
            <Route path={INFOS_ROUTE}         element={<InfosPage          /> } />
            <Route path={ASSUNTO_ROUTE}       element={<SubjectContentPage /> } />
            <Route path="*"                   element={<Navigate to ="/"   /> } />
          </Routes>
        </div>
      </SystemProvider>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
