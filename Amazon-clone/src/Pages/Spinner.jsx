import Spinner from "react-bootstrap/Spinner";

function Spinnner() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      {/* <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" /> */}
      <Spinner animation="border" variant="success" />
      {/* <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" /> */}
    </div>
  );
}

export default Spinnner;
