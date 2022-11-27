import { useSessionContext } from 'supertokens-auth-react/recipe/session';
import Homepage from '../Components/Homepage';
import { Navigate } from 'react-router-dom';

const CheckHomepageAuth = () => {
  const { doesSessionExist } = useSessionContext();

  return (
    doesSessionExist ? <Navigate to='/manage' replace /> : <Homepage />
  )
}

export default CheckHomepageAuth;
