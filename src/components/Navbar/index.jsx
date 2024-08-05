import { useState } from "react";
import CategoriesData from "../../data/Categories.json";
import { useNavigate, useLocation } from "react-router-dom";
const Navbar = () => {
  const [categories] = useState(CategoriesData);

  const navigate = useNavigate();
  const location = useLocation();

  // Obtiene la categoría activa de la URL
const currentCategory  = location.pathname.split("/")[2] || "Todos%20los%20articulos"

  const handleCategoryClick = (categoryId) => {
    if (categoryId === "Todos los artículos") {
      navigate(`/consejos/Todos%20los%20articulos`);
    } else {
      navigate(`/consejos/${encodeURIComponent(categoryId)}`);
    }
  };

  return (
    <div className="p-10  flex lg:flex-col flex-row">
      <h2 className="text-2xl font-semibold">Categorias</h2>
      <ul className="my-5">
        <li
          className={`flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 ${
            currentCategory === "Todos%20los%20articulos" ? "bg-blue-500 text-white" : "bg-white hover:bg-blue-400"
          }`}
          onClick={() => {
            handleCategoryClick("Todos los artículos");
          }}
        >
          Todos los articulos
        </li>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => {
              handleCategoryClick(category.nombre);
            }}
        
            className={`p-2 my-3 rounded-md cursor-pointer ${
             decodeURIComponent(currentCategory) === category.nombre ? "bg-blue-500 text-white" : "bg-white hover:bg-blue-400"
            }`}
          >
            {category.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
