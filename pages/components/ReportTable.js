import React from 'react'
import hours from '../../data';

function ReportTable(props) {
  return (
    <div>
        <table className="w-8/12 mx-auto my-4 table-auto ">
            <thead>
                <tr>
                    <th className="text-center border border-black">Location</th>
                    {
                    hours.map((hour)=> {
                        return <th className="text-left border border-black">{hour}</th>
    })
}               

                    <th className="text-center border border-black">Total</th>
                </tr> 
            </thead>
            <tbody>
                {props.locations.map((location) => {
                    return (
                        <tr>
                            <td className="text-left border border-black">{location.location}</td>
                            {
                                [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36].map((hour) => {
                                    return <td className="text-center border border-black">{hour}</td>
                                }
                                )
                            }
                            <td className="text-center border border-black">
                            {[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36].reduce((total, curr) => 
                                total += curr, 0)}  
                                
                            </td>                        
                        </tr>
                
                    )
                }
                )}
                           
                
            </tbody>
            
            
            <tfoot>
                <tr>
                    <td className="font-bold text-center border border-black ">Totals</td>
                </tr>
            </tfoot>
            
            
                    
        </table>
    
    </div>
  )
}

export default ReportTable