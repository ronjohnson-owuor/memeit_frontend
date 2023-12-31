import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAd } from '@fortawesome/free-solid-svg-icons';
import Adrequest from '../modules/ad_request';

function Banner({isGlobal}) {
	const ad_request = new Adrequest();
	const [banner,setbanner] = useState([]);
	const [banner_counter,setbanner_counter] = useState(0);
	const [current_banner,setcurrent_banner] = useState([]);
	
	
	useEffect(()=>{
		var banner_slider = setInterval(()=>{
		  var random_number = Math.ceil(Math.random()*banner?.length);
		  if(banner?.length-1 >= 1){
			setbanner_counter(random_number);
		  }
		},6000);
		return () =>clearInterval(banner_slider);
	  },[banner]);
	
	  useEffect(()=>{
		setcurrent_banner(banner[banner_counter]);
	  },[banner_counter]);
	  
	  
	//   if the advertisement is  to be shown globally or its for the homepage only.
	  useEffect(()=>{
		if(isGlobal){
			ad_request.get_ads("global-banner",setbanner);
		}else{
			ad_request.get_ads("home-banner",setbanner);
		}
		
	  },[]);
	  
	  
  return (
	<div className='w-full h-[200px] bg-grey_light dark:bg-grey_dark relative flex items-center justify-center cursor-pointer'>
		{
			current_banner ? (
			<div className='bg-transparent w-full h-full flex items-center justify-center flex-col gap-2' onClick={()=>window.open(current_banner.link)}>
				<img src={current_banner.ad_media} className=' w-full h-full object-cover'/>
				<h2 className='absolute text-xl text-grey_dark  font-bold bg-overlays p-2'>{current_banner.ad_heading}</h2>
				</div>	
			)
			:
			(
			<div className='dark:text-grey_dark bg-light_overlay dark:bg-dark_overlay w-full h-full flex items-center justify-center flex-col gap-2'>
			<FontAwesomeIcon className='text-2xl' icon={faAd}/>
			<span>buy this space <a className='underline' href="#">learn more</a></span>
			</div>	
			)
		}

	</div>
  )
}

export default Banner