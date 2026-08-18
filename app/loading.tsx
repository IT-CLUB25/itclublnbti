export default function Loading() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "#070b17",
    }}>
      <div style={{
        width: 40,
        height: 40,
        border: "3px solid rgba(96, 165, 250, 0.2)",
        borderTopColor: "#60a5fa",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}
