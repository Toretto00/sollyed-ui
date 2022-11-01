import { useRef } from 'react';
import classNames from 'classnames/bind';

import Styles from './Header.module.scss';
import { ClearIcon, LogoIcon, SearchIcon } from '@/components/icons';

const cx = classNames.bind(Styles);

function Header() {
    const inputRef = useRef(null);

    const clearSearchInput = () => {
        inputRef.current.value = '';
    };

    return (
        <div className={cx('wrapper')}>
            <LogoIcon className={cx('logoIcon')} />
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    className={cx('search-input')}
                    placeholder="What do you want to listen to?"
                ></input>
                <button
                    onClick={clearSearchInput}
                    className={cx('search-clear')}
                >
                    <ClearIcon width="16px" height="16px" />
                </button>
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
            <div>action</div>
        </div>
    );
}

export default Header;
