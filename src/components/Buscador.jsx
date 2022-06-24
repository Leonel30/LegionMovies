import React from 'react'
import swal from '@sweetalert/with-react';
import { useNavigate} from 'react-router-dom';

export const Buscador = () => {
    const navigate = useNavigate()
    const handlerSubmit=(e)=>{
        e.preventDefault();
        // validamos que los espacios en blaco al principio y al final los quitamos y tambien q las letras sean mayor a 4 letras //
        const keyword = e.currentTarget.keyword.value.trim();
        if(keyword.length === 0){
            swal(<h2>debe escribir una palabra clave</h2>)
        } else if (keyword.length < 4)
            {swal(<h2>debe escribir una palabra clave mayor a 4 letras</h2>)
        }else {
            e.currentTarget.keyword.value= ""
            navigate(`resultados?word=${keyword}`, { replace: true });
        }
        console.log(keyword)
    }
    return (
    <>
    <form onSubmit={ handlerSubmit} className="d-flex" >
        <label className="form-label mb-0 mr-2 mx-2">
            <input
                className='form-control me-2'
                type="text"
                name="keyword"
                placeholder="Search"
            />
        </label>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
    </form>
    </>
    )
}
