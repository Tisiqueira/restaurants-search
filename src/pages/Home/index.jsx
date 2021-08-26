import React from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon/dist/index';
import logo from '../../assets/logo.svg';

import { Container, Search, Logo, Wrapper, Map }  from './styles';

import { useState } from 'react';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
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
                </Search>
            </Container>
            <Map />
        </Wrapper>
        
    )
}

export default Home;