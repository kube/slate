import * as merge from 'webpack-merge'
import defaultConfig from './webpack.config'

export default merge.smart(defaultConfig, {
  mode: 'production'
})
