export default function NotFound() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      color: "#edf4ff",
      background: "#070b17",
      fontFamily: "inherit",
      textAlign: "center",
      padding: "2rem",
    }}>
      <h1 style={{ fontSize: "clamp(4rem, 12vw, 8rem)", fontWeight: 800, letterSpacing: "-0.06em", margin: 0, lineHeight: 1 }}>
        404
      </h1>
      <p style={{ color: "#8a9ab0", marginTop: "1rem", fontSize: "1.1rem" }}>
        This page doesn&apos;t exist.
      </p>
      <a
        href="/"
        style={{
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          color: "#fff",
          background: "linear-gradient(110deg, #2563eb, #4f46e5)",
          borderRadius: "10px",
          fontSize: "0.85rem",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Go home
      </a>
    </div>
  )
}
