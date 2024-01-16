import { storageBaseURL } from "../services/httpService";
const headerBackgroundColor = "var(--header_background_color)";
const headerTextColor = "var(--header_text_color)";
const primaryBtnBgColor = "var(--primary_button_background_color)";
const primaryBtnBgColor2 = "var(--primary_button_background_color_2)";
const primaryBtnTextColor = "var(--primary_button_text_color)";
const footerBgColor = "var(--footer_background_color)";
const footerBgColor2 = "var(--footer_background_color_2)";
const footerTextColor = "var(--footer_text_color)";
export const fontLink = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet">`;
export const fontCode = `font-family: 'Amiri', serif;`;
export const headerEventStyle = (event) => {
  return {
    backgroundColor: event.header_background_color ?? headerBackgroundColor,
    color: event.header_text_color ?? headerTextColor,
  };
};
export const handleBackgroundStyle = (image) => {
  return {
    backgroundImage: `url(${storageBaseURL + image})`,
    bacgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
};
export const handlePrimaryButtonStyle = (event) => {
  return {
    backgroundColor: event.primary_button_background_color ?? primaryBtnBgColor,
    color: event.primary_button_text_color ?? primaryBtnTextColor,
    border: `1px solid ${
      event.primary_button_text_color ?? primaryBtnTextColor
    }`,
  };
};

export const handlePrimaryButtonStyleWhenHover = (event) => {
  return {
    backgroundColor:
      event.primary_button_background_color_2 ?? primaryBtnBgColor2,
    color: event.primary_button_text_color ?? primaryBtnTextColor,
    border: `1px solid ${
      event.primary_button_background_color_2 ?? primaryBtnBgColor2
    }`,
  };
};

export const handleSelectEventMenu = (event) => {
  return {
    backgroundColor: event.header_background_color ?? headerBackgroundColor,
    color: event.header_text_color ?? headerTextColor,
  };
};

export const handleSelectHeaderMenu = (event) => {
  return {
    border: `1px solid ${event.header_text_color ?? headerTextColor}`,
    backgroundColor: event.header_background_color ?? headerBackgroundColor,
  };
};
export const handleFooterStyle = (event) => {
  return {
    background: `linear-gradient(to top,${
      event.footer_background_color ?? footerBgColor
    } 30%,${event.footer_background_color_2 ?? footerBgColor2})`,
    color: event.footer_text_color ?? footerTextColor,
  };
};
