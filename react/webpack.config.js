const path = require('path')

module.exports = {
    entry: './impulsoreactwebdeveloper/react/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js' 
    }
}

