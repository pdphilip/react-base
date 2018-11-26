const CONF = require('./config/conf');

let BASE = {
    entry: {
        EntryA: "./src/EntryPointA.js",
        EntryB: "./src/EntryPointB.js",
        // collaboration_room: "./src/CollaborationRoom.js",
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /{node_modeles}/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [
                    {loader: "url-loader"}
                ]
            }
        ]
    }
    // optimization: {
    //     splitChunks: {
    //         // include all types of chunks
    //         chunks: 'all',
    //         name: 'core'
    //     }
    // }
};



module.exports = (env, argv) => {

    if (argv.tag === 'development') {
        BASE.watch = true;
        BASE.watchOptions = {
            poll: 1000
        };
        BASE.output = {
            filename: "[name].dev.js",
            path: CONF.DEV_DIR
        };

        BASE.devServer = {
            contentBase: CONF.DEV_DIR,
            port: 5051
        };
        BASE.mode = 'development';
    }

    if (argv.tag === 'stage') {
        BASE.watch = true;
        BASE.output = {
            filename: "[name].stage.js",
            path: CONF.STAGE_DIR
        };
        BASE.mode = 'development';
    }

    if (argv.tag === 'production') {
        BASE.output = {
            filename: "[name]." + CONF.TS +".bundle.js",
            path: CONF.BUILD_DIR
        };
        BASE.mode = 'production';
        BASE.plugins = [
            CONF.WF_CDN
        ];
    }

    return BASE;
};
