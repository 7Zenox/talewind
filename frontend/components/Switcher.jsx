import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

import { SunIcon } from '../public/images/Sunicon';
import { MoonIcon } from '../public/images/Moonicon';

export default function Switcher() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  console.log(useNextTheme().theme)

  return (
    <div>
      <Switch
        shadow
        size="md"
        color={"primary"}
        iconOn={<MoonIcon filled />}
        iconOff={<SunIcon filled />}
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </div>
  )
}