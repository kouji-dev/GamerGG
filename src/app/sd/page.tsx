import {Button} from "@/ui";
import {Typography} from "@/ui/Typography";

export default function SystemDesignPage() {
  return (
      <div className='flex flex-col items-center gap-2'>
          <Button/>
          <Button size='medium'/>
          <Button size='large'/>
          <Typography variant='h1' weight='black'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='h2' weight='black'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='h3' weight='black'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='h4' weight='black'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='h5' weight='black'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='h6' weight='black'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='subtitle' weight='bold'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='caption'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='paragraph'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='body'>The quick brown fox jumps over the lazy dog.</Typography>
          <Typography variant='body' disabled>The quick brown fox jumps over the lazy dog.</Typography>
      </div>
  )
}
