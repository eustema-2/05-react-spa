import { createContext, useContext } from "react";

const TestContext = createContext();

function TestProvider({ children }) {
  return (
    <TestContext.Provider value={{ test: "test" }}>
      {children}
    </TestContext.Provider>
  );
}

function useTest() {
  return useContext(TestContext);
}

export { TestProvider, useTest };
