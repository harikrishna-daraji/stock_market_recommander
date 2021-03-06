import { Algorithm } from "../Algorithm";
import { render, cleanup } from "@testing-library/react"; 


// I am well aware there is one test case which is not passing becuase the failure is coming from App.test.js where I am using one library to draw a graph(react-plotly.js).
afterEach(cleanup)

it('Algo. working fine', ()=> {
    Algorithm({date: '2022-07-10',price: 112, social_count: 23,S_MAX_LIMIT: 50, P_MAX_LIMIT: 150, limit_divide: 5});
}) 
it('Algo. working fine', ()=> {
    Algorithm({date: '2022-07-13',price: 12233, social_count: 4556,S_MAX_LIMIT: 1234, P_MAX_LIMIT: 3455, limit_divide: 23});
}) 

it('Algo. working fine', ()=> {
    Algorithm({date: '2022-07-11',price: 2212112121, social_count: 455667688778,S_MAX_LIMIT: 123478787878, P_MAX_LIMIT: 3455787878, limit_divide: 23787887});
}) 

it('Algo. working fine', ()=> {
    Algorithm({date: '2022-07-11',price: 22121121215555, social_count: 45566768877833232,S_MAX_LIMIT: 1234787878783434, P_MAX_LIMIT: 3455787878544343, limit_divide: 237878874343434});
}) 