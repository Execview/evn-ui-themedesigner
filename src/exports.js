import useThemeApplier from './useThemeApplier'

import defaultTheme from './themes/default.json' assert { type: "json" }
import pinkTheme from './themes/pink.json' assert { type: "json" }
import blueTheme from './themes/blue.json' assert { type: "json" }
import printTheme from './themes/print.json' assert { type: "json" }

export {
	useThemeApplier,
	defaultTheme,
	pinkTheme,
	blueTheme,
	printTheme
}

export default useThemeApplier