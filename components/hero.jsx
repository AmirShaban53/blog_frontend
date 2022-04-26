import classes from '../styles/hero.module.css';
const Hero = (props) => {
    const bgImage = {backgroundImage: 'url("/layer 13.jpg")'}
    return(
        <div className={classes.hero} style={bgImage}>
            {props.children}
        </div>  
    )
}
export default Hero;