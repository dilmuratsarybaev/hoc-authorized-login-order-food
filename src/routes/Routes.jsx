import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from '../layout/AdminLayout'
import { UserLayout } from '../layout/UserLayout'
import { UserRole } from '../lib/constants/common'
import { AdminMeals } from '../pages/admin/AdminMeals'
import { AdminOrders } from '../pages/admin/AdminOrders'
import { MealsPage } from '../pages/user/Meals'
import { SingIn } from '../pages/user/SingIn'
import { SingUp } from '../pages/user/SingUp'
import {  UserOrders } from '../pages/user/UserOrders'
import { ProtectedRoutes } from './ProtectedRoutes'

export const AppRoutes = () => {
    const role = useSelector((state) => state.auth.user.role)

    const isAllowed = (roles) => {
        return roles.includes(role)
    }

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoutes
                        isAllowed={isAllowed([UserRole.GUEST, UserRole.USER])}
                        fallBackPath="/admin/meals"
                        component={UserLayout}
                    />
                }
            >
                <Route
                    index
                    element={
                        <ProtectedRoutes
                            isAllowed={isAllowed([
                                UserRole.GUEST,
                                UserRole.USER,
                            ])}
                            fallBackPath="/admin/meals"
                            component={MealsPage}
                        />
                    }
                />
                <Route
                    path="/userorders"
                    element={
                        <ProtectedRoutes
                            isAllowed={isAllowed([UserRole.USER])}
                            fallBackPath="/userorders"
                            component={UserOrders}
                        />
                    }
                />
                <Route
                    path="signup"
                    element={
                        <ProtectedRoutes
                            isAllowed={isAllowed([
                                UserRole.GUEST,
                                UserRole.USER,
                            ])}
                            fallBackPath={
                                role === UserRole.ADMIN ? '/admin/meals' : '/'
                            }
                            component={SingUp}
                        />
                    }
                />
                <Route
                    path="signin"
                    element={
                        <ProtectedRoutes
                            isAllowed={isAllowed([
                                UserRole.GUEST,
                                UserRole.USER,
                            ])}
                            fallBackPath={
                                role === UserRole.ADMIN ? '/admin/meals' : '/'
                            }
                            component={SingIn}
                        />
                    }
                />
            </Route>
            <Route
                path="/admin"
                element={
                    <ProtectedRoutes
                        isAllowed={isAllowed([UserRole.ADMIN])}
                        fallBackPath="/"
                        component={AdminLayout}
                    />
                }
            >
                <Route
                    path="meals"
                    element={
                        <ProtectedRoutes
                            isAllowed={isAllowed([UserRole.ADMIN])}
                            fallBackPath="/"
                            component={AdminMeals}
                        />
                    }
                />
                <Route
                    path="orders"
                    element={
                        <ProtectedRoutes
                            isAllowed={isAllowed([UserRole.ADMIN])}
                            fallBackPath="/"
                            component={AdminOrders}
                        />
                    }
                />
            </Route>
            <Route
                path="*"
                element={<Typography>404 Page Not Found</Typography>}
            />
        </Routes>
    )
}
