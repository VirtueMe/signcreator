import { createBrowserHistory as createHistory } from 'history';

const history = createHistory({ basename: window.location.pathname.replace('edit', '').replace('payment', '').replace('receipt', '') });

export default history;
