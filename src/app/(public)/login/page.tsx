import { Suspense } from "react";
import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="login-page">
      <div className="login-card">
        <p className="hero-brand">Grok Bot</p>
        <h1>Datadog CRO follow-up</h1>
        <p>Enter the password from Jason to open the leave-behind.</p>
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
