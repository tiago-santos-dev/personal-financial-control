import { FiX } from "react-icons/fi";
import Modal from "react-modal";
import { NewTransactionForm } from "../Form";

export interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName='react-modal-overlay'
    className='react-modal-content'
  >
    <button
      className="react-modal-close"
      type="button"
      onClick={onRequestClose}>
      <FiX size={21} />
    </button>
    <NewTransactionForm handleCloseModal={onRequestClose} />
  </Modal>
)
