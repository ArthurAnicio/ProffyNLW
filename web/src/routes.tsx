import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Landing from './pages/landing/index.tsx'
import TeacherList from './pages/teacherList/index.tsx'
import TeacherForm from './pages/teacherForm/index.tsx'
function RoutesWeb(){
    return(
        
        <BrowserRouter>
            <Routes>    
                <Route path='/' Component={Landing} />
                <Route path='/study' Component={TeacherList} />
                <Route path='/give-classes' Component={TeacherForm} />
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesWeb;