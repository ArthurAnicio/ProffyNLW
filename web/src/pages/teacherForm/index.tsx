import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader/index.tsx';
import './styles.css'
import Input from '../../components/Input/index.tsx';
import warningIcon from '../../assents/images/icons/warning.svg'
import TextArea from '../../components/TextArea/index.tsx';
import Select from '../../components/Select/index.tsx';
function TeacherForm() {
    const [scheduleItens, setScheduleItems] = useState(
        [
            {week_day: 0, from: '', to: '' }
        ]
    )
    
    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItens,
            {week_day: 0, from: '', to: '' }
        ])
        scheduleItens.push({
            week_day: 0,
            from: '',
            to: ''
        })
    }

    return(
        <div id='page-teacher-form' className='container'>
            <PageHeader 
                title="Que incrivel que você quer dar aulas"
                descripition="O primeiro passo é preencer esse formulário de inscrição"
            />
            <main>
                <fieldset>
                    <legend>Seus Dados</legend>
                    <Input type='text' name='name' label='Nome Completo'/>
                    <Input type='text' name='avatar' label='Nome Completo'/>
                    <Input type='text' name='whatsapp' label='WhatsApp'/>
                    <TextArea name='bio' label='Biografia' />
                </fieldset>
                <fieldset>
                    <legend>Sobre a Aula</legend>
                    <Select 
                        name='subject' 
                        label='Matéria'
                        opitions={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciências', label: 'Ciências'},
                            {value: 'História', label: 'História'},
                            {value: 'Física', label: 'Física'},
                            {value: 'Geografia', label: 'Geografia'},
                            {value: 'Português', label: 'Português'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Química', label: 'Química'}
                        ]}
                    />
                    <Input type='text' name='cost' label='Custo da sua hora por aula'/>
                </fieldset>
                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type='button' onClick={addNewScheduleItem}>
                            +Novo horário
                        </button>
                    </legend>
                    
                    {scheduleItens.map(scheduleItem => {
                        return(
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select name='week_day' 
                                label='Dia da semana'
                                    opitions={[
                                        {value: '0', label: 'Domingo'},
                                        {value: '1', label: 'Segunda'},
                                        {value: '2', label: 'Terça'},
                                        {value: '3', label: 'Quarta'},
                                        {value: '4', label: 'Quinta'},
                                        {value: '5', label: 'Sexta'},
                                        {value: '6', label: 'Sábado'}
                                    ]}
                                />
                            <Input name='from' label='Das' type='time' />
                            <Input name='to' label='Até' type='time' />
                            </div>
                        )
                    })}
                    
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type='button'>
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm