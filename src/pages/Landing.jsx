import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      
      {/* Navigation */}
      <nav className="landing-nav">
        <span className="logo">FilmStream</span>
        <button 
          className="btn btn-brand"
          onClick={() => navigate("/login")}
          style={{ padding: "12px 24px" }}
        >
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <div className="landing-hero">
        <div className="hero-content">
          
          <h1 style={{
            fontSize: "64px",
            fontWeight: "800",
            background: "linear-gradient(135deg, #f5f5f5, #2dd881)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "24px"
          }}>
            Unlimited Films & Shows
          </h1>

          <p style={{
            fontSize: "22px",
            color: "var(--text-secondary)",
            marginBottom: "40px",
            maxWidth: "650px"
          }}>
            Watch anywhere. Stream your favorite movies and TV shows on demand.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <button 
              className="btn btn-brand"
              onClick={() => navigate("/signup")}
              style={{ 
                padding: "16px 36px",
                fontSize: "18px",
                fontWeight: "700"
              }}
            >
              Get Started
            </button>

            <button 
              className="btn btn-soft"
              onClick={() => navigate("/login")}
              style={{ 
                padding: "16px 36px",
                fontSize: "18px",
                fontWeight: "700"
              }}
            >
              Sign In
            </button>
          </div>

        </div>
      </div>

      {/* Features Section */}
      <div className="container" style={{ 
        padding: "80px 40px",
        textAlign: "center"
      }}>
        
        <h2 style={{
          fontSize: "42px",
          fontWeight: "800",
          marginBottom: "60px",
          background: "linear-gradient(135deg, #f5f5f5, #2dd881)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>
          Why Choose FilmStream?
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>

          {/* Feature 1 */}
          <div style={{
            background: "var(--glass-bg)",
            backdropFilter: "blur(20px)",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid var(--glass-border)",
            transition: "all 0.3s ease"
          }}>
            <div style={{
              fontSize: "48px",
              marginBottom: "20px"
            }}>🎬</div>
            <h3 style={{
              fontSize: "24px",
              fontWeight: "700",
              marginBottom: "16px",
              color: "var(--text-primary)"
            }}>
              Vast Library
            </h3>
            <p style={{
              color: "var(--text-secondary)",
              fontSize: "16px",
              lineHeight: "1.6"
            }}>
              Access thousands of movies and TV shows across all genres
            </p>
          </div>

          {/* Feature 2 */}
          <div style={{
            background: "var(--glass-bg)",
            backdropFilter: "blur(20px)",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid var(--glass-border)",
            transition: "all 0.3s ease"
          }}>
            <div style={{
              fontSize: "48px",
              marginBottom: "20px"
            }}>📱</div>
            <h3 style={{
              fontSize: "24px",
              fontWeight: "700",
              marginBottom: "16px",
              color: "var(--text-primary)"
            }}>
              Watch Anywhere
            </h3>
            <p style={{
              color: "var(--text-secondary)",
              fontSize: "16px",
              lineHeight: "1.6"
            }}>
              Stream on your phone, tablet, laptop, and TV
            </p>
          </div>

          {/* Feature 3 */}
          <div style={{
            background: "var(--glass-bg)",
            backdropFilter: "blur(20px)",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid var(--glass-border)",
            transition: "all 0.3s ease"
          }}>
            <div style={{
              fontSize: "48px",
              marginBottom: "20px"
            }}>⚡</div>
            <h3 style={{
              fontSize: "24px",
              fontWeight: "700",
              marginBottom: "16px",
              color: "var(--text-primary)"
            }}>
              HD Quality
            </h3>
            <p style={{
              color: "var(--text-secondary)",
              fontSize: "16px",
              lineHeight: "1.6"
            }}>
              Enjoy crystal-clear picture quality with every stream
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}