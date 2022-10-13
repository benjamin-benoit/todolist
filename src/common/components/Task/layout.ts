import styled from 'styled-components';

export const TaskElement = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 1px solid white;
`;

export const TaskDate = styled.div`
    background-color: #c9efe1;
    flex-direction: column;
    width: 500px;
    color: #FFF;
`

export const StartDate = styled.div`
    text-align: center;
    background-color: #c9efe1;
    color: #FFF;
    padding: 10px;
`

export const EndDate = styled.div`
    text-align: center;
    background-color: #b5e2d1;
    color: #FFF;
    padding: 10px;
`

export const EndDateButton = styled.button`
    text-align: center;
    background-color: #b5e2d1;
    color: #FFF;
    padding: 10px;
    border: none;
    width: 100%;
    cursor: pointer;

`

export const TaskInfos = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #bad8e2;
    color: #FFF;
    width: 100%;
`

export const TaskLabel = styled.div`
    background-color: #a2c7d3;
    padding: 2px;
    font-size: 19px;
`

export const TaskDescription = styled.div`
    padding: 5px;
`

export const DeleteButton = styled.button`
    float: right;
`