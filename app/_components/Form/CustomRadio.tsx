import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';

const CustomRadio = styled(Radio)(({ theme }) => ({
    width: 100,
    height: 40,
    borderRadius: 4,
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    '&.Mui-checked': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  export default CustomRadio;