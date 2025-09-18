import { AGENTS, ClippyProvider } from "@react95/clippy";
import { useAuthStore } from "./store/auth"; // ✅ correct hook name
import Login from "./components/Login";

function App() {
  // ✅ matches your store property
  const authenticated = useAuthStore((state) => state.authenticated);

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

      {/* login page user not authenticated */}
      {!authenticated && <Login />}

      {/* main page user authenticated */}
      {authenticated && (
        <ClippyProvider agentName={AGENTS.CLIPPY}>
          <div className="fixed">{/* desktop icons */}</div>
        </ClippyProvider>
      )}
    </div>
  );
}

export default App;
