import React from 'react'
import hours from '../../data';

function ReportTable({locations}) {
  return (
    <div>
        <table className="w-1/2 mx-auto my-4">
            <thead>
                <tr>
                    <th className="text-left border border-black">Location</th>
                    {
                    hours.map((hour)=> {
                        return <th className="text-left border border-black">{hour}</th>
    })
}               
                </tr>   
            </thead>
            <tbody>
                <tr>
                    <td className="text-left border border-black">{locations}</td>
                    
                </tr>
            </tbody>
            
            
                    
        </table>
    
    </div>
  )
}

export default ReportTable