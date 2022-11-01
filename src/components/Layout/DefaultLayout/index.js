import Header from './Header';
import Player from './Player';
import Sidebar from './Sidebar';

import Styles from './DefaultLayout.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Sidebar />
            <Player />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
