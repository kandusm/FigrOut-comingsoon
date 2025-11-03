import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <Logo className="w-12 h-auto" />
              <div className="text-2xl font-bold">
                <span className="font-bold">Figr</span>
                <span className="font-light">Out</span>
              </div>
            </div>
            <p className="text-white/70 text-sm">Your figures, figured out.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 text-sm">
            <a
              href="/privacy"
              className="text-white/70 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://bildout.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-bildout transition-colors"
            >
              Visit BildOut
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} FigrOut. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
