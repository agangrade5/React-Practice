import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import PortalTest from './PortalTest'
import PortalModel from './PortalModel'

const Example1 = () => {
    const [open, setOpen] = useState(false);

    return (
        <div style={{ padding: '30px' }}>
            <h1>Create Portal Component</h1>

            {/* example 1 */}
            {/* { 
                createPortal(
                    <h1>This is a portal</h1>,
                    document.body
                )
            } */}

            {/* example 2 */}
            {/* {
                createPortal(
                    <div>
                        <h2>This is a portal</h2>
                    </div>,
                    document.getElementById('portal-root')
                )
            } */}
            {/* example 3 - import from another component */}
            {/* <PortalTest  /> */}

            {/* example 4 - conditional portal rendering */}
            <button onClick={() => setOpen(true)}>
                Open Modal
            </button>
            <PortalModel isOpen={open} onClose={() => setOpen(false)}>
                <h1>This is a modal portal</h1>
                <p>This is a simple modal without context.</p>
            </PortalModel>
        </div>
    )
}

export default Example1