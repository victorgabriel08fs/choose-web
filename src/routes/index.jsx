
import SignRoutes from './SignRoutes';
import OtherRoutes from './OtherRoutes';
import { useAuth } from '../contexts/auth';
import AdminRoutes from './AdminRoutes';

const Routes = () => {
    const { signed, user } = useAuth();

    return (
        signed ? (user.isAdmin ? <AdminRoutes /> : <OtherRoutes />) : <SignRoutes />
    );
};

export default Routes;