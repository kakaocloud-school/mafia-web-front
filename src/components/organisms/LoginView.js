import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { css as emotionCss } from '@emotion/react';
import ImageView from '../atoms/ImageView';
import LoginInput from '../molecules/LoginInput';
import logoImage from '../../assets/images/mafia_logo.svg';
import SocialLogin from '../molecules/SocialLogin';
import theme from '../../styles/theme';
import Text from '../atoms/Text';

/** @jsxImportSource @emotion/react */

function LoginView({ css }) {
  const navigate = useNavigate();
  
  const containerCss = emotionCss(
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:'1rem',
      backgroundColor: theme.color.MAFIA_CONTAINER,
      padding: '5rem',
      '@media (max-width: 768px)': {
        padding: '1rem',
      },
    },
    css,
  );  

  const partCss = emotionCss(
    {
      marginTop: '3rem',
      marginBottom: '3rem',
    }
  )

  const separatorCss = emotionCss({
    display: 'flex',
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.color.MAFIA_WHITE,
    marginTop: '7rem',
    '@media (max-width: 768px)': {
      marginTop: "4rem",
    }
  });

  const separatorLineCss = emotionCss({
    flex: 1,
    borderBottom: `1px solid ${theme.color.MAFIA_LIGHT_GRAY}`,
  });

  const separatorTextCss = emotionCss({
    padding: '0 1rem',
  });

  const signUpLinkCss = emotionCss({
    marginTop: '1rem',
    color: theme.color.MAFIA_WHITE,
    cursor: 'pointer',
    textDecoration: 'underline',
    marginLeft: '0.5rem', 
  });

  const imageCss = emotionCss({
    width: '35rem',
    height: '15rem',
    '@media (max-width: 768px)': {
      width: '20rem',
      height: '7rem',
    },
  })

  function handleSignUpClick() {
    navigate('/signup');
  }


  return (
    <div css= {containerCss}>
      <div css={partCss}>
        <ImageView src={logoImage} alt="logo" css={imageCss} />
      </div>
      <LoginInput/>
      <div css={separatorCss}>
        <div css={separatorLineCss}/>
        <div css={separatorTextCss}>or</div>
        <div css={separatorLineCss}/>
      </div>
      
      <SocialLogin/>
      <div css={partCss}>
        <Text color={theme.color.MAFIA_LIGHT_GRAY}>
          아직 MAFIA.GG 회원이 아니신가요?   
        </Text>
        <span css={signUpLinkCss} 
        onClick={handleSignUpClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === 'Space') {
            handleSignUpClick();
          }
        }}
        role="button"
        tabIndex={0}>  
          회원가입
        </span>
      </div>
      
    </div>
  );
}

LoginView.defaultProps = {
  css: emotionCss({}),
};

LoginView.propTypes = {
  css: PropTypes.objectOf(emotionCss),
};

export default LoginView;
