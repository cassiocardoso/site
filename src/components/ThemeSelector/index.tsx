import { Fragment, FC } from 'react';
import { useDarkMode } from 'next-dark-mode';

import * as S from './styles';

export const ThemeSelector: FC = () => {
  const {
    autoModeActive,
    darkModeActive,
    switchToAutoMode,
    switchToDarkMode,
    switchToLightMode,
  } = useDarkMode();

  const findActive = (text: string): boolean => {
    if (autoModeActive) {
      return text === 'auto';
    } else if (darkModeActive) {
      return text === 'dark';
    }
    return text === 'light';
  };

  const toggleMode = (text: string) => {
    if (text === 'Auto') {
      switchToAutoMode();
    } else if (text === 'Dark') {
      switchToDarkMode();
    } else if (text === 'Light') {
      switchToLightMode();
    }
  };

  return (
    <S.Switch>
      {['Auto', 'Dark', 'Light'].map((text) => (
        <Fragment key={text}>
          <S.Input
            checked={findActive(text.toLowerCase())}
            id={`${text}`}
            name="switch"
            onChange={() => toggleMode(text)}
            type="radio"
          />
          <S.SwitchLabel htmlFor={`${text}`}>{text}</S.SwitchLabel>
        </Fragment>
      ))}
      <S.SwitchIndicator />
    </S.Switch>
  );
};
