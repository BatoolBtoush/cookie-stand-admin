function CreateForm( {locationsHandler} ) {
    return (
        <main className="grid items-center w-full p-10 px-0 text-center bg-white justify-items-stretch">
            <form onSubmit={locationsHandler} className="px-10 py-5 mx-12 bg-[#AFA8BA] rounded justify-self-center">
                    <h3 className="font-bold text-center" >Create Cookie Stand</h3>
                    <br/>
                    <div className="left-0 w-full">
                        <label className="left-0 flex items-center text-left justify-content justify-items-stretch" >Location<input type="text" className="left-0 flex-auto w-96"  placeholder="" name="location" /></label>  
                    </div>
                    <div className="">
                        <label className="inline-block px-2 py-4 pl-2 text-center">Minimum Customer Per Hour <br/><input type="text" className="flex-auto pl-2" name="minCustomer" placeholder=""  /></label>
                        <label className="inline-block px-2 py-4 pl-2 text-center">Maximum Customer Per Hour<br/> <input type="text" className="flex-auto pl-2" name="maxCustomer" placeholder=""  /></label>
                        <label className="inline-block px-2 py-4 pl-2 text-center">Average Cookie Per Sale<br/> <input type="text" className="flex-auto pl-2" name="avgCookie" placeholder="" /></label>
                        <button type="submit" className="bg-[#5B5368] hover:bg-[#46869A] rounded border px-4 py-2 text-black w-50 h-30 ">Create</button>
                    </div>
                </form>
                <br/>
                <br/>
            

        </main>
        
        
        
        
    )
}    

export default CreateForm