import './styles.css';

export const metadata = {
  title: 'MKT Generators | Diesel Generator Sets',
  description: 'MKT Generators diesel generator sets catalog by engine brand, power range, and application.',
  metadataBase: new URL('https://mktgenerators.com')
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
