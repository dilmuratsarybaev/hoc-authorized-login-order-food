import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

export const withAuthModal = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate()
        const [isModalOPen, setModalOpen] = useState(false)
        const navigateToSignIn = () => {
            setModalOpen(false)
            navigate('/signin')
        }

        return (
            <>
                <Component
                    {...props}
                    showAuthModal={() => setModalOpen(true)}
                />
                <Dialog
                    open={isModalOPen}
                    onClose={() => setModalOpen(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Not Authorized
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            In order to complete this action, please{' '}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={navigateToSignIn}>
                            Go to Sign In
                        </Button>
                        <Button onClick={() => setModalOpen(false)}>OK</Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
    return Wrapper
}
