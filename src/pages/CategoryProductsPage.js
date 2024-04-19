import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../services/productService';
function CategoryProductsPage() {
  const { categoryName } = useParams(); // Récupère le paramètre de l'URL (nom de la catégorie)
  const [products, setProducts] = useState([]); // État pour stocker les produits de la catégorie

  useEffect(() => {
    // Fonction pour charger les produits de la catégorie spécifiée
    const loadProducts = async () => {
      try {
        const response = await ProductService.getProductsByCategory(categoryName); // Appelez votre méthode pour récupérer les produits par catégorie
        setProducts(response.data); // Mettez à jour l'état avec les produits récupérés
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    loadProducts(); // Appelez la fonction de chargement des produits au chargement du composant
  }, [categoryName]); // Recharge les produits lorsque le nom de la catégorie change

  return (
    <div>
      <h1>Bracelets {categoryName}</h1>
      <ul>
        {/* Affichez la liste des produits */}
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Catégorie: {product.category}</p>
            <p>Prix: {product.price}</p>
            <p>Description: {product.description}</p>
            {/* Vous pouvez afficher d'autres détails du produit selon vos besoins */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryProductsPage;
