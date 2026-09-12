import { logout } from '../actions/auth';

export default function DashboardPage() {
  return (
    <div style={{ maxWidth: 480, margin: '80px auto', padding: '0 16px' }}>
      <h1>Dashboard</h1>
      <p>Welcome! You are logged in.</p>

      <form action={logout}>
        <button
          type="submit"
          style={{ padding: '8px 16px', background: '#e11d48', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}
        >
          Sign Out
        </button>
      </form>
    </div>
  );
}
