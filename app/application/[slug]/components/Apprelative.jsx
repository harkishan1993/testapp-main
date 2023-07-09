import React from 'react'
import Applicationpage from '../../component/Applicationpage'
import Container from '@/components/Container'

function Apprelative() {
    return (
        <>
            <Container>
                <div className="mb-4 text-center">
                    <h3 className="productdetailTitle inline-block">Related products
                        <div className="h-[1px] w-full bg-orange-300"></div>
                    </h3>
                </div>
            </Container>
            <Applicationpage />
        </>
    )
}

export default Apprelative