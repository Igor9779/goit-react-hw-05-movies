import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container, Nav } from './Layout.styled.js';
import Loader from 'components/Loader/Loader';

const Layout = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
            </Nav>

            <Container>
                <Suspense fallback={<Loader />}>
            <Outlet />
                </Suspense>
            </Container>
        </>
    )
}

export default Layout;