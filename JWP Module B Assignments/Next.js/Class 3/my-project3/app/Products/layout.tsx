export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <h1 className="bg-gray-300 text-center">Product Header</h1>
        {children}
        <h1 className="bg-red-300 text-center">Product Footer</h1>
      </body>
    </html>
  );
}