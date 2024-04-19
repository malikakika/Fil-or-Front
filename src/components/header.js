import React, { Fragment, useState } from 'react';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

// Définissez vos catégories de bijoux
const categories = [
  { name: 'Bracelets fins', href: '/bracelets-fins' },
  { name: 'Bracelets larges', href: '/bracelets-larges' },
  { name: 'Bracelets unis', href: '/bracelets-unis' },
  { name: 'Bracelets à motif', href: '/bracelets-motif' },
  { name: 'Bracelets homme', href: '/bracelets-homme' },
  { name: 'Bracelets de couple', href: '/bracelets-couple' },
  { name: 'Bracelets de cheville', href: '/bracelets-cheville' },
  { name: 'Bracelets personnalisés', href: '/bracelets-personnalises' },
  { name: 'Colliers', href: '/bracelets-colliers' },
  { name: 'atebas/mèche de cheveux', href: '/bracelets-atebas' },
  { name: 'Bijoux de plage', href: '/bracelets-plage' },
  { name: 'Accessoires', href: '/accessoires' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Produits
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {/* Ajouter les catégories de bijoux à la liste déroulante */}
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      className="block font-semibold text-gray-900 hover:bg-gray-50 rounded-lg px-4 py-2"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link to="/outlet" className="text-sm font-semibold leading-6 text-gray-900">
            Outlet
          </Link>
          <Link to="/histoire" className="text-sm font-semibold leading-6 text-gray-900">
            Notre histoire
          </Link>
          <Link to="/top2024" className="text-sm font-semibold leading-6 text-gray-900">
            Top 2024
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/contactPage" className="text-sm font-semibold leading-6 text-gray-900">
            Contactez Nous<span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* Catégories de bijoux pour le menu mobile */}
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {category.name}
                  </Link>
                ))}
                <Link
                  to="/outlet"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Outlet
                </Link>
                <Link
                  to="/histoire"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Notre histoire
                </Link>
                <Link
                  to="/top2024"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Top 2024
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="../pages/contactPage"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contactez Nous
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
