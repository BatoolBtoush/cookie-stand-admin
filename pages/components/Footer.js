function Footer({counter}) {
    return (
        <footer className="px-8 py-8 text-black bg-[#5B5368] bottom-0 fixed left-0 right-0 w-full h-20 text-center font-bold">
        <p className="text-sm">&copy; 2020 Cookie Stand Admin</p>
        
        <p className="absolute top-0 left-0 px-2 py-8 text-sm center">{counter} Locations World Wide </p>
                
    </footer>
    )
}

export default Footer