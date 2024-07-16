import Button from './../reusables/button/Button';
import authService from '../../appwrite/auth/auth';
import { signOut } from '../../store/loginSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

function SignOutBtn() {
    // const getProduct = async function () {
    //     return await fetchData(id).then((data) => data);
    //   };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function deleteUser() { 
        try {
            await authService.logout();   //handle it in the .then of the function

            dispatch(signOut())
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }


  return (
      <Button styles='text-[var(--white)] mt-3 rounded p-2' onClick={deleteUser}> Sign Out </Button>
  )
}
export default SignOutBtn