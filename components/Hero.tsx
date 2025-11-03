export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              <span className="font-bold">Figr</span>
              <span className="font-light">Out</span>
            </h1>
            <div className="h-1 w-24 bg-white/50 mx-auto mb-8"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Simplified ERP for Small Businesses
          </h2>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            From the creators of <span className="font-semibold text-bildout">BildOut</span> —
            bringing you powerful project accounting, budget tracking, and seamless integration.
          </p>

          <p className="text-lg md:text-xl mb-12 text-white/80">
            Your figures, figured out.
          </p>

          <div>
            <a
              href="#waitlist"
              className="btn-primary text-lg inline-block"
            >
              Join the Waitlist
            </a>
          </div>

          <p className="mt-6 text-sm text-white/70">
            Be the first to know when we launch
          </p>
        </div>
      </div>
    </section>
  );
}
