import React, { useState } from 'react';
import { Image } from 'antd';

const ImagesDetail = ({images}) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Image
                preview={{ visible: false }}
                width={1020}
                src={images[0]}
                onClick={() => setVisible(true)}
            />
            <div style={{ display: 'none' }}>
                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                    {images.map(i => (<Image src={i} />))}
                    {/* <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" /> */}
                </Image.PreviewGroup>
            </div>
        </>
    );
};

export default ImagesDetail
