import React from "react";
import Account from "./Account";
import Deposits from "./Deposits";

import General from "./General";
import Items from "./Items";
import Other from "./Other";
import Withdrawals from "./Withdrawals";

const Components = {
  General,
  Account,
  Items,
  Deposits,
  Withdrawals,
  Other,
};
function InitialTab({activeComponent}) {
  const Component = Components[activeComponent];

  return (
    <div>
      <Component />
    </div>
  );
}

export default InitialTab;
