
import React from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon/dist/index';


import logo from '../../assets/logo.svg';

import { Card, RestaurantCard, Modal, Map, Loader, ImageSkeleton} from '../../components';

import { Container, Search, Logo, Wrapper, CarouselTitle , Carousel, ModalTitle, ModalContent}  from './styles';
import restaurante  from '../../assets/restaurante-fake.png';

import { useState } from 'react';
import { Restaurant } from '../../components/RestaurantCard/styles';



const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(true)
    const [modalOpened, setModalOpened] = useState(null);
    const { restaurants, restaurantSelected }  = useSelector((state) => state.restaurants);

    const settings = {

        dots: false,
        infinite: true,
        autoplay: true,
        speed: 250,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    function handleKeyPress(e){
        if(e.key === 'Enter') {
            setQuery(inputValue);
        }
    }

    function handleOpenModal(placeId){
        setPlaceId(placeId);
        setModalOpened(true);
    }

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
                            <Input value={inputValue} onKeyPress={handleKeyPress} onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    {restaurants.length > 0 ? (
                        <>
                            <CarouselTitle>Na sua Área</CarouselTitle>
                            <Carousel {...settings}>
                                {restaurants.map((restaurant) => 
                                    <Card 
                                    key={restaurant.place_id}
                                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
                                    title={restaurant.name}/>)}         
                            </Carousel>
                        </>
                    ): (
                        <Loader/>
                    )}
                    
                </Search>
                {restaurants.map((restaurant) => (
                    <RestaurantCard onClick = {() => handleOpenModal(restaurant.place_id)} restaurant={restaurant} />
                ))}
            </Container>
            <Map query={query} placeId={placeId}/>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                {restaurantSelected ? (
                    <>
                        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                        <ModalContent>{restaurantSelected?.formatted_ModalTitlehone_number}</ModalContent>
                        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                        <ModalContent>{restaurantSelected?.opening_hours?.open_now ? 'Aberto agora': 'Fechado'}</ModalContent>
                    </>
                ): (
                    <>
                        <ImageSkeleton whidth="10px" height="10px"/>
                        <ImageSkeleton whidth="10px" height="10px"/>
                        <ImageSkeleton whidth="10px" height="10px"/>
                        <ImageSkeleton whidth="10px" height="10px"/>
                    </>
                )}
                
            </Modal>
        </Wrapper>
        
    )
}

export default Home;