export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05050f] px-6 py-8 text-white/60 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Tanzim Ahmed Utsho. All Rights Reserved.</p>
        <div className="flex flex-col gap-2 text-white/50 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="mailto:tanzim.utsho@example.com"
            className="transition text-white/70 hover:text-white"
          >
           utshotanzim@gmail.com
          </a>
          <span className="hidden h-4 border-r border-white/10 sm:inline-block" />
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
    </footer>
  );
}
