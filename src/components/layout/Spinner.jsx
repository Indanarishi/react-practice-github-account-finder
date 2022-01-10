import spinner from '../layout/assets/spinner.gif'

function Spinner() {
    return (
        <div className='w-100 mt-200'>
            <img src={spinner} alt="Loading..." width={180} className='text-center mx-auto' />
        </div>
    )
}

export default Spinner
