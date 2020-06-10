import PaginationHandler from 'Hocs/paginationHandler';
import { withRouter } from 'react-router';
import Section from './section';

export default PaginationHandler(withRouter(Section));
