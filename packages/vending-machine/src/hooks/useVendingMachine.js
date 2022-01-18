import React from 'react';
import { VendingMachineContext } from 'context/VendingMachine';

const useVendingMachine = () => React.useContext(VendingMachineContext);

export default useVendingMachine;
