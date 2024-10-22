import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EditForm from "../components/profile/EditForm";
import { useSelector } from "react-redux";

function ProfileEdit() {
  const { value } = useSelector((state) => state.user);
  return (
    <>
      <Header />
      <EditForm />
      <Footer />
    </>
  );
}

export default ProfileEdit;
