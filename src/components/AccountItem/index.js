import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d1b4cc1acd541b140647d5b3d944bb43~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=48fce5e4&x-expires=1748181600&x-signature=NBcYRYzknEKZv1r0KY2P%2F%2FpqeiQ%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=my" alt="" />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Nguyen van a</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>nguyenvana</span>
        </div>
    </div>
}

export default AccountItem;