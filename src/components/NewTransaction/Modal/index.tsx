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
    <NewTransactionForm />
  </Modal>
)
