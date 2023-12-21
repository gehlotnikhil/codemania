import React from 'react'

function Progess() {
    return (
        <>
        <div className='container d-none'>
           <div className="progress"role="progressbar" ariaLabel="Basic example" ariaValuenow="100" ariaValuemin="0" ariaValuemax="100"> 
                <div className="progress-bar" style={{width: "100%"}}></div>
            </div>
        </div>
        </>
    )
}

export default Progess