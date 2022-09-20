import { LogoComponent } from "./Logo";
import * as HeaderStyles from "./styles";

export function Header() {
  return (
    <HeaderStyles.Container>
      <div>
        <LogoComponent />
      </div>
    </HeaderStyles.Container>
  );
}
