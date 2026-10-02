import React from "react";
import { gsap } from "gsap";

type Modaltype = {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  className?: string;
};

const Modal = React.forwardRef(
  (
    { children, open, onClose, className }: Modaltype,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    const modalRef = React.useRef<HTMLDivElement>(null);
    const animateOpen = () => {
      gsap.to(modalRef.current, {
        duration: 0.3,
        scale: 1,
        opacity: 1,
      });
    };
    const animateClose = () => {
      gsap.to(modalRef.current, {
        duration: 0.3,
        scale: 0,
        opacity: 0,
        onComplete: onClose,
      });
    };

    React.useEffect(() => {
      if (typeof window !== "undefined") {
        gsap.set(modalRef.current, { scale: 0, opacity: 0 });
        if (open) {
          animateOpen();
        } else {
          animateClose();
        }
      }
    }, [open]);
    return (
      <>
        <div
          ref={ref}
          onClick={onClose && animateClose}
          className={`modal-content !mx-0 !mb-0 !mt-0 fixed left-0 top-0 m-0 h-screen w-screen bg-black/70 backdrop-blur-sm ${
            open
              ? "flex"
              : "transform scale-0 transition-transform duration-300 ease-out animation-fade-in"
          } ${className}`}
        >
          <div
            ref={modalRef}
            className="flex items-center justify-center w-screen h-screen modal-content"
          >
            {children}
          </div>
        </div>
      </>
    );
  },
);

Modal.displayName = "Modal";

export default Modal;

export const ModalContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`dark:bg-theme-color-light rounded-2xl scroll-smooth ${className}`}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      {children}
    </div>
  );
};
