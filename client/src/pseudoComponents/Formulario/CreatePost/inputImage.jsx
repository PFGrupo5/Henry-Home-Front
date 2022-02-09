import React from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function InputImage() {
  return (
    <div>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        className="upload-list-inline"
      >
        <Button icon={<UploadOutlined />}>Upload images</Button>
      </Upload>
    </div>
  );
}
