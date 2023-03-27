import {Button} from "@/ui";
import {Typography} from "@/ui/Typography";

export default function Home() {
  return (
      <div className='flex flex-col items-center gap-2'>
          <Button/>
          <Button size='medium'/>
          <Button size='large'/>
          <Typography variant='h1'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='h2'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='h3'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='h4'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='h5'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='h6'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='subtitle'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='caption'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='paragraph'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='body'>The quick brown fox jumps over the lazy dog.</Typography>
      </div>
  )
}
