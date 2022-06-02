import useUser from "../../core/hooks/useUser";
import { Main } from "../Dashboard/Components/Main";
import { UserCont, UserTarjet } from "./UsersElements";

export const Users = () => {
  const { sidebar } = useUser();

  return (
    <Main title={"Usuarios"} sidebar={sidebar}>
      <UserCont>
        <UserTarjet> <button> users </button> </UserTarjet>
      </UserCont>
      <UserCont>
        <UserTarjet> <button> users </button> </UserTarjet>
      </UserCont>
      <UserCont>
        <UserTarjet> <button> users </button> </UserTarjet>
      </UserCont>
    </Main>
  );
};
