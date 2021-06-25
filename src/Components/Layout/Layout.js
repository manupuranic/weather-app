import classes from "./Layout.module.css";

const Layout = (props) => {
    return (<div className={classes.background}>
        {props.children}
    </div>);
}

export default Layout;