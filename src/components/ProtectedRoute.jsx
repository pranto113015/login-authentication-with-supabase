import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function ProtectedRoute({ children }) {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session)
    );

    return () => authListener.subscription.unsubscribe();
  }, []);

  if (session === undefined) return <div>Checking authentication...</div>;

  return session ? children : <Navigate to="/" replace />;
}
