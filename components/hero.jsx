import classes from '../styles/hero.module.css';
const Hero = (props) => {
    // const bgImg = {backgroundImage: 'url("")'}
    return(
        <div className={classes.hero} >
            {props.children}
        </div>  
    )
}
export default Hero;