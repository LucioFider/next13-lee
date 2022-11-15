export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <aside>
        <ul>
          <li>Engineering</li>
          <li>Products</li>
        </ul>
      </aside>
      {children}
    </>
  );
}
