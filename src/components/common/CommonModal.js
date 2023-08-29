import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenModal } from "../../redux/actions/modalAction";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";
import "../../styles/modal.css";
import { isArabic } from "../../locales/language";
function CommonModal({ children, title, ...props }) {
  const { t } = useTranslation();
  const show = useSelector((state) => state.modal.showModal);
  const dispatch = useDispatch();
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={() => dispatch(toggleOpenModal())}
        style={isArabic() ? { direction: "rtl" } : {}}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {t(title)}
          </Modal.Title>
          <div>
            <IoMdClose
              style={{ fontSize: "20px", cursor: "pointer" }}
              onClick={() => dispatch(toggleOpenModal())}
            />
          </div>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}

export default CommonModal;