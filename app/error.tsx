"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
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
      <h2 style={{ fontSize: "2rem", fontWeight: 800, margin: 0 }}>
        Something went wrong
      </h2>
      <p style={{ color: "#8a9ab0", marginTop: "0.75rem" }}>
        An unexpected error occurred.
      </p>
      <button
        onClick={reset}
        style={{
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          color: "#fff",
          background: "linear-gradient(110deg, #2563eb, #4f46e5)",
          border: "none",
          borderRadius: "10px",
          fontSize: "0.85rem",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Try again
      </button>
    </div>
  )
}
