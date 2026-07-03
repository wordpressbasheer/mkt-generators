import './styles.css';

export const metadata = {
  title: 'MKT Generators | Diesel Generator Sets',
  description: 'MKT Generators diesel generating sets catalog by engine brand, power range, and application.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
