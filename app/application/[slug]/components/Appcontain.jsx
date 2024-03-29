import Container from '@/components/Container'
import Myimage from '@/components/Myimage'
import React from 'react'
function Appcontain() {
    return (
        <Container>
            <div className='flex flex-col gap-8'>
                <Myimage src='/img/appdetail.jpg' width={400} height={300} className='w-full h-auto' priority={true} />
                <div className='flex flex-col gap-5'>
                    <h1 className='text-center text-2xl font-bold tracking-wider text-emerald-700'>Multi Zone Heating System for Research Laboratories</h1>
                    <p className='othertext textset'>
                        To conduct experiments, Scientific Research Institutes necessitate a precise temperature gradient on lengthy metal objects, typically pipes with a 6-18 inch diameter. Temperatures can reach up to 1000°C and must be accurate within a 1°C tolerance.</p>
                    <p className='othertext textset'>
                        Tenacious provides a multi-zone heating system equipped with the capability to control up to 20 zones independently. These zones are designed to heat specific sections of an object to precise temperatures. Each zone is controlled individually using a closed-loop system.</p>
                    <p className='othertext textset'>
                        In the multi-zone heating system you described, the heaters in each zone are connected to a Thyristor Power Controller - POW-1-PA. This power controller regulates the power delivery to the heaters proportionally to the control signal it receives. The control signal is generated by a Temperature Controller - PID-966, which utilizes a robust control algorithm to achieve precise temperature control.

                        The Temperature Controller operates in a closed-loop configuration, receiving temperature feedback from each zone through K-Type Thermocouples. This feedback allows the controller to compare the actual temperature with the desired setpoint and make necessary adjustments to maintain the desired temperature in each zone.
                    </p>
                    <p className='othertext textset'>In order to enhance the monitoring and control capabilities of the multi-zone heating system, current meters are incorporated to measure the current drawn by each zone. This allows researchers to monitor the power consumption of individual zones, enabling them to assess and optimize energy usage.</p>
                </div>
            </div>
        </Container>
    )
}

export default Appcontain