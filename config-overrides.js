const {alias} = require('react-app-rewire-alias')

module.exports = function override(config){
    alias({
        '@components': './src/components',
        '@modules':'./src/modules',
        '@images':'./src/images',
        '@hooks':'./src/hooks',
        '@validation':'./src/validation',
        '@styles':'./src/modules/styleVariables.scss'
    })(config)

    return config
}