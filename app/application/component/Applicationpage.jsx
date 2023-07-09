import Container from '@/components/Container'
import Applicationcard from './Applicationcard'
import {application} from '@/data/productpage'
function Applicationpage() {
    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[40px]'>
                {
                    application.map((values, index)=>{
                       return <Applicationcard key={index} path={values.path} img={values.img} likes={values.likes} isLike={values.isLike} name={values.name} smalldesc={values.smalldesc} /> 
                    })
                }
            </div>
        </Container>
    )
}

export default Applicationpage