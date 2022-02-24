import React, { useState } from 'react';
import { Image } from 'antd';

const ImagesDetail = ({ images }) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Image
                preview={{ visible: false, maskClassName: "imagesDetail" }}
                width={1020}
                src={images[0]}
                onClick={() => setVisible(true)}
                className="imagesDetail"
            />
            <div style={{ display: 'none' }}>
                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                    {images.map((i,index) => (<Image key={index} src={i} />))}
                </Image.PreviewGroup>
            </div>
        </>
    );
};

export default ImagesDetail
