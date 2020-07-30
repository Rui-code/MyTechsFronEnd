import React, { useState } from 'react';
import './styles.css';


function Table () {

    const [techs, setTechs] = useState([
        {
            id: 1,
            name: 'React',
        },
        {
            id: 2,
            name: 'React-Native',
        }
    ]);

    const handleRemove = (techId: number) => {
        const newTechs = techs.filter((item) => item.id !== techId);
        setTechs(newTechs);
    }

    return (
        <section className="section">
            <table className="gridTable">
                <tbody>
                    <tr>
                        <th>Nome</th>
                        <th>Remover</th>
                    </tr>

                    {techs.map((tech) => (
                            <tr key={tech.id}>
                                <td>{tech.name}</td>
                                <td>
                                    <input 
                                        type="button" 
                                        onClick={() => handleRemove(tech.id)} 
                                        value="Remover" 
                                    />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
             
        </section>
    );
}

export default Table;