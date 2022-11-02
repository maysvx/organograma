import TextField from '../TextField';
import './form.css';

const Form = () => {
    return (
        <section className='formulario'> 
            <form>
                <h2>Preencha os dados do Colaborador </h2>
                <TextField label="Nome" placeholder="Digite o nome do Colaborador" />
                <TextField label="Cargo" placeholder="Digite o Cargo" />
                <TextField label="URL da Imagem" placeholder="Digite a URL da Imagem" />
            </form>
        </section>
    )

}

export default Form;