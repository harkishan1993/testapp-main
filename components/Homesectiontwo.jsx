import React from 'react'
import Container from './Container'
import Slider from './Slider'
import Sectiontitle from './Sectiontitle'
const getProduct = async () => {
    let product = []
    try {
         product = await fetch(`https://tenaciousinstrument.in/api/slider`, {
            method:'GET',
            next:{
                revalidate:0
            }
        }).then((r)=>r.json())
    } catch (error) {
        console.log(error)
    }
    return product
}
async function Homesectiontwo() {
    let product = await getProduct()
    return (
        <Container>
            <div className='relative pb-8'>
                <div className='flex flex-col justify-center items-center gap-4 pb-4'>
                    <Sectiontitle>Our Products</Sectiontitle>
                    {/* <p className='othertext textset'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cumque iure vel neque asperiores totam nostrum fuga eius, nesciunt, distinctio dolorum voluptatibus iste expedita. Eius illo sit id dolores magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas voluptas ad iusto adipisci eum asperiores recusandae eaque a, voluptatem accusantium in veritatis dolor earum debitis enim quae. Sunt, vero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum veniam nam incidunt dicta assumenda illo vel omnis aut magnam consectetur, at autem! Laudantium esse autem architecto repellendus consectetur! Laborum, nulla?
                    </p> */}
                </div>
                <Slider product={product} />
            </div>
        </Container>
    )
}

export default Homesectiontwo