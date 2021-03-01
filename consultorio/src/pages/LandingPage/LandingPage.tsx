import React from 'react'

import "pages/LandingPage/LandingPage.css"

export default function LandingPage() {
    return (
        <div id="container">
            <img
                className="cita"
                src="https://blog.openenglish.com/wp-content/uploads/2016/03/ingles-medico.jpg"
                alt=""
            />
            <div>
                <h1>
                    Estás listo para tu cita?
                </h1>
                <span>
                    Tus próximas citas son:
                </span>
            </div>
        </div>
    )
}
