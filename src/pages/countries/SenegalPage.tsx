import React from 'react';
import { Link } from 'react-router-dom';

const SenegalPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-20 sm:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl">🇸🇳</span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                DigiLift Sénégal
              </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Autonomiser les entrepreneurs sénégalais grâce aux connexions de la diaspora et à la transformation numérique
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Découvrez Comment Ça Marche</button>
              <button className="btn-secondary">Soutenez une Entreprise</button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Impact au Sénégal</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'PME Soutenues', value: '89', desc: 'Entreprises financées' },
              { title: 'Emplois Créés', value: '890', desc: 'Opportunités d\'emploi' },
              { title: 'Contributeurs Diaspora', value: '67', desc: 'Supporters actifs' },
              { title: 'Formation Complétée', value: '92%', desc: 'Taux de réussite' }
            ].map((stat) => (
              <div key={stat.title} className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900">{stat.title}</div>
                <div className="text-gray-600">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Histoires de Succès du Sénégal</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-4xl mb-4">👩‍🤝‍👩</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coopérative de Femmes</h3>
              <p className="text-gray-600 mb-4">
                "Une coopérative de femmes à Saint-Louis a augmenté ses ventes de 80% après une formation en commerce électronique et le soutien de la diaspora."
              </p>
              <div className="text-sm text-primary-600 font-medium">Saint-Louis, Sénégal</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Commerce Numérique</h3>
              <p className="text-gray-600 mb-4">
                "Les entrepreneurs de Thiès ont adopté les paiements mobiles et le marketing en ligne, augmentant leur clientèle de 150%."
              </p>
              <div className="text-sm text-primary-600 font-medium">Thiès, Sénégal</div>
            </div>
          </div>
        </div>
      </div>

      {/* Language & Partners */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Support Linguistique Local</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇫🇷</span>
                  <div>
                    <div className="font-semibold">Français</div>
                    <div className="text-gray-600">Plateforme complète en français</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🗣️</span>
                  <div>
                    <div className="font-semibold">Wolof</div>
                    <div className="text-gray-600">Support prévu pour l'avenir</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Partenaires Locaux</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <div className="font-semibold">Ministère de l'Économie Numérique</div>
                    <div className="text-gray-600">Initiatives gouvernementales</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <div className="font-semibold">Orange Money</div>
                    <div className="text-gray-600">Intégration des paiements mobiles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Rejoignez DigiLift Sénégal
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200">
              Rejoignez le mouvement pour autonomiser les entrepreneurs sénégalais grâce au soutien de la diaspora.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/diaspora" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-50">
                Soutenez une Entreprise
              </Link>
              <Link to="/entrepreneurs" className="text-sm font-semibold leading-6 text-white">
                Postuler en tant qu'Entrepreneur <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SenegalPage;