import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PublicLayout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <section className="cta-band" aria-label="Contact call to action">
        <div className="container cta-band__inner">
          <p className="cta-band__text">Open to new opportunities in project management, strategy, and analytics.</p>
          <p className="cta-band__contact">
            Reach me at{' '}
            <a href="mailto:ardenvalellc@gmail.com" className="cta-band__email">
              ardenvalellc@gmail.com
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}