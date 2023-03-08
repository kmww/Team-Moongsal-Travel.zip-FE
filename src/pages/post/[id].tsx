import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { usePatchTraveloguePublish } from '@/api/hooks/post';
import { VerticalStepper } from '@/components/Stepper';

const SubTraveloguePage = () => {
  const router = useRouter();
  const [travelogueId, setTravelogueId] = useState('');
  const [subTravelogueStep, setSubTravelogueStep] = useState<string[]>([]);
  const { mutate } = usePatchTraveloguePublish();

  useEffect(() => {
    if (!router.isReady) return;
    const { travelogueId, days } = router.query;
    const array = Array.from(
      { length: parseInt(days as string) },
      (_, i) => `${i + 1}일차`,
    );
    setTravelogueId(travelogueId as string);
    setSubTravelogueStep(array);
  }, [router.isReady, router.query]);

  const handleTraveloguePublish = () => {
    mutate(
      { travelogueId: parseInt(travelogueId) },
      {
        onSuccess: ({ data }) => {
          router.push({
            pathname: '/detail',
            query: { travelogueId: data.travelogueId },
          });
        },
      },
    );
  };

  return (
    <Box sx={layout}>
      <VerticalStepper
        travelogueId={travelogueId}
        subTravelogueStep={subTravelogueStep}
      />
      <Box sx={{ borderTop: '1px solid #bdbdbd', mt: '20px' }}>
        <Button
          type='button'
          variant='contained'
          fullWidth
          sx={{ m: '20px 0' }}
          onClick={handleTraveloguePublish}>
          발행
        </Button>
      </Box>
    </Box>
  );
};

export default SubTraveloguePage;

const layout = { padding: '0 24px' };
