import './footer.scss'

export default function Footer() {
  return (
    <div id="footer">
      &copy;{new Date().getFullYear()} Fine Art by Mitra. Site by <a href="https://minnedev.com" rel="noreferrer" target="_blank">Minnedev</a>
    </div>
  )
}