import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Styles from './Button.module.scss';

const cx = classNames.bind(Styles);

function Button({
    to,
    href,
    className,
    primary,
    text,
<<<<<<< HEAD
    menuItem,
    children,
    separate,
    leftIcon,
    rightIcon,
=======
    user,
    children,
>>>>>>> bce3d7c3be1d0d0aee40fe5fe1debc830c8349ea
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
<<<<<<< HEAD
        separate,
        className,
        primary,
        text,
        menuItem,
=======
        className,
        primary,
        text,
        user,
>>>>>>> bce3d7c3be1d0d0aee40fe5fe1debc830c8349ea
    });

    return (
        <Comp className={classes} {...props}>
<<<<<<< HEAD
            {leftIcon && <span>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span>{rightIcon}</span>}
=======
            <span>{children}</span>
>>>>>>> bce3d7c3be1d0d0aee40fe5fe1debc830c8349ea
        </Comp>
    );
}

export default Button;
