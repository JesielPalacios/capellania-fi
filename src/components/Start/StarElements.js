import styled from "styled-components";

export const Home = styled.div`
  display: flex;

  .homeContainer {
    flex: 6;

    .widgets {
      display: flex;
      padding: 20px;
      gap: 20px;
    }
    .charts {
      display: flex;
      padding: 20px;
      gap: 20px;
    }

    .charts {
      padding: 5px 20px;
    }

    .listContainer {
      -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
      box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
      padding: 20px;
      margin: 20px;

      .listTitle {
        font-weight: 500;
        color: gray;
        margin-bottom: 15px;
      }
    }
  }
`;
