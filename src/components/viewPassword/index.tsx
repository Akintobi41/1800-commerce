import EyeIcon from "@assets/icons/EyeIcon";
import EyeSlashIcon from "@assets/icons/EyeSlashIcon";
import { FC } from "react";


type VProps = {
  view: boolean
  onClick: ()=> void
}


const ViewPassword : FC<VProps> =({ view,onClick, ...props }) =>{
  return (
    <section {...props} onClick={onClick}>
      {view ? (
        <EyeIcon
          className={
            "absolute top-9 right-2 cursor-pointer"
          }
        />
      ) : (
        <EyeSlashIcon
          className={
            "absolute top-9 right-2 cursor-pointer"
          }
        />
      )}
    </section>
  );
}

export default ViewPassword;
