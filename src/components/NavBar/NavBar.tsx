import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-linear-to-r from-green-800 via-green-500 to-green-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                CopaLive
              </h1>
            </div>
          </Link>          
        </div>
      </div>
    </nav>
  );
}
