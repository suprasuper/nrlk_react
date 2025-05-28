import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function GoogleButton() {

    const navigate = useNavigate();
    

    return (
        <GoogleOAuthProvider clientId="250591320543-4dh0q4c7dk26llt35rre34594509t41o.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={() => {
                    toast.success('Connecté avec succès!', {
                        autoClose:3000,
                        hideProgressBar:true,
                        pauseOnHover:true
                    });
                    navigate('/home', { replace: true });
                }}
                onError={() => {
                    toast.error('Erreur lors de la connexion', {
                        autoClose:3000,
                        hideProgressBar:true,
                        pauseOnHover:true
                    });
                    console.log('Connexion Google échouée');
                }}
            />
        </GoogleOAuthProvider>
    );
}

export default GoogleButton
