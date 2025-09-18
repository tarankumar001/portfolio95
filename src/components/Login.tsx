import { type ComponentType } from "react";
import { useAuth } from "../store/auth";; // ✅ correct store hook
import { Modal, TitleBar} from '@react95/core';

function Login() {
  // ✅ use the correct hook name
   const login=useAuth((state)=>state.login);
  return (
    <SafeModal
      dragOptions={{ disabled: true }}
      title="Welcome to My Portfolio"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      titleBarOptions={[
        <TitleBar.Help key="help" style={{ marginBlock: 'auto' }} />,
      ]}
    />
  );
}

export default Login;
