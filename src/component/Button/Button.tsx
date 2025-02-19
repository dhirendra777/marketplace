import { FC, memo, ReactNode, useCallback } from 'react';

interface ButtonProps {
  children: ReactNode;
  btnClass: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = memo(({ children, btnClass, onClick }) => {
  const onClickHandler = useCallback(() => {
    onClick?.();
  }, [onClick]);

  return (
    <button className={btnClass} onClick={onClickHandler}>
      {children}
    </button>
  );
});

export default Button;
