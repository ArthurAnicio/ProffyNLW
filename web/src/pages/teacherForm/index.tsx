import React from 'react';
import PageHeader from '../../components/PageHeader/index.tsx';
import './styles.css'
import Input from '../../components/Input/index.tsx';
import warningIcon from '../../assents/images/icons/warning.svg'
function TeacherForm() {
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
                </fieldset>
                <fieldset>
                    <legend>Sobre a Aula</legend>
                    <Input type='text' name='subject' label='Matéria'/>
                    <Input type='text' name='cost' label='Custo da sua hora por aula'/>
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