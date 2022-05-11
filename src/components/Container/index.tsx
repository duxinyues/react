import { Outlet, useNavigate } from
  "react-router-dom"
import { Layout, Menu, MenuProps } from "antd";
import './container.scss';
import menuItem from "../../config/menu";

const { Content, Footer, Sider } = Layout;
const items: MenuProps['items'] = menuItem.map(
  (item, index) => {
    return {
      key: index,
      label: item.title,
      children: item.subs?.map((item, key) => {
        return {
          key: item.router,
          label: item.title,
          kayPath: item.router
        };
      }),
    };
  },
);
export default function Container() {
  const navigate = useNavigate()
  const onChangeRouter = (router: string) => { navigate(router) }
  return (<Layout className="layout">
    <Layout>
      <Sider className="sider">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={items}
          onClick={({ key }) => onChangeRouter(key)}
        />
      </Sider>
      <Content className="content">
        <Outlet />
        <Footer style={{ textAlign: 'center' }}>React 实例 {new Date().getFullYear()}</Footer>
      </Content>
    </Layout>
  </Layout>
  );
}