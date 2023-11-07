const Form=()=>{
    return(
        <>
        <div className="formcontainer">
            <h1 align="center">STUDENT DETAILS</h1>
            <form className="f1">
                <input type="text" name="name" id=" " placeholder="Name" className="fx1"/><br/>
                <input type="email" name=" " id=" " placeholder="Email" className="fx1"/><br/>
                <input type="number" name=" " id=" " placeholder="Phone" className="fx1"/><br/>
                <input type="password" name=" " id=" " placeholder="Password" className="fx1"/><br/>
                <input type="submit" value="Register" className="fx1"/>
                
            </form>
        </div>
        </>
    )
}
export default Form;