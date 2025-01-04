const AuthButtons = () => (
  <div className="hidden md:flex items-center space-x-4">
    <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors">
      Sign In
    </button>
    <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
      Sign Up
    </button>
  </div>
);

export default AuthButtons;