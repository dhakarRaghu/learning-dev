import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to bottom right, #f0f4ff, #e0e7ff)",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#4A4A4A",
          marginBottom: "30px",
        }}
      >
        Welcome to the Home Page
      </h1>

      {/* Button container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Button 1 */}
        <button
          style={{
            padding: "15px 30px",
            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#6366F1", // Indigo
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "transform 0.2s ease, background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#4F46E5") // Darker Indigo
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#6366F1") // Original Indigo
          }
        >
          <Link
            to="/ShortUrl"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Shorten your URL
          </Link>
        </button>

        {/* Button 2 */}
        <button
          style={{
            padding: "15px 30px",
            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#10B981", // Emerald Green
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "transform 0.2s ease, background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#059669") // Darker Green
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#10B981") // Original Green
          }
        >
          <Link
            to="/Upload"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Upload a file
          </Link>
        </button>

        {/* Button 3 */}
        <button
          style={{
            padding: "15px 30px",
            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#F97316", // Orange
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "transform 0.2s ease, background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#EA580C") // Darker Orange
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#F97316") // Original Orange
          }
        >
          <Link
            to="/blog"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Blog website
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
