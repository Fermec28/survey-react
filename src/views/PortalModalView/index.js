import React from 'react'
import ReactDOM from 'react-dom'

const PortalModalView = ({ visible, onToggle, children }) => {

    if (!visible)
        return null
    const styles = {
        width: '100%',
        height: '100%',
        position: 'absoulute',
        top: '0',
        left: '0',
        opacity: '0.95',
        color: '#FFFF'

    }
    return ReactDOM.createPortal(<div styles={styles}>
        <div onClick={onToggle}>X</div>
        {children}
    </div>, document.getElementById('modal-root'))
}

export default PortalModalView