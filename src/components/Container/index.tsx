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
      children: item.subs?.map((items, key) => {
        return {
          key: items.router,
          label: items.title,
          kayPath: items.router
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
          defaultSelectedKeys={['0']}
          defaultOpenKeys={['0']}
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