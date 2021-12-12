import './style.css'

const Modal = ({ viewHeader, headerText, submitText, handleSubmit, handleClose, handleCancel, children }) => {
    return (
        <div className="modal-container">
            <div className="modal-content">
                {
                    viewHeader &&
                    <div className="header-modal">
                        <h1>{headerText}</h1>
                        <button onClick={handleClose}><ion-icon name="close-outline"></ion-icon></button>
                    </div>
                }
                <div className="content">
                    { children }
                    <button onClick={handleSubmit} className='btn-save'>{submitText || 'Salvar'}</button>
                    <button onClick={handleCancel} className='btn-cancel'>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default Modal