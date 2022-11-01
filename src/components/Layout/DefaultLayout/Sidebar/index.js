import Styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);

function Sidebar() {
    return <div className={cx('wrapper')}>Sidebar</div>;
}

export default Sidebar;
