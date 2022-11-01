import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Sidebar />
            <div>{children}</div>
        </div>
    );
}

export default DefaultLayout;
