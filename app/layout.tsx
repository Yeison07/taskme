import '@fontsource/roboto';
import '@fontsource/roboto/500.css';
import 'normalize.css';
import '../styles/globals.css';

export const metadata = {
  title: 'TaskMe!',
  description: 'Sitio web para la gestion de proyectos, tareas y demas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
