import React, { useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/firebase";
// import { signInWithEmailAndPasswordm, createUserWithEmailAndPassword } from "firebase/auth";

export default function Auth({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  

  function validate() {
    const e = {};
    if (!email.trim()) e.email = "Enter your email or mobile phone number";
    // basic email-like check (allow phone too)
    if (
      email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      !/^\+?\d{6,}$/.test(email)
    )
      e.email = "Enter a valid email address or phone number";
    if (!password) e.password = "Enter your password";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      // UI-only: call onSubmit prop if provided (for real submit)
      if (onSubmit) await onSubmit({ email, password, remember });
      // simulate small delay for UX
      await new Promise((r) => setTimeout(r, 600));
      // clear errors on success
      setErrors({});
      // TODO: navigate to next page in your app
    } catch (err) {
      // show generic message - replace with real error handling
      setErrors({
        form: "Sign-in failed. Please check credentials and try again.",
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="signin-page">
      <div className="signin-container">
        {/* Left promo / help column */}
        <aside className="signin-promo" aria-hidden>
          <h2>Welcome to Amazon</h2>
          <p>
            Sign in to continue shopping, view orders, and manage your account.
          </p>
          <ul>
            <li>Fast checkout</li>
            <li>Track your orders</li>
            <li>Manage addresses & payments</li>
          </ul>
        </aside>

        {/* Sign-in card */}
        <main
          className="signin-card"
          role="main"
          aria-labelledby="signin-title"
        >
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
              className="header__logo"
            />
          </Link>
          <form onSubmit={handleSubmit} className="signin-form" noValidate>
            <h1 id="signin-title">Sign in</h1>

            {errors.form && <div className="signin-error">{errors.form}</div>}

            <label className="field" htmlFor="email">
              <span className="field-label">Email</span>
              <input
                id="email"
                type="text"
                inputMode="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="you@example.com"
                autoComplete="username"
              />
              {errors.email && (
                <div id="email-error" className="field-error">
                  {errors.email}
                </div>
              )}
            </label>

            <label className="field" htmlFor="password">
              <span className="field-label">Password</span>
              <div className="password-row">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={!!errors.password}
                  aria-describedby={
                    errors.password ? "password-error" : undefined
                  }
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((s) => !s)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <div id="password-error" className="field-error">
                  {errors.password}
                </div>
              )}
            </label>
            <div className="form-row small">
              <label className="remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />{" "}
                Keep me signed in
              </label>
              <a className="help-link" href="/help/forgot-password">
                Forgot your password?
              </a>
            </div>

            <div className="form-actions">
              <button
                className="btn-primary"
                type="submit"
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? "Signing in…" : "Sign in"}
              </button>
            </div>

            <div className="small muted center">or</div>

            <div className="create-account">
              <a className="btn-outline" href="/register">
                Create your Amazon account
              </a>
            </div>

            <div className="signin-footer small muted">
              By continuing, you agree to our{" "}
              <a href="/terms">Conditions of Use</a> and{" "}
              <a href="/privacy">Privacy Notice</a>.
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
