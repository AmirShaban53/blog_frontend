import classes from '../styles/hero.module.css';
const Hero = (props) => {
    return(
        <div className={classes.hero}>
            {props.children}
        </div>  
    )
}
export default Hero;