import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { FaCamera } from "react-icons/fa6";
import Input from "../common/Input";
import User from "../../images/user.png";
import { useDispatch, useSelector } from "react-redux";
import imageCompression from "browser-image-compression";
import { http } from "../../services/httpService";
import { getUserToken } from "../../services/userService";
import { getImageSrc } from "../../services/imageServices";
import { getProfileAction } from "../../redux/actions/userActions";
import { Toast } from "../common/Toast";
import { useTranslation } from "react-i18next";
function PImage() {
  const [file, setFile] = useState(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.user);
  const handleUploadFile = async (e) => {
    setFile(e.target.files[0]);
    if (e.target.files[0]) {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      try {
        const compressedFile = await imageCompression(
          e.target.files[0],
          options
        );

        const formData = new FormData();
        formData.append("file", compressedFile);

        await http.post(
          `/user/setProfilePicture?api_token=${getUserToken()}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        dispatch(getProfileAction());
        Toast("info", t("Upload-successfull"));
      } catch (error) {
        Toast("error", t("error_occoured"));
      }
    }
  };
  return (
    <Row className="my-3">
      <Col>
        <div className="pimage-container">
          <Image src={value.image ? getImageSrc(value.image) : User} />

          <div className="pimage-picker">
            <FaCamera />
            <input type="file" accept="image/*" onChange={handleUploadFile} />
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default PImage;
