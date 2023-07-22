// Code Keypad Component Here

function Keypad (){
    function handlechange() {
        console.log('Entering password...');
    }
    return (
        <div>
            <input type="password" onChange={handlechange}></input>
            <button>Enter</button>
        </div>
    )
}

export default Keypad;