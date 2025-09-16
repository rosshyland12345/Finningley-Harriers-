import React from 'react';

export default function App() {
  const club = {
    name: 'Finningley Harriers FC',
    tagline: 'Grassroots • Fun • Community',
    founded: 2020,
    contactEmail: 'contact@finningleyharriers.co.uk',
    phone: '01234 567890',
    address: 'Finningley Pavilion, Station Road, Finningley'
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">{club.name}</h1>
        <p className="text-lg text-gray-600">{club.tagline}</p>
      </header>
      <main className="max-w-2xl text-center">
        <p className="mb-4">Founded in {club.founded}, {club.name} is a grassroots football club based in Finningley. We focus on fun, community, and inclusion.</p>
        <p className="mb-4">Contact us at <a href={`mailto:${club.contactEmail}`} className="underline">{club.contactEmail}</a></p>
        <p className="text-sm text-gray-500">{club.address} | {club.phone}</p>
      </main>
      <footer className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} {club.name}</footer>
    </div>
  );
}
