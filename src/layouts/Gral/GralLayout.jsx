//import { Outlet } from "react-router-dom";
import { Card, Space, Form, Input, Button } from "antd";
import toast, { Toaster } from "react-hot-toast";
function GralLayout() {
  const notify = () =>
    toast.success("Exito !!!", {
      duration: 2000,
      position: "top-center",
    });

  const onFinish = (values) => {
    console.log("Success:", values);
    notify("Exito");
    console.log(import.meta.env.VITE_URL);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="loginBg">
      <Space direction="vertical" size={16}>
        <Card
          className="card_login"
          title="Default size card"
          style={{
            width: 300,
          }}
        >
          <Form
            name="basic"
            wrapperCol={{
              span: 24,
            }}
            style={{
              maxWidth: 800,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Usuario requerido",
                },
              ]}
            >
              <Input placeholder="Ingrese su usuario" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Contraseña requerida",
                },
              ]}
            >
              <Input.Password placeholder="Ingrese su contraseña" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
      <Toaster />
    </div>
  );
}

export default GralLayout;
