import { Button } from "@example/ui";
import styled from "styled-components";

import { trpc } from "@trpc";

export const Test = () => {
  const testQuery = trpc.test.useQuery();
  const urlQuery = trpc.test.useQuery();

  return (
    <TestContainer>
      {testQuery.data?.test}
      {/* get url */}
      <pre>{JSON.stringify(urlQuery.data, null, 2)}</pre>
      <Button />
    </TestContainer>
  );
};

const TestContainer = styled.div`
  height: 100%;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-gap: 10px;
`;
