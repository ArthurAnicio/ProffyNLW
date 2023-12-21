import React from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader/index.tsx';

import TeacherItem from '../../components/TeacherItem/index.tsx'
import Input from '../../components/Input/index.tsx';
function TeacherList() {
    return(
        <div id='page-teacher-list' className='container'>
            <PageHeader title="Estes são os proffys disponíveis"> 
                <form  id='search-teachers'>
                    <Input type='text' name='subject' label='Matéria'/>
                    <Input type='text' name='week_day' label='Dia da semana'/>
                    <Input type='time' name='time' label='Hora'/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                
            </main>
        </div>
    )
}

export default TeacherList;