import React from 'react'

const Header = () => {
  return (
    <header className="border-b border-slate-800 px-6 py-5">
      <h1 className="text-2xl font-bold">Kanban Task Board</h1>
      <p className="mt-1 text-sm text-slate-400">
        Organise and Manage your Tasks
      </p>
    </header>
  );
};

export default Header;