import './Campo.css';

const Campo= (props)=>{
    console.log(props);
    const placeholderModificado = `${props.placeholder}...`;

    //Destructuracion
    const {type='text'} = props;
    const ManejarCambio= (e)=>{
        console.log(e.target.value);
        props.actualizarValor(e.target.value);
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input type={type} placeholder={placeholderModificado} required={props.required} value={props.valor} onChange={ManejarCambio}/>
    </div>
}

export default Campo;