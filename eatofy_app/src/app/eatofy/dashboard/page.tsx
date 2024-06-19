import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 bg-zinc-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-5xl font-bold text-black">Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search" className="p-2 border rounded" />
          <button className="material-icons bg-red-500 p-2 rounded-lg">Viwe</button>
   
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 text-black lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-zinc-200 p-4 rounded">
          <h2 className="text-lg font-bold">Total Hotels</h2>
          <p className="text-2xl">10,475</p>
          <p className="text-green-500">+11.01%</p>
        </div>
        <div className="bg-zinc-200 p-4 rounded">
          <h2 className="text-lg font-bold">Lucro Total</h2>
          <p className="text-2xl">367</p>
          <p className="text-green-500">+9.15%</p>
        </div>
        <div className="bg-zinc-200 p-4 rounded">
          <h2 className="text-lg font-bold">Quantidade de Vendas</h2>
          <p className="text-2xl">1,156</p>
          <p className="text-red-500">-0.56%</p>
        </div>
        <div className="bg-zinc-200 p-4 rounded">
          <h2 className="text-lg font-bold">Itens Vendidos</h2>
          <p className="text-2xl">239</p>
          <p className="text-red-500">-1.48%</p>
        </div>
      </div>

      <div className="bg-white h-screen p-4 rounded mb-6">
        <h2 className="text-lg font-bold mb-4">Total De Vendas Hoje</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <button className="text-sm">Total De Produtos</button>
            <button className="text-sm">Estado Operacional</button>
          </div>
          <div className="flex space-x-2">
            <span className="text-sm">Semana atual</span>
            <span className="text-sm">Semana anterior</span>
          </div>
        </div >
        <img src="https://placehold.co/600x200" alt="Sales Chart" className="w-full" />
      </div>

    </div>
  );
};

export default Dashboard;
