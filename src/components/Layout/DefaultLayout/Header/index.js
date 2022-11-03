import { useRef } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import Headless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Fragment } from 'react';

import Styles from './Header.module.scss';
import {
    ArrowDownIcon,
    ArrowUpIcon,
    ClearIcon,
    LogoIcon,
    MenuItemIcon,
    SearchIcon,
} from '@/components/icons';
import Button from '@/components/Button';

const cx = classNames.bind(Styles);

function Header() {
    const inputRef = useRef(null);

    const clearSearchInput = () => {
        inputRef.current.value = '';
    };

    const currentUser = true;

    const menuItems = [
        {
            title: 'Account',
            to: '/account',
        },
        {
            title: 'Profile',
            to: '/profile',
        },
        {
            title: 'Upgrade to premium',
            to: '/upgradetopremium',
        },
        {
            title: 'Support',
            to: '/support',
        },
        {
            title: 'Download',
            to: '/download',
        },
        {
            title: 'Setting',
            to: '/setting',
            separate: true,
        },
        {
            title: 'Log out',
            to: '/logout',
        },
    ];

    const renderMenuItem = () => {
        return menuItems.map((item, index) => (
            <Button
                menuItem
                rightIcon={<MenuItemIcon className={cx('menu-icon')} />}
                separate={item.separate}
                to={item.to}
            >
                {item.title}
            </Button>
        ));
    };

    // const [currentUser, setCurrentUser] = useState(false);

    // const handleLogin = () => {
    //     setCurrentUser(true);
    // };

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
                <Tippy content="Search">
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </Tippy>
            </div>
            <div className={cx('action')}>
                {currentUser ? (
                    <>
                        <Headless
                            trigger="click"
                            hideOnClick
                            interactive
                            placement="bottom-end"
                            render={(attrs) => (
                                <div
                                    tabIndex="-1"
                                    className={cx('currentUser-menu')}
                                >
                                    {renderMenuItem()}
                                </div>
                            )}
                        >
                            <Tippy content="Toretto Bảo">
                                <button className={cx('current-user')}>
                                    <img
                                        src={require('@/assets/images/userava.jpg')}
                                        alt="User avatar"
                                        className={cx('user-avatar')}
                                    />
                                    <span className={cx('user-name')}>
                                        Toretto Bảo
                                    </span>
                                    <div className={cx('upDownIcon')}>
                                        <ArrowDownIcon />
                                        <ArrowUpIcon className={cx('hidden')} />
                                    </div>
                                </button>
                            </Tippy>
                        </Headless>
                    </>
                ) : (
                    <>
                        <Button text to="/premium" target="blank">
                            Premium
                        </Button>
                        <Button text to="/download" target="blank">
                            Download
                        </Button>
                        <div className={cx('separate')}></div>
                        <Button text to="/signup">
                            Sign up
                        </Button>
                        <Button primary to="/login">
                            Login
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;
