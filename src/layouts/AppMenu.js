import { connect } from 'dva';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
import Link from 'umi/link';

const AppMenu = ({ data: menu }) => {
    const menus = menu.map(item =>
        <Menu.Item key={item.path}>
            <Link to={item.path} >
                <Icon type={item.icon} />
                <span>{item.label}</span>
            </Link>
        </Menu.Item>
    );
    return (
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['/']}>
            {menus}
        </Menu>
    )
}

AppMenu.propTypes = {
    menu: PropTypes.array
};

const mapStateToProps = (state) => {
    const { data } = state.menu;
    return { data };
}

export default connect(mapStateToProps)(AppMenu);