import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Fragment } from 'react';

import Styles from './Header.module.scss';
import {
    ArrowDownIcon,
    ArrowUpIcon,
    ClearIcon,
    LogoIcon,
    SearchIcon,
} from '@/components/icons';
import Button from '@/components/Button';

const cx = classNames.bind(Styles);

function Header() {
    const inputRef = useRef(null);

    const clearSearchInput = () => {
        inputRef.current.value = '';
    };

    const [currentUser, setCurrentUser] = useState(false);

    const handleLogin = () => {
        setCurrentUser(true);
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
                <Tippy content="Seacrh">
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </Tippy>
            </div>
            <div className={cx('action')}>
                {currentUser ? (
                    <>
                        <button className={cx('current-user')}>
                            <span>
                                <img
                                    aria-hidden="false"
                                    draggable="false"
                                    loading="eager"
                                    src="@/assets/images/userava.jpg"
                                    alt="User avatar"
                                    className="user-avatar"
                                />
                            </span>
                            <span>Toretto Bảo</span>
                            <ArrowDownIcon />
                            <ArrowUpIcon className={cx('hidden')} />
                        </button>
                    </>
                ) : (
                    <>
                        <Tippy content="Premium">
                            <Button text to="/premium" target="blank">
                                Premium
                            </Button>
                        </Tippy>
                        <Tippy content="Download">
                            <Button text to="/download" target="blank">
                                Download
                            </Button>
                        </Tippy>
                        <div className={cx('separate')}></div>
                        <Tippy content="Sign up">
                            <Button text to="/signup">
                                Sign up
                            </Button>
                        </Tippy>
                        <Tippy content="Login">
                            <Button primary onClick={handleLogin}>
                                Login
                            </Button>
                        </Tippy>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;
