import { useState } from 'react';
import Button from '../Button';
import DropDownList from '../DropDownList';
import TextField from '../TextField';
import './form.css';

const Form = (props) => {

    const teams = [

        'Recursos Humanos',
        'Administração',
        'TI',
        'Gerência',
        'Operacional',
        'Marketing',
        'Serviços Gerais'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [equipe, setEquipe] = useState('')

    const onSave = (evento) => {
        evento.preventDefault()
        props.onRegistered ({
            nome,
            cargo,
            equipe,
            imagem
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={onSave}>

                <h2>Preencha os dados do Colaborador </h2>

                <TextField
                    label="Nome"
                    placeholder="Digite o nome"
                    obrigatorio={true}
                    valor={nome}
                    whenChanging={valor => setNome(valor)} />

                <TextField
                    label="Cargo"
                    placeholder="Digite o Cargo"
                    obrigatorio={true}
                    valor={cargo}
                    whenChanging={valor => setCargo(valor)}
                />

                <TextField
                    label="URL da Imagem"
                    placeholder="Digite a URL da Imagem"
                    valor={imagem}
                    whenChanging={valor => setImagem(valor)}
                />

                <DropDownList
                    label="Equipe"
                    itens={teams}
                    obrigatorio={true}
                    valor={equipe}
                    whenChanging={valor => setEquipe(valor)}
                />

                <Button>Inserir</Button>
            </form>
        </section>
    )

}

export default Form;