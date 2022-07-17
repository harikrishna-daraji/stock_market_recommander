import { Algorithm } from "../Algorithm";
import { render, cleanup } from "@testing-library/react"; 

afterEach(cleanup);

it('Algo. working fine', ()=> {
    Algorithm({date: '2022-07-10',price: 112, social_count: 23,S_MAX_LIMIT: 50, P_MAX_LIMIT: 150, limit_divide: 5});
}) 

it('Algo. working fine', ()=> {
    Algorithm({date: '2022-07-13',price: 12233, social_count: 4556,S_MAX_LIMIT: 1234, P_MAX_LIMIT: 3455, limit_divide: 23});
}) 

it('Algo. working fine', ()=> {
    Algorithm({date: '2022-07-11',price: 2212112121, social_count: 455667688778,S_MAX_LIMIT: 123478787878, P_MAX_LIMIT: 3455787878, limit_divide: 23787887});
}) 