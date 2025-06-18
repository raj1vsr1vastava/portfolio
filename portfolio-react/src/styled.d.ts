import 'styled-components';
import { ThemeProps } from './styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProps {}
}
