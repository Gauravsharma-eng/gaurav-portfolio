export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center">
        <span>&copy; {new Date().getFullYear()} Gaurav Sharma. All rights reserved.</span>
        <span style={{ fontFamily: 'var(--font-mono)' }}>Built with React &amp; Bootstrap 5</span>
      </div>
    </footer>
  )
}
