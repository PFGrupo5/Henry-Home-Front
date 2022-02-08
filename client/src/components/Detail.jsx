import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../FilesStore/Actions';
import Carrousel from '../pseudoComponents/Carrousel';
import imgDefault from '../assets/img/HenryHome.png';
import { Typography } from 'antd';
import { PushpinOutlined, DollarOutlined } from "@ant-design/icons"
import '../assets/css/Detail/Detail.css'

const { Title, Text } = Typography;

export default function Detail(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [dispatch, props])

    let hotel = useSelector(state => state.detail)
    return (
        <div className='allDetail'>
            <Title>{hotel.name}</Title>
            <div className='carrouselConteiner'>
                <Carrousel imgs={hotel.images ? hotel.images : [imgDefault]}
                    dotsBool={true}
                    styles="imgDetail" />
            </div>
            <Text>{hotel.description}</Text>
            <Text> <PushpinOutlined /> {hotel.Location ? hotel.Location.name : null}</Text>
            <Text> <DollarOutlined /> {hotel.pricePerNight}</Text>
            <div>
                {
                    hotel.Facilities?.map(e => {
                        return <Text>{e.name} </Text>
                    })
                }
            </div>
            <div>
                {
                    hotel.Services?.map(e => {
                        return <Text>{e.name} </Text>
                    })
                }
            </div>

        </div>
    )
}
