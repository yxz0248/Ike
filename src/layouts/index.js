import { Layout, Icon } from 'antd';
import React from 'react';
import withRouter from 'umi/withRouter';
import style from './index.css';
import AppMenu from './AppMenu';

const { Header, Sider, Content } = Layout;

class AppLayout extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout className={style.appLayout}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className={style.logo}>{this.state.collapsed ? 'IKE' : 'IKE, ready for battle!'}</div>
                    <AppMenu />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className={style.trigger}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(AppLayout);