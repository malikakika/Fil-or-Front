import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page non trouvée</h1>
        <p className="text-lg text-gray-600">La page que vous recherchez n'a pas été trouvée.</p>
        {/* Vous pouvez ajouter un lien pour revenir à la page d'accueil */}
        {/* <a href="/" className="text-blue-600 hover:underline mt-4">Retour à la page d'accueil</a> */}
      </div>
    </div>
  );
}

export default NotFoundPage;
