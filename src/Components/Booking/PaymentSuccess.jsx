import { Modal } from "rsuite";

const PaymentSuccess = ({ open, setClose }) => {
   const handleClose = () => setClose(false);
   console.log(open);
   return (
      <Modal
         className="h-[100vh] flex items-center justify-center flex-col"
         open={open}
         onClose={handleClose}>
         <Modal.Body className="mt-auto">
            <h2>Hl</h2>
         </Modal.Body>
      </Modal>
   );
};

export default PaymentSuccess;
