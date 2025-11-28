import { Navigate } from "react-router-dom";
import { fetchAuthSession } from "aws-amplify/auth";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    async function check() {
      try {
        const session = await fetchAuthSession();
        if (session?.tokens?.idToken) setAllowed(true);
        else setAllowed(false);
      } catch {
        setAllowed(false);
      }
    }
    check();
  }, []);

  if (allowed === null) return <div>Loading...</div>;
  if (allowed === false) return <Navigate to="/" />;

  return children;
}
