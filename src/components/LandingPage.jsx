import React, { Component } from "react";
import { Layout, Menu } from "antd";

const { Header, Footer, Content } = Layout;

export function LandingPage() {
  return (
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <h1>Аутохъб - вашата сервизна книжка</h1>
        <p>
          Управлявайте историята на автомобилите си на един клик разстояние.
        </p>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
