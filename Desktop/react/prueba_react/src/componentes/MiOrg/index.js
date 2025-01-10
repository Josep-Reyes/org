import "./MiOrg.css";
//import { useState } from "react";
const MiOrg= (props) => {    

/*const [mostrar, actualizarNombre] = useState(true);

    const manejarClick = () => {
        console.log('Mostrar/Ocultar elemento',!mostrar);
        actualizarNombre(!mostrar);
    }   */
   
    return <section className='orgSection'>
            <h3 className="title">Mi organización</h3>
            <img src="/img/add.png" alt="Add" onClick={props.cambiarMostrar}/>
        </section>
}

export default MiOrg;