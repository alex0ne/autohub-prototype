import React, { Component } from "react";
import { Layout, Menu, Icon, Button, Divider, Card } from "antd";
import Prismic from "prismic-javascript";
import { Link, RichText, Date } from "prismic-reactjs";

const { Header, Footer, Content } = Layout;

export class LandingPage extends Component {
  state = {
    doc: null
  };

  componentDidMount() {
    const apiEndpoint = "https://autohub.prismic.io/api/v2";
    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "page"))
        .then(response => {
          if (response) {
            this.setState({ doc: response.results[0].data });
            //console.log(response.results[0].data);
          }
          console.log(this.state);
        });
    });
  }

  render() {
    if (this.state.doc === null) {
      return <p>Loading</p>;
    }
    return (
      <Layout className="layout">
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo">
            <img
              width="50px"
              src="https://prismic-io.s3.amazonaws.com/autohub%2F68044ad9-3f36-49d6-b03a-c31c2fa9e413_autohublogo.png"
              alt=""
            />
            <span
              style={{
                color: "white",
                marginLeft: "10px",
                fontWeight: "600",
                fontSize: "1.1rem"
              }}
            >
              AutoHub
            </span>
          </div>
          <span className="desktop-only">
            <Menu
              theme="dark"
              mode="horizontal"
              style={{
                lineHeight: "64px",
                fontSize: "1rem",
                display: "inline-block"
              }}
            >
              <Menu.Item key="1">
                <Icon style={{ fontSize: "1rem" }} type="question-circle" />
                Какво е Аутохъб
              </Menu.Item>
              <Menu.Item key="2">
                <Icon style={{ fontSize: "1rem" }} type="exclamation-circle" />
                Как ще ти помогне
              </Menu.Item>
              <Menu.Item key="3">
                <Icon style={{ fontSize: "1rem" }} type="issues-close" />
                Защо
              </Menu.Item>
            </Menu>
          </span>

          <Button.Group
            size="medium"
            style={{
              float: "right"
            }}
          >
            <Button type="primary">Вход</Button>
            <Button type="primary">Регистрация</Button>
          </Button.Group>

          <Button
            className="mobile-only"
            size="medium"
            type="primary"
            icon="menu-unfold"
          />
        </Header>
        <Content
          style={{ padding: "0", textAlign: "center", marginTop: "64px" }}
        >
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            <img
              style={{ maxWidth: "100%", marginTop: "20px" }}
              src="https://prismic-io.s3.amazonaws.com/autohub%2F1917ff3e-24bc-448b-8c2b-aab7faf671c9_autohubheader.jpeg"
              alt=""
            />
            <h1>{this.state.doc.title[0].text}</h1>
            <p>{this.state.doc.content[0].text}</p>
            <br />
            <Divider>
              <Button size="large" ghost type="primary">
                Започнете сега безплатно
              </Button>
            </Divider>
            <br />
            <h2>Как това би ти помогнало?</h2>
            <p>
              Аутохъб е виртуална платформа за управление на автомобилите ви и
              тяхната сервизната история, като ще ви помага с:
            </p>
            <br />
            <div id="help-section" style={{ display: "flex" }}>
              <Card className="help-card">
                <Icon
                  style={{
                    fontSize: "90px",
                    color: "black"
                  }}
                  type="bell"
                />
                <h2>Напомняне</h2>
                <p>
                  Напомня за предстоящо облужване. Спестява ви време и пари.
                </p>
              </Card>
              <Card className="help-card">
                <Icon
                  style={{
                    fontSize: "90px",
                    color: "black"
                  }}
                  type="bell"
                />
                <h2>Напомняне</h2>
                <p>
                  Напомня за предстоящо облужване. Спестява ви време и пари.
                </p>
              </Card>
              <Card className="help-card">
                <Icon
                  style={{
                    fontSize: "90px",
                    color: "black"
                  }}
                  type="bell"
                />
                <h2>Напомняне</h2>
                <p>
                  Напомня за предстоящо облужване. Спестява ви време и пари.
                </p>
              </Card>
            </div>
            <br />
            <br />
            <div
              style={{
                maxWidth: "600px",
                textAlign: "left",
                fontSize: "1.1rem",
                display: "inline-block"
              }}
            >
              <div style={{ margin: "auto" }}>
                <Divider>
                  <h2>Какви проблеми ще реши</h2>
                </Divider>
                <p>
                  Ние от Аутохъб не само искаме да предоставим полезни услуги на
                  потребители си, но и искаме да допринесем за следните
                  проблеми:
                </p>
                <h3>По-безопасни МПС-та</h3>
                <p>
                  В забързаното ежедневие често забравяме за важни посещения в
                  сервиза. Грижата за автомобила ви гарантира дълги и
                  безаварийни километри.
                </p>
                <h3>Прозрачна покупко продажба</h3>
                <p>
                  Информация за щети, както и документиране на пробега. Продайте
                  автомобила си без скрито покрито с информация за цялото
                  облужване.
                </p>
              </div>
              <Button>Искам да раязбера още</Button>
            </div>
            <br /> <br />
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
