const DomParser = ({ htmlResponse }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlResponse }}
      className="dom-parser"
    />
  );
};
export default DomParser;
