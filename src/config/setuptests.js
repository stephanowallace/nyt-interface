import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dotenv from 'dotenv';
import jestFetchMock from 'jest-fetch-mock';

Enzyme.configure({ adapter: new Adapter() });

global.fetch = jestFetchMock;
global.scrollTo = jest.fn();

dotenv.config();
