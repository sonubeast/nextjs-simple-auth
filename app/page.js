import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ maxWidth: 480, margin: '80px auto', textAlign: 'center' }}>
      <h1>Next.js Simple Auth</h1>
      <p>A simple demo showing login, logout, and route protection.</p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 24 }}>
        <Link href="/login" style={{ padding: '8px 16px', background: '#2563eb', color: '#fff', textDecoration: 'none', borderRadius: 4 }}>
          Go to Login
        </Link>
        <Link href="/dashboard" style={{ padding: '8px 16px', background: '#e5e7eb', color: '#1f2937', textDecoration: 'none', borderRadius: 4 }}>
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
