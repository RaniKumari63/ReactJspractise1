import React from 'react'

const Footer=()=>{
    const today=new Date();
    return(
<footer>
<p>Copyright &copy; by {today.getFullYear()}</p>
</footer>
        
    );
}
export default Footer;