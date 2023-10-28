const Header = ({ handleOpenModal }) => {
  return (
    <header className="flex justify-between p-2">
      <h1 className="text-xl font-bold">CRUD Autos</h1>
      <button onClick={handleOpenModal} className="bg-green-400 p-2 px-4 font-semibold rounded-md hover:bg-green-500 transition-colors">
        Agregar auto
      </button>
    </header>
  )
}
export default Header