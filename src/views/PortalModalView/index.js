import React from 'react'
import ReactDOM from 'react-dom'


const portalStyles = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    opacity: '0.95',
    color: '#FFFF',
    textAlign: "center",
    backgroundColor: "cornflowerblue"
}

const PortalModalView = ({ visible, onToggle, children }) => {

    if (!visible)
        return null
    return ReactDOM.createPortal(<div style={portalStyles}>
        <div onClick={onToggle}>X</div>
        {children}
    </div>, document.getElementById('modal-root'))
}

export default PortalModalView