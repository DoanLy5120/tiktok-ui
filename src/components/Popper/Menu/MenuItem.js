import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <div className={cx('menu-item')}>
            <Button to={data.to} leftIcon={data.icon}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
