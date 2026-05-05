function Contact(){
    return(
        <div style={{color:'darkblue'}}>
        <h1>Let's talk 😊🙌</h1>
        <h2>Send me some messages that you want to talk about...</h2>
        </div>,

        <form onSubmit={e=>{
            e.preventDefault();
            alert('Submitting!');
        }}>
            <input/>
            <button>Send</button>
        </form>
    )
} export default Contact