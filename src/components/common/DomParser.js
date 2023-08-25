const DomParser = ({ htmlResponse }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlResponse }} />;
};
export default DomParser;
