import React from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon/dist/index';
import Slider from 'react-slick';


import logo from '../../assets/logo.svg';

import { Card } from '../../components'

import { Container, Search, Logo, Wrapper, Map, CarouselTitle }  from './styles';
import  restaurante  from '../../assets/restaurante-fake.png';

import { useState } from 'react';


const Home = () => {
    const [inputValue, setInputValue] = useState('');

    const settings = {

        dots: false,
        infinite: true,
        speed: 250,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };


    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo"/>
                    <TextField
                        label="Pesquisar Restaurantes"
                        outlined
                        //onTrailingIconSelect={() => this.setState({value: ''})}
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                        >
                            <Input value={inputValue}  onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Slider {...settings}>
                        <Card photo={restaurante}></Card>
                        <Card photo={restaurante}></Card>
                        <Card photo={restaurante}></Card>
                        <Card photo={restaurante}></Card>                        
                        <Card photo={restaurante}></Card>                        
                        <Card photo={restaurante}></Card>                        
                    </Slider>
                </Search>
            </Container>
            <Map />
        </Wrapper>
        
    )
}

export default Home;