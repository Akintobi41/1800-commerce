import EyeSlashIcon from "@icons/EyeSlashIcon";
import EyeIcon from "@icons/EyeIcon";

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
