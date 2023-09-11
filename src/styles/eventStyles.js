import { storageBaseURL } from "../services/httpService";

export const fontFamily = (event) => {
  // google_fonts_link;
  return {
    fontFamily: event.google_fonts_code,
  };
};
export const headerEventStyle = (event) => {
  return {
    backgroundColor:
      event.header_background_color ?? "var(--header_background_color)",
    color: event.header_text_color ?? "var(--header_text_color)",
  };
};
export const handleOrganizersBackgroundStyle = (image) => {
  return {
    backgroundImage: `url(${storageBaseURL + image})`,
    bacgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
};
export const handlePrimaryButtonStyle = (event) => {
  return {
    backgroundColor:
      event.primary_button_background_color ??
      "var(--primary_button_background_color)",
    color:
      event.primary_button_text_color ?? "var(--primary_button_text_color)",
    border: `1px solid ${
      event.primary_button_background_color ??
      "var(--primary_button_background_color)"
    }`,
  };
};

export const handlePrimaryButtonStyleWhenHover = (event) => {
  return {
    backgroundColor:
      event.primary_button_background_color_2 ??
      "var(--primary_button_background_color_2)",
    color: event.primary_button_text_color ?? "var(primary_button_text_color)",
    border: `1px solid ${
      event.primary_button_background_color_2 ??
      "var(--primary_button_background_color_2)"
    }`,
  };
};

export const handleSelectEventMenu = (event) => {
  return {
    backgroundColor:
      event.header_background_color ?? "var(--header_background_color)",
    color: event.header_text_color ?? "var(--header_text_color)",
  };
};

export const handleSelectHeaderMenu = (event) => {
  return {
    border: `1px solid ${event.header_text_color ?? "var(--header_text_color"}`,
    backgroundColor:
      event.header_background_color ?? "var(--header_background_color)",
  };
};
export const handleFooterStyle = (event) => {
  return {
    background: `linear-gradient(to top,${
      event.footer_background_color ?? "var(--footer_background_color)"
    } 30%,${
      event.footer_background_color_2 ?? "var(--footer_background_color_2)"
    })`,
    color: event.footer_text_color ?? "var(--footer_text_color)",
  };
};
