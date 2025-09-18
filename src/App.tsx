function App() {
  return (
    <div
      style={{
        width: "100%",
        background: "#098684",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <img
        src="/logo.png"
        alt="Logo"
        width={400}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

export default App;
