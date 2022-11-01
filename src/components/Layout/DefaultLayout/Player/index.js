import Styles from './Player.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);

function Player() {
    return <div className={cx('wrapper')}>Player</div>;
}

export default Player;
