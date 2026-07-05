export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-base text-gray-500 dark:text-gray-500">
          &copy; {year} Umme Hani Punam. Built with care.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/punam06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/umme-hani-punam-70b5672a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:punam.papri@gmail.com"
            className="text-base text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
