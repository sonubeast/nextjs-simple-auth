'use client';

import { useActionState } from 'react';
import { login } from '../actions/auth';

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(
    async (_, formData) => await login(formData),
    null
  );

  return (
    <div style={{ maxWidth: 360, margin: '80px auto', padding: '0 16px' }}>
      <h2>Sign In</h2>
      <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue="user@example.com"
            required
            style={{ width: '100%', padding: 8, marginTop: 4, boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            defaultValue="password123"
            required
            style={{ width: '100%', padding: 8, marginTop: 4, boxSizing: 'border-box' }}
          />
        </div>

        {state?.error && (
          <p style={{ color: 'red', margin: 0, fontSize: 14 }}>{state.error}</p>
        )}

        <button
          type="submit"
          disabled={isPending}
          style={{ padding: 10, background: '#2563eb', color: '#fff', border: 'none', borderRadius: 4, cursor: isPending ? 'not-allowed' : 'pointer' }}
        >
          {isPending ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
