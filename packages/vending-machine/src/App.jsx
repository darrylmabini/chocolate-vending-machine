import React from 'react';
import VendingMachine from 'containers/Machine';
import VendingMachineProvider from 'context/VendingMachine';

function App() {
  return (
    <div className="App">
      <VendingMachineProvider>
        <VendingMachine />
      </VendingMachineProvider>
      <p className="created-by">
        Created By:{' '}
        <a href="https://www.dmabini.com/" target="__blank">
          Darryl B. Mabini
        </a>
      </p>
    </div>
  );
}

export default App;
