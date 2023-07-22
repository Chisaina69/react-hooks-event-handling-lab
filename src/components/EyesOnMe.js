// Code EyesOnMe Component Here
const EyesOnMe = () => {
    const hanleFocus = () => {
        console.log('Good!');
    }
    const handleBlur = () => {
        console.log('Hey! Eyes on me!');
    }
    return(
        <button onFocus={hanleFocus} onBlur={handleBlur}>Eyes on me</button>
    )
}
export default EyesOnMe
