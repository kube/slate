import * as merge from 'webpack-merge'
import { HotModuleReplacementPlugin } from 'webpack'

import defaultConfig from './webpack.config'

export default merge.smart(defaultConfig, {
  mode: 'development',
  devServer: {
    hot: true
  },
  plugins: [new HotModuleReplacementPlugin()]
})
