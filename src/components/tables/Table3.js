import React from 'react'

export default function Table({columns,columnNames,data,actions}) {
    return (
        <div className={'table-responsive text-center'}>
            <table className="table table-striped table-inverse">
                <thead className="thead-inverse">
                    <tr>
                        {
                            columnNames && Array.isArray(columnNames) && columnNames.map((item,index)=><th key={index}>{item}</th>)
                        }
                    </tr>
                    </thead>
                    <tbody>
                        
                        {
                            data && Array.isArray(data) && data.map((item,index)=><tr key={index}>{
                                
                            Object.keys(item).map((item1,index)=><>
                            <td key={index}>{columns[index] && columns[index].render && columns[index].render(item) || item[columns[index]]}</td>
                            </>)
                        }
                        <>{actions && <td>{actions.map((data,i)=><button className={data.class} onClick={()=>data.func(item)}>{data.name}</button>)}</td>}</>
                           </tr>)
                        }
                                </tbody>
            </table>
        </div>
    )
}