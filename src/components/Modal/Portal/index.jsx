import ReactDOM from 'react-dom';

const PortaModal = ({ children }) => {
    const portal = document.getElementById("modal-root");
    return ReactDOM.createPortal(children, portal);
};

export default PortaModal;
