import Breakpoints from './Breakpoints'
import Colors from './Colors'
import Radius from './Radius'
import Shadows from './Shadows'
import Sizes from './Sizes'
import Spacing from './Spacing'
import Typography from './Typography'
import ZIndices from './ZIndices'

const Foundations = {
  Breakpoints,
  ZIndices,
  Radius,
  Colors,
  ...Typography,
  Sizes,
  Shadows,
  Space: Spacing,
}

export default Foundations