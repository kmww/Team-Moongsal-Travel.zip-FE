import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import { SubTitle, Title } from '../common';
import { Location } from './';
import Transportation from './Transportation';

const PostDetail = () => {
  const [formats, setFormats] = useState<string[]>(() => []);

  const onFormatChange = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats);
  };

  return (
    <>
      <Title>1일차</Title>
      <SubTitle>소제목</SubTitle>
      <Box sx={marginBottom}>
        <TextField fullWidth label='제목을 입력하세요' type='text' />
      </Box>
      <Stack sx={marginBottom}>
        <SubTitle>방문한 도시</SubTitle>
        <Location />
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>방문한 장소</SubTitle>
        <Location />
      </Stack>

      <Stack sx={marginBottom}>
        <SubTitle>이동수단</SubTitle>
        <Transportation value={formats} handleFormat={onFormatChange} />
      </Stack>

      <Stack sx={marginBottom}>
        <SubTitle>글을 자유롭게 작성해보세요</SubTitle>
        <Editor></Editor>
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='contained' sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='body1' component='span' sx={{ fontSize: '0.5rem' }}>
            다음
            {<ArrowForwardIosOutlinedIcon sx={{ fontSize: '0.5rem' }} />}
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default PostDetail;

const marginBottom = {
  marginBottom: '1rem',
};

const Editor = styled('textarea')(({ theme }) => ({
  height: '20rem',
  width: '100%',
  resize: 'none',
  overflowY: 'auto',
  outlineColor: theme.palette.blue050.main,
}));
