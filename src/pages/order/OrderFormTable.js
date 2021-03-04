import { Table, TableCell, TableRow,TableHead ,TableBody} from '@material-ui/core'
import React from 'react'
import Controls from '../../components/controls/Controls'

function OrderFormTable({columns,setColumns}) {
    return (
        <Table>
            
            <TableHead>
                <TableRow>
                    <TableCell>Item Information</TableCell>
                    <TableCell>Varient</TableCell>
                    <TableCell>Available Qty</TableCell>
                    <TableCell>Unit</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Rate</TableCell>
                    <TableCell>Disc/pcs</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Action</TableCell>
                    </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                    <TableCell><Controls.Input size='small'/></TableCell>
                    <TableCell><Controls.Input size='small'/></TableCell>
                    <TableCell><Controls.Input size='small'/></TableCell>
                    <TableCell><Controls.Input size='small'/></TableCell>
                    <TableCell><Controls.Input size='small'/></TableCell>
                    <TableCell><Controls.Input size='small'/></TableCell>
                    <TableCell><Controls.Input size='small'/></TableCell>
                    <TableCell><Controls.Input size='small'/></TableCell>
                    <TableCell><Controls.Button size='small' text='delete'/></TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell colSpan={6}></TableCell>
                    <TableCell align='right'>Cgst</TableCell>
                    <TableCell>Cgst</TableCell>
                   
                    </TableRow>
                    <TableRow >
                    <TableCell rowSpan={5} colSpan={5}><Controls.Input multiline fullWidth rows={9} label='Invoice Details'/></TableCell>
                    <TableCell colSpan={2} align='right'>Cgst</TableCell>
                    <TableCell>Cgst</TableCell>
                   
                    </TableRow>
                    <TableRow >
                    
                    <TableCell colSpan={2} align='right'>Product Discount</TableCell>
                    <TableCell>Cgst</TableCell>
                   
                    </TableRow>
                    <TableRow >
                    
                    <TableCell colSpan={2} align='right'>Invoice Discount</TableCell>
                    <TableCell>Cgst</TableCell>
                   
                    </TableRow>
                    <TableRow >
                    
                    <TableCell colSpan={2} align='right'>Service Charge</TableCell>
                    <TableCell>Cgst</TableCell>
                   
                    </TableRow>
                    <TableRow >
                    
                    <TableCell colSpan={2} align='right'>Shipping Charge</TableCell>
                    <TableCell>Cgst</TableCell>
                   
                    </TableRow>
                    <TableRow>
                    <TableCell colSpan={6}></TableCell>
                    <TableCell align='right'>Total Amount</TableCell>
                    <TableCell>Cgst</TableCell>
                   
                    </TableRow>
                    <TableRow>
                    <TableCell colSpan={6}>
                        <Controls.Button text='new Item'/>
                    </TableCell>
                    <TableCell align='right'>Paid</TableCell>
                    <TableCell>Cgst</TableCell>
                   
                    </TableRow>
                    <TableRow>
                    <TableCell colSpan={6}>
                    <Controls.Button text='Full paid'/>
                    </TableCell>
                    <TableCell align='right'>Due</TableCell>
                    <TableCell>Cgst</TableCell>
                   
                    </TableRow>
                    <TableRow>
                    <TableCell colSpan={6}></TableCell>
                    <TableCell align='right'><Controls.Button text='Payment'/></TableCell>
                    <TableCell><Controls.Button text='Submit'/></TableCell>
                   
                    </TableRow>
                </TableBody>
        </Table>
    )
}

export default OrderFormTable
