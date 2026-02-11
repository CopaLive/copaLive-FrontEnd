import { useState } from "react";
import { Trophy, Search } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirige vers la home avec le paramètre search
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="bg-linear-to-r from-green-800 via-green-500 to-green-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              CopaLive
            </h1>
          </Link>

          {/* BARRE DE RECHERCHE (Ajoutée) */}
          <form 
            onSubmit={handleSearch} 
            className="flex-1 max-w-md relative group hidden md:block"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60 group-focus-within:text-white" />
            <input
              type="search"
              placeholder="Chercher une équipe..."
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {/* BOUTON TOURNOI */}
          <Link 
            to="/tournament" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all shrink-0 ${
              location.pathname === '/tournament' 
                ? 'bg-white text-green-700 shadow-md' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            <Trophy className="w-5 h-5" />
            <span className="hidden sm:inline font-medium">Tournoi</span>
          </Link>

        </div>
      </div>
    </nav>
  );
}