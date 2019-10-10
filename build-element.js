const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    // const files =[
    //     './dist/inline.bundle.js',
    //     './dist/polyfills.bundle.js',
    //     './dist/main.bundle.js'
    // ]

    const files =[
        './dist/apps/nx-element-container/runtime.js',
        './dist/apps/nx-element-container/polyfills.js',
        './dist/apps/nx-element-container/main.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/main.js')
    console.info('Elements created successfully!')

})()