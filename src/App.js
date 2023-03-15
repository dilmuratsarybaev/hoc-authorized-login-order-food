import { createTheme, ThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Snackbar } from './components/UI/Snackbar'
import { darkTheme, lightTheme } from './lib/constants/theme'
import { AppRoutes } from './routes/Routes'
import { store } from './store'
import { uiActions } from './store/ui/uiSlice'

function AppContent() {
    const dispatch = useDispatch()
    const snackbar = useSelector((state) => state.ui.snackbar)
    const themeMode = useSelector((state) => state.ui.themeMode)

    const closeSnackbarHandler = () => {
        dispatch(uiActions.closeSnackbar())
    }

    const theme = useMemo(() => {
        const currentTheme =
            themeMode === 'light' ? { ...lightTheme } : { ...darkTheme }
        return createTheme(currentTheme)
    }, [themeMode])
    return (
        <ThemeProvider theme={theme}>
            <Snackbar
                onClose={closeSnackbarHandler}
                severity={snackbar.severity}
                isOpen={snackbar.isOpen}
                message={snackbar.message}
                autoHideDuration={5000}
            />
            <AppRoutes />
        </ThemeProvider>
    )
}
const App = () => {
    return (
        <Provider store={store}>
            <AppContent />
        </Provider>
    )
}
export default App
