import './dropdown-list.css';

const DropDownList = (props) => {

    return (
        <div className='dropdown-list'>

            <label>{props.label}</label>

            <select
                required={props.obrigatorio}
                value={props.value}
                onChange={evento => props.whenChanging(evento.target.value)}
            >

                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}

            </select>
        </div>
    )

}
export default DropDownList;