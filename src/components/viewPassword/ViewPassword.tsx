import EyeIcon from "@assets/icons/EyeIcon";
import EyeSlashIcon from "@assets/icons/EyeSlashIcon";

function ViewPassword({ view, ...props }) {
  return (
    <section {...props}>
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
