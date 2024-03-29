import PasswordInput from 'components/PasswordInput/PasswordInput';
import {
  StyleError,
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledLi,
  StyledText,
  StyledTitle,
} from 'pages/SignupPage/SignupPage.styled';
import { StyledWrap } from 'pages/WelcomePage/WelcomePage.styled';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from './../../redux/auth/operations';
import isAdult from 'helpers/isAdult';
import { useDateOfBirth } from 'hooks/useDateOfBirth';
import { toast } from 'react-toastify';

const emailRexExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const SigninPage = () => {
  const { dateOfBirth } = useDateOfBirth();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    control,
  } = useForm();

  const onSubmit = data => {
    data.isAdult = isAdult(dateOfBirth);

    dispatch(loginThunk(data))
      .unwrap()
      .then(() => {
        toast.success(`Welcome to App`);
        navigate('/home');
      })
      .catch(() => toast.error('Data is not valid'));
  };

  return (
    <StyledWrap>
      <StyledDiv className="container">
        <StyledTitle>Sign In</StyledTitle>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <ul>
            <StyledLi>
              <StyledInput
                type="email"
                placeholder="Email"
                {...register('email', {
                  pattern: {
                    value: emailRexExp,
                    message: 'Email is not valid',
                  },
                  required: true,
                  type: 'text',
                })}
                onBlur={() => trigger('email')}
              />
              {errors.email && <StyleError>{errors.email.message}</StyleError>}
            </StyledLi>
            <StyledLi>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <PasswordInput
                    placeholder="Password"
                    field={field}
                    trigger={trigger}
                    errors={errors}
                  />
                )}
                rules={{
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters long',
                  },
                }}
              />
              {errors.password && (
                <StyleError>{errors.password.message}</StyleError>
              )}
            </StyledLi>
            <StyledButton>Sign in</StyledButton>
          </ul>
        </StyledForm>
        <StyledText>
          <Link to="/signup">Sign up</Link>
        </StyledText>
      </StyledDiv>
    </StyledWrap>
  );
};

export default SigninPage;
