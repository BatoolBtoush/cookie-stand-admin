function Main( {cookieStands, cookieStandsCount, createCookieStand} ) {
    return (
        <main className="grid items-center w-full p-10 px-0 text-center bg-white justify-items-stretch">
            <form className="px-10 py-5 mx-12 bg-[#3BB99F] rounded justify-self-center">
                    <h3 className="font-bold text-center" >Create Cookie Stand</h3>
                    <br/>
                    <div className="left-0 w-full">
                        <label className="left-0 text-left justify-items-stretch" >Location<input type="text" className="left-0 flex-auto w-96"  placeholder="Enter a location" /></label>  
                    </div>
                    <div className="">
                        <label className="inline-block px-2 py-4 pl-2 text-center">Minimum Customer Per Hour <br/><input type="text" className="flex-auto pl-2" name="minCustomer" placeholder="Enter a minimum customers" defaultValue={2} /></label>
                        <label className="inline-block px-2 py-4 pl-2 text-center">Maximum Customer Per Hour<br/> <input type="text" className="flex-auto pl-2" name="maxCustomer" placeholder="Enter a maximum customers" defaultValue={4} /></label>
                        <label className="inline-block px-2 py-4 pl-2 text-center">Average Cookie Per Sale<br/> <input type="text" className="flex-auto pl-2" name="avgCookie" placeholder="Enter an average cookies" defaultValue={2.5} /></label>
                        <button type="submit" className="bg-[#165044] px-4 py-2 text-black w-50 h-30 ">Create</button>
                    </div>
                </form>
                <br/>
            <p className="text-center">Report Table Coming Soon ...</p>

        </main>
        
        
        
        
    )
}    

export default Main