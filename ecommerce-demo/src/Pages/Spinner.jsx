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
      <Spinner animation="border" variant="success" />
    </div>
  );
}

export default Spinnner;
