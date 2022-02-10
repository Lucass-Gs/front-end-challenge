import Moment from 'react-moment'
import styled from 'styled-components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { mobile, tablet, desktop } from '../responsive';

// Estilização de componentes

const Container = styled.div `
    width:100%;            
    background: #2D0C5E;
    display: flex;
    flex-direction: row;   
    
    ${mobile({
        flexDirection:"column",
        alignItems:"center",       
 })}
    ${tablet({                
        alignItems:"center",       
 })}
 ${desktop({                
        alignItems:"center",
        height:"600px"       
 })}           
`
const ContentContainer = styled.div `
    ${mobile({       
        marginLeft:"16px",       
 })}
 ${tablet({
        marginTop:"40px",       
        paddingLeft:"300px"       
 })}
 ${desktop({
        marginTop:"40px",       
        paddingLeft:"500px"
              
 })}
                         
`
const BackdropImage = styled.div ` 
    display: flex;             
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;    
    background-size:cover;
    ${mobile({
        flexDirection:"column",
        width:"186px",
        height:"279px",
        marginTop:"34px",       
 })}
    ${tablet({
        position:"absolute",                            
        width:"250px",
        height:"380px",       
        marginLeft:"16px",
    })}
    ${desktop({
        position:"absolute",                            
        width:"383px",
        height:"570px",
        marginTop:"120px",       
        marginLeft:"85px",
    })}
`
const Title = styled.h1 `       
    font-weight: bold;
    font-size: 32px;
    margin-top:42px;
    line-height: 38px;    
    align-items: center;
    letter-spacing: -0.005em;    
    color: #FFFFFF;
    ${mobile({       
        marginTop:"42px",       
 })}    
    ${tablet({       
        marginTop:"42px"       
 })}    
`
const SubDesc = styled.div`     
    font-size: 18px;
    line-height: 24px;    
    color: #FFFFFF;
    
    ${mobile({
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap"                
 })}
    ${tablet({
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",             
 })}
 ${desktop({
        display:"flex",
        flexDirection:"row",                     
 })}     
`
const Genres = styled.div`
    ${mobile({
            display:"flex",
            flexDirection:"column" 
    })}             
`
const Classi = styled.div`
    display:flex;
    width:25px;
    height:25px;
    justify-content: center;        
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    color: #FFFFFF;
    ${mobile({        
        flexWrap:"wrap",               
 })}       
`

const AvaliationCircle = styled.div`    
    position:absolute;
    display: flex;
    margin-top:31px;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 60px;
    height: 60px;        
    border-radius:100px;
    background: rgba(255, 255, 255, 0.1);        
  ` 
    
const TextUser = styled.div`        
    width: 102px;
    height: 40px;
    margin-left: 71px;
    margin-top: 40px;       
    font-size: 16px;
    line-height: 20px;    
    display: flex;
    align-items: center;
    color: #FFFFFF;        
`
const Sinopse = styled.div`    
    width: 73px;
    height: 24px;
    margin-top: 46px;        
    font-size: 20px;
    margin-bottom:16px;
    line-height: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: #FFFFFF;    
`

const Desc = styled.div`            
    font-size: 16px;
    line-height: 24px;    
    letter-spacing: -0.005em;
    color: #DDDDDD;
    ${mobile({             
        marginRight:"14px",
 })}
 ${tablet({ 
        marginRight:"16px",              
 })} 

`
const Participation = styled.div`    
    width: 100%;           
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;   
    padding-bottom:80px;           
`
const PersonsWrapper = styled.div`
    width: 174px;
    height: 44px;
    margin-top: 20px;
    ${desktop({ 
        marginRight:"200px",              
 })}
                
`
const Name = styled.div`            
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 5px;
    font-weight: bold;
    color: #FFFFFF;          
`
const Activity = styled.div`        
    font-size: 14px;
    line-height: 20px;    
    color: #FFFFFF; 
`    

const MovieContent = ({ Movie, Age, Crew }) => {
    const Url = `https://image.tmdb.org/t/p/w500/${Movie.poster_path}` // Imagem dos Cards
    const Br = Age.find(x => x.iso_3166_1 === 'BR') // Certificação de idade no Brasil
    
    // Cargos para a SubDescrição
    var jobDirector = Crew.find(y => y.job === 'Director')   
    var jobCharacter = Crew.find(y => y.job === 'Characters')   
    var jobArt = Crew.find(y => y.job === 'Art Direction')
    var jobScreenplay = Crew.find(y => y.job === 'Screenplay')
    var jobProducer = Crew.find(y => y.job === 'Producer')
      
    const percentage = Movie.vote_average * 10 // porcentagem de rating dos filmes     
    
    return (        
        <Container >        
        <BackdropImage style = {{ backgroundImage: `url(${Url})` }} >
        </BackdropImage>
         
            <ContentContainer >        
                <Title> { Movie.title} (
                     <Moment format='YYYY'>{Movie.release_date}</Moment> 
                    )                    
                </Title>           
            <SubDesc>
            <Classi>{Br?.release_dates[0].certification}</Classi> &nbsp; •  &nbsp;
            <Moment locale='pt-br' format='DD/MM/yyyy'>
                    {Movie.release_date}</Moment>(BR) • &nbsp;
                    <Genres>{Movie.genres?.map(({id,name}) => <span key={id}>{name} • &nbsp;</span>)}</Genres>                   
                    <p>{Movie.runtime}</p>
                </SubDesc> 
               
                <AvaliationCircle>
                                    
                <CircularProgressbar
                value={percentage} 
                text={`${percentage}%`}
                background
                
                styles={buildStyles({                    
                  backgroundColor: "#42246D",                  
                  textSize: "24px",                  
                  textColor: "#14FF00",
                  pathColor: "#14FF00",
                  trailColor: "transparent",          
                })}/>                               
                </AvaliationCircle> 

                <TextUser>Avaliação dos usuários</TextUser>
                <Sinopse>Sinopse</Sinopse>
                <Desc>{Movie.overview}</Desc>                 
                          
                <Participation>                    
                
                    <PersonsWrapper>
                        <Name>{jobDirector?.name}</Name>
                        <Activity>{jobDirector?.job}</Activity>
                    </PersonsWrapper>

                    <PersonsWrapper>
                        <Name>{jobCharacter?.name}</Name>
                        <Activity>{jobCharacter?.job}</Activity>
                    </PersonsWrapper>

                    <PersonsWrapper>
                        <Name>{jobArt?.name}</Name>
                        <Activity>{jobArt?.job}</Activity>
                    </PersonsWrapper>

                    <PersonsWrapper>
                        <Name>{jobScreenplay?.name}</Name>
                        <Activity>{jobScreenplay?.job}</Activity>
                    </PersonsWrapper>

                    <PersonsWrapper>
                        <Name>{jobProducer?.name}</Name>
                        <Activity>{jobProducer?.job}</Activity>
                    </PersonsWrapper>                            
                    
                </Participation>
                </ContentContainer >                   
        </Container>      
    )
}

export default MovieContent