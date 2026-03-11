export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer footer--minimal" role="contentinfo">
      <div className="container">
        <div className="footer__bottom footer__bottom--solo">
          <span>© {year} Akanksha Bapna. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}