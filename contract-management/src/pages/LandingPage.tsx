import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-white"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="display-3 mb-4 text-shadow">Contract Manager</h1>
      <div>
        <button
          className="btn btn-primary btn-lg me-3"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="btn btn-success btn-lg"
          onClick={() => navigate("/blueprint")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
