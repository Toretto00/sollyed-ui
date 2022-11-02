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
    user,
    children,
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
        className,
        primary,
        text,
        user,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
