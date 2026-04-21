export const metadata = {
  title: 'Vulnerable Next.js Demo',
  description: '⚠️ WARNING: Intentionally vulnerable application for educational purposes only',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
