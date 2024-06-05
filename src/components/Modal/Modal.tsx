import { useEffect, useRef, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, className, style, children }: ModalProps) {
  const styles: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
  };

  const modalRef = useRef<HTMLDialogElement>(null);

  const [open, setOpen] = useState<boolean>(isOpen);

  useEffect(() => {
    console.log(isOpen);
    setOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const dialog = modalRef.current;

    if (dialog) {
      if (open) {
        dialog.showModal();
        document.body.style.overflow = "hidden";
      } else {
        dialog.close();
        document.body.style.overflow = "auto";
      }
    }
  }, [open]);

  const handleClick = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      if (onClose) {
        onClose();
      }
    }
  };

  return (
    <dialog
      className={className}
      style={{ ...styles, ...style }}
      ref={modalRef}
      onClick={handleClick}
    >
      {children}
    </dialog>
  );
}

export default Modal;
