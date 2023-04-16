import {AvalancheShape, DotGridShape, LandingPageAboutUs} from "@/ui/shapes";
import {Button, Typography} from "@/ui";



export default function Home() {
  return (
      <div>
          <div className='ml-14 mt-14 relative'>
              <Typography variant='h1' weight='black' transform='uppercase' className='text-transparent bg-clip-text bg-gradient-to-r from-red to-blue absolute top-14 left-6'>high elo boost</Typography>
              <Typography variant='h3' weight='regular' transform='capitalize' className='absolute top-32 left-6'>Fast, Cheap, Reliable</Typography>
              <div className='flex justify-between w-[340px] absolute top-52 left-6'>
                  <Button label='runk up' size='large'/>
                  <Button variant='secondary' label='join us' size='large'/>
              </div>
              <DotGridShape/>
          </div>
          <div className='absolute bottom-0 right-0 left-0'>
              <AvalancheShape/>
              <LandingPageAboutUs/>
          </div>
      </div>
  )
}
