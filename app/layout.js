export const metadata = {
  title: 'Next.js Simple Auth',
  description: 'Simple login and logout flow in Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
