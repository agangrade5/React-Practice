import React from 'react'
import { createPortal } from 'react-dom'

const PortalTest = () => {
    return createPortal(
        <div>
            <h1>This is a portal test</h1>
        </div>,
        document.querySelector('#portal-test')
    )
}

export default PortalTest
