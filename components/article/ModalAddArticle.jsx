import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDisclosure } from "./../../hooks/useDisclosure";
import { useState } from "react";
import { mutate } from "swr";
import { baseURL } from "../../lib/config";

const { Text } = Typography;

const categoryOptions = [
  { value: "Technology", label: "Technology" },
  { value: "Lifestyle", label: "Lifestyle" },
  { value: "Business", label: "Business" },
];

export default function ModalAddArticle() {
  const [stepper, setStepper] = useState(1);
  const modal = useDisclosure();

  const [form] = Form.useForm();

  function cancelModal() {
    modal.onClose();
    setStepper(1);
    form.resetFields();
  }

  async function handleSubmit() {
    await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: form.getFieldValue("title"),
        author: form.getFieldValue("author"),
        summary: form.getFieldValue("summary"),
        category: form.getFieldValue("category"),
        content: form.getFieldValue("content"),
      }),
    });
    await mutate(`${baseURL}/api/posts`);
    cancelModal();
  }

  return (
    <>
      <Button type="primary" icon={<PlusOutlined />} onClick={modal.onOpen}>
        Add Post
      </Button>

      <Modal
        centered
        closeIcon={false}
        maskClosable={false}
        destroyOnHidden={true}
        width={800}
        title="Add New Article"
        open={modal.isOpen}
        okText={stepper === 4 ? "Submit" : "Next"}
        cancelText={stepper === 1 ? "Cancel" : "Back"}
        onOk={async () => {
          try {
            await form.validateFields();
            if (stepper === 1) {
              setStepper(2);
            } else if (stepper === 2) {
              setStepper(3);
            } else if (stepper === 3) {
              setStepper(4);
            } else if (stepper === 4) {
              form.submit();
            }
          } catch {}
        }}
        onCancel={() => {
          if (stepper === 1) {
            cancelModal();
          } else if (stepper === 2) {
            setStepper(1);
          } else if (stepper === 3) {
            setStepper(2);
          } else if (stepper === 4) {
            setStepper(3);
          }
        }}
      >
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          {stepper === 1 && (
            <>
              <Form.Item
                label="Blog Title"
                className="mb-2"
                name="title"
                validateFirst
                rules={[
                  {
                    required: true,
                    message: "Blog title is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Author"
                name="author"
                validateFirst
                rules={[
                  {
                    required: true,
                    message: "Author is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </>
          )}

          {stepper === 2 && (
            <>
              <Form.Item
                label="Summary"
                className="mb-2"
                name="summary"
                validateFirst
                rules={[
                  {
                    required: true,
                    message: "Summary is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Category"
                name="category"
                validateFirst
                rules={[
                  {
                    required: true,
                    message: "Category is required",
                  },
                ]}
              >
                <Select
                  options={categoryOptions}
                  optionFilterProp="label"
                  showSearch
                />
              </Form.Item>
            </>
          )}

          {stepper === 3 && (
            <>
              <Form.Item
                label="Blog Content"
                className="mb-2"
                name="content"
                validateFirst
                rules={[
                  {
                    required: true,
                    message: "Blog content is required",
                  },
                ]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </>
          )}

          {stepper === 4 && (
            <>
              <Text>Review</Text>
              <Row>
                <Col span={24} md={12} className="flex flex-col">
                  <Space direction="vertical" className="mt-2">
                    <Text type="secondary">Title</Text>

                    <Text>{form.getFieldValue("title")}</Text>
                  </Space>

                  <Space direction="vertical" className="mt-2">
                    <Text type="secondary">Author</Text>

                    <Text>{form.getFieldValue("author")}</Text>
                  </Space>

                  <Space direction="vertical" className="mt-2">
                    <Text type="secondary">Summary</Text>

                    <Text>{form.getFieldValue("summary")}</Text>
                  </Space>

                  <Space direction="vertical" className="mt-2">
                    <Text type="secondary">Material</Text>

                    <Text>
                      {
                        categoryOptions?.find(
                          (item) =>
                            item.value === form.getFieldValue("category")
                        )?.label
                      }
                    </Text>
                  </Space>

                  <Space direction="vertical" className="mt-2">
                    <Text type="secondary">Blog Content</Text>

                    <Text>{form.getFieldValue("content")}</Text>
                  </Space>
                </Col>
              </Row>
            </>
          )}
        </Form>
      </Modal>
    </>
  );
}
