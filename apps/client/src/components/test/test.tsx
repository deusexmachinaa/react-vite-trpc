import { Button } from "@example/ui";
import styled from "styled-components";

import { trpc } from "@trpc";

export const Test = () => {
  const testQuery = trpc.test.useQuery();
  const urlQuery = trpc.url.useQuery();

  return (
    <TestContainer>
      {testQuery.data?.test}
      {/* get url */}
      {/* <pre>{JSON.stringify(urlQuery.data, null, 2)}</pre> */}
      {/* 첫번째 데이터 출력 */}
      <br />
      {/* {JSON.stringify(urlQuery.data?.[0])} */}
      {urlQuery.data && (
        <div>
          <div>UserId: {urlQuery.data[0].userId}</div>
          <div>Id: {urlQuery.data[0].id}</div>
          <div>Title: {urlQuery.data[0].title}</div>
          <div>Completed: {urlQuery.data[0].completed.toString()}</div>
        </div>
      )}
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
  overflow: auto;
`;
