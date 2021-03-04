import React from 'react'
import {Add as AddIcon,Edit as EditIcon,Delete as DeleteIcon} from '@material-ui/icons';
import Button from '@material-ui/core/Button';

export function AddButton({children,...others}) {
    return (
        <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                 startIcon={<AddIcon />}
                 {...others}
                >
                  {children}
                </Button>
    )
}
export function EditButton({children,...others}) {
    return (
        <Button
                  size="small"
                  color="primary"
                  variant='outlined'
                 {...others}
                 startIcon={<EditIcon />}
                >
                Edit
                </Button>
    )
}

export function DeleteButton({children,...others}) {
    return (
        <Button
                  size="small"
                  variant='outlined'
                  color="primary"
                  startIcon={<DeleteIcon />}
                 {...others}
                >
                Delete
                </Button>
    )
}

