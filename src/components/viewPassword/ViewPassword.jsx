import EyeSlashIcon from './../../assets/Icons/EyeSlashIcon';
import EyeIcon from '../../assets/Icons/EyeIcon';

function ViewPassword({view,...props}) {
  return (
      <section {...props}>
      {view ? <EyeIcon className={'absolute top-9 right-2 cursor-pointer'} /> : <EyeSlashIcon className={'absolute top-9 right-2 cursor-pointer'}/>}
      </section>
      
  )
}

export default ViewPassword