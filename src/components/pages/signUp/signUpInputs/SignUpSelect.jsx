import { shopFilter } from "../../../../utils/constants/constants";
import Select from "../../../reusables/select/Select";

function SignUpSelect({ formProp }) {
  const { register, day, month } = formProp;

  return (
    <>
      <Select
        type="signup"
        options={shopFilter}
        label="Shopping For"
        styles={"w-1/2 h-[25px] bg-white"}
      />
      <section>
        <p>Birthday</p>
        <section className="flex w-full">
          <Select
            styles={"w-full h-[25px] bg-white"}
            type="birthday"
            width="w-[50%]"
            options={month}
            {...register("birthmonth", {
              required: true,
            })}
          />
          <Select
            type="birthday"
            styles={
              "w-full ml-2 h-[25px] bg-white active:bg-white"
            }
            width="w-[50%]"
            options={day}
            {...register("birthdate", {
              required: true,
            })}
          />
        </section>
      </section>
    </>
  );
}

export default SignUpSelect;
