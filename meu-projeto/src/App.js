import './index.js';
import { Container, Content,Row,Collumn } from './style.js';
import Input from './components/Input/index.js';
import Button from './components/Button/index.js';
 



const App =  () => {
  return(
      <Container>
        <Content>
          <Input></Input>
          <Row>
            <Button label = "7"/>
            <Button label = "8"/>
            <Button label = "9"/>
            <Button label = "-"/>
          </Row>
          <Row>
            <Button label = "4"/>
            <Button label = "5"/>
            <Button label = "6"/>
            <Button label = "+"/>
          </Row>
          <Row>
            <Button label = "1"/>
            <Button label = "2"/>
            <Button label = "3"/>
            <Button label = "="/>
          </Row>
        </Content>
      </Container>
        
  );
}

export default App;