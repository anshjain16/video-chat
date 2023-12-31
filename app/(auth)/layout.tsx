import "../../app/globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full flex items-center justify-center">
      <body>{children}</body>
    </html>
  );
}
