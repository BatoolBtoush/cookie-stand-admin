function Header() {
    return (
      <header className="flex items-center justify-between py-4 bg-[#5B5368]">
        <h1 className="mx-1 text-4xl font-bold"> Cookie Stand Admin</h1>
        <div className="flex px-10 space-x-5">
          <button className="bg-[#FCF8FF] hover:bg-[#46869A] rounded border px-4 py-2 text-black-700 w-30 h-10 hover:text-white  font-semibold ">rudy</button>
          <button className="bg-[#FCF8FF] hover:bg-[#46869A] rounded border px-4 py-2 text-black-700 w-30 h-10  hover:text-white font-semibold ">Sign Out</button>
          <button className="bg-[#FCF8FF] hover:bg-[#46869A] rounded border px-4 py-2 text-black-700  w-30 h-10 hover:text-white font-semibold ">Overview</button>
        </div>
        </header>
    )
}
  
export default Header;