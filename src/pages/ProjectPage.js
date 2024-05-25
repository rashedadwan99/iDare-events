import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/dist";
import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";
import AllEvents from "../components/AllEvents";
import NotFound from "./NotFound";
import { useTranslation } from "react-i18next";
import AnimatedIcons from "../components/common/AnimatedIcons";
import AosContainer from "../components/common/Aos";
import Writer from "../components/common/Writer";
import DomParser from "../components/common/DomParser";
import { sortData } from "../components/utils/sort";
function ProjectPage() {
  const projects = useSelector((state) => state.projects.value);
  const { t } = useTranslation();
  const { pid } = useParams();
  const project = projects.find((p) => p.id === parseInt(pid));
  const { isArabic } = useSelector((state) => state.language);
  if (!project) return <NotFound />;
  return (
    <>
      <Header />
      <Row className="justify-content-between landing-section">
        <AnimatedIcons />
        <AosContainer style={{ margin: "auto 0" }}>
          <h5>
            <Writer sentence={isArabic ? project.name_ar : project.name} />
          </h5>
        </AosContainer>
      </Row>
      {project.long_description_ar || project.long_description ? (
        <Row className="justify-content-center my-2">
          <Col xs={11} sm={11}>
            <DomParser
              htmlResponse={
                isArabic
                  ? project.long_description_ar
                  : project.long_description
              }
            />
          </Col>
        </Row>
      ) : (
        <></>
      )}
      <AllEvents
        title={t("events")}
        events={sortData(project.Events, "start_time", "asc")}
      />
      ;
    </>
  );
}

export default ProjectPage;
