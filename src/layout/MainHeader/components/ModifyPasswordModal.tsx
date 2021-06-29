import React, { PropsWithChildren } from 'react';
import { Modal, Form, Input } from 'antd';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

type Props = PropsWithChildren<{
  isModifyVisible: boolean;
  setIsModifyVisible: (isShow: boolean) => void;
}>;

export const ModifyPasswordModal: React.FC<Props> = (props: Props) => {
  const { isModifyVisible, setIsModifyVisible } = props;
  const [form] = Form.useForm();
  const handleModifyOk = () => {
    console.log('点击了确定');
  };
  // 取消按钮
  const handleModifyCancel = () => {
    setIsModifyVisible(false);
  };
  return (
    <Modal
      title="修改密码"
      visible={isModifyVisible}
      onOk={handleModifyOk}
      onCancel={handleModifyCancel}
    >
      <Form form={form} {...layout}>
        <Form.Item
          name="password"
          label="旧密码"
          rules={[
            {
              required: true,
              message: '请输入旧密码',
            },
          ]}
        >
          <Input.Password placeholder="请输入旧密码" />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label="新密码"
          rules={[
            {
              required: true,
              message: '请输入新密码',
            },
          ]}
        >
          <Input.Password placeholder="请输入新密码" />
        </Form.Item>
        <Form.Item
          name="repPassword"
          label="重复新密码"
          hasFeedback
          rules={[
            {
              required: true,
              message: '请再次输入新密码',
            },
            ({ getFieldValue }) => ({
              validator(_, value: string) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('密码确认不一致！');
              },
            }),
          ]}
        >
          <Input.Password placeholder="请再次输入新密码" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
