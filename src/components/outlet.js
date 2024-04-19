

const categories = [
    { name: 'Bracelets fins', href: './bracelets-fins', description : 'Description de la catégorie' },
    { name: 'Bracelets larges', href: './bracelets-larges' , description : 'Description de la catégorie'  },
    { name: 'Bracelets unis', href: './bracelets-unis' , description : 'Description de la catégorie'  },
    { name: 'Bracelets à motif', href: './bracelets-motif' , description : 'Description de la catégorie' },
    { name: 'Bracelets homme', href: './bracelets-homme' , description : 'Description de la catégorie'  },
    { name: 'Bracelets de couple', href: './bracelets-couple' , description : 'Description de la catégorie' },
    { name: 'Bracelets de cheville', href: './bracelets-cheville' , description : 'Description de la catégorie' },
    { name: 'Bracelets personnalisés', href: './bracelets-personnalises'  , description : 'Description de la catégorie' },
    { name: 'Colliers', href: './bracelets-colliers' ,description : 'Description de la catégorie'  },
    { name: 'atebas/mèche de cheveux', href: './bracelets-atebas' ,description : 'Description de la catégorie'  },
    { name: 'Bijoux de plage', href: './bracelets-plage' , description : 'Description de la catégorie' },
    { name: 'Accessoires', href: './accessoires' , description : 'Description de la catégorie'  },
  ];

function getRandomCategories() {
  const randomCategories = [];
  const categoriesCopy = [...categories];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * categoriesCopy.length);
    randomCategories.push(categoriesCopy[randomIndex]);
    categoriesCopy.splice(randomIndex, 1);
  }
  return randomCategories;
}

export default function Outlet() {
  const randomCategories = getRandomCategories();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {randomCategories.map((category) => (
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
                <a href={category.href}>
                  <span className="absolute inset-0" />
                  {category.name}
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900"> {category.description}</p>
            </div>
          ))}
        </div>
        {/* Ajoutez un bouton pour afficher plus de catégories */}
    
      </div>
    </div>
  );
}
