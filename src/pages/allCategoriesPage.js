import React from "react";
import { Link } from "react-router-dom"; // Assurez-vous d'importer Link depuis react-router-dom si vous utilisez React Router

// Importez les données des catégories depuis votre fichier CategoryPreviews.js
import {categories} from "../components/home/categoryPreviews";
function AllCategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-gray-900">Toutes les catégories</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {categories.map((category) => (
            <div key={category.name} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                {/* Ajoutez votre image pour représenter la catégorie */}
                <img
                  src="https://via.placeholder.com/400x300"
                  alt={category.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                {/* Utilisez un lien pour rediriger l'utilisateur vers la page de détails de la catégorie */}
                <Link to={category.href}>
                  <span className="absolute inset-0" />
                  {category.name}
                </Link>
              </h3>
              <p className="text-base font-semibold text-gray-900">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllCategoriesPage;
