import { Suspense } from "react";
import { LoginForm } from "@/components/LoginForm";
import { BrandLockup } from "@/components/BrandLockup";

export default function LoginPage() {
  return (
    <main className="login-page">
      <div className="login-wash" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/watercolor-pad.png" alt="" />
      </div>
      <div className="login-card">
        <BrandLockup size="md" />
        <p>Grok Bot for Datadog sales</p>
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
