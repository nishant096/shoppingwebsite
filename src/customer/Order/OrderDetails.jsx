import React from 'react'
import AddressCard from '../components/AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { StarIcon } from '@heroicons/react/24/outline'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
        <h1 className='font-bold texl-xl py-7'>
            Delivery Address
        </h1>
      <AddressCard/>
        </div>
        <div className='py-10'>
        <OrderTracker activeStep={3}/>
    </div>

    <Grid className='space-y-5' container>
        {[1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:'center', justifyContent:'space-between'}}>
            <Grid item xs={6}>
                <div className='flex item-center space-x-4'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/h/k/b/xxl-el80-ramapink-feel-high-original-imaggc25msjjqdzt.jpeg?q=70" alt="" />
                    <div className='space-y-2 ml-5'>
                        <p className='font-semibold'>Men Regular Fit Solid Casual Shirts</p>
                        <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: Pink & Blue</span> <span> Size: M</span></p>
                        <p>Seller: Feek high</p>
                        <p>₹479</p>
                    </div>
                </div>
            </Grid>
            <Grid item>
                <Box sx={{color:deepPurple[500]}}>
                    <StarBorderIcon sx = {{ fontSize:"2rem" }} className='px-2 text-5xl'/>
                    <span>Rate and Review Product</span>
                </Box>
            </Grid>
        </Grid>)}
        
    </Grid>
    </div>
    
  )
}

export default OrderDetails
