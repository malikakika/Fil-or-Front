
import axios from 'axios';

const BASE_URL = 'https://example.com/api'; // URL de base de votre API

const ProductService = {
  // Récupérer tous les produits
  getAllProducts: async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  },

  // Récupérer les produits par catégorie
  getProductsByCategory: async (categoryName) => {
    const response = await axios.get(`${BASE_URL}/products?category=${categoryName}`);
    return response.data;
  },

  // Ajouter un nouveau produit
  addProduct: async (newProductData) => {
    const response = await axios.post(`${BASE_URL}/products`, newProductData);
    return response.data;
  },

  // Mettre à jour un produit existant
  updateProduct: async (productId, updatedProductData) => {
    const response = await axios.put(`${BASE_URL}/products/${productId}`, updatedProductData);
    return response.data;
  },

  // Supprimer un produit
  deleteProduct: async (productId) => {
    const response = await axios.delete(`${BASE_URL}/products/${productId}`);
    return response.data;
  }
};

export default ProductService;
