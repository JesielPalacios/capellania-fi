import useUser from "../../core/hooks/useUser";
import { Main } from "../Dashboard/Components/Main";
import { UserCont } from "./UsersElements";
import {Datatable} from "../Dashboard/Components/Datatable/index";

export const Users = () => {
  const { sidebar } = useUser();

  return (
      <UserCont>
    <Main title={"Usuarios"} sidebar={sidebar} />
        <div className="Tarject">
          <Datatable />
        </div>
      </UserCont>
  );
};
