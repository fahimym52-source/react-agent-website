export default function PortfolioCard({ title, category, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden bg-white shadow-sm border border-border"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-yellow-400/0 transition-all duration-300 group-hover:bg-yellow-400/50">
          <span className="text-6xl font-light text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            +
          </span>
        </div>
      </div>

      {/* Card Info */}
      <div className="bg-white px-4 py-4">
        <h3 className="text-lg font-medium text-dark">{title}</h3>

        <p className="text-muted">{category}</p>
      </div>
    </div>
  );
}
