import React from "react";
import { memo } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenModal } from "../../redux/actions/modalAction";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";
const CommonModal = memo(function ({ ...props }) {
  const { t } = useTranslation();
  const show = useSelector((state) => state.modal.showModal);
  const title = useSelector((state) => state.modal.title);
  const Children = useSelector((state) => state.modal.Children);
  const customStyle = useSelector((state) => state.modal.customStyle);
  const dispatch = useDispatch();
  const isArabic = useSelector((state) => state.language.isArabic);
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={() => dispatch(toggleOpenModal(Children, title, customStyle))}
        style={isArabic ? { direction: "rtl" } : {}}
      >
        {title && (
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
        )}
        <Modal.Body style={customStyle}>{Children}</Modal.Body>
      </Modal>
    </>
  );
});
export default CommonModal;
