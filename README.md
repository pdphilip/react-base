#React Base

##Set up:

	git clone https://github.com/pdphilip/react-base.git {PROJECT_NAME}
	cd {PROJECT_NAME}
	npm init -y
	
##NPM modules:    
####React & Babel    
	npm i webpack  webpack-cli @babel/core babel-loader @babel/preset-env @babel/plugin-proposal-class-properties react react-dom @babel/preset-react axios -D

####SCSS & files   
	npm i style-loader css-loader sass-loader node-sass url-loader file-loader -D
####Webpack Dev server
	npm i webpack-dev-server -D
	
## Config:	
> Rename `config/conf.js.sample` to `config/conf.js` and configure vars
> Edit `webpack.config.js` if needed
> Edit scripts `package.json`:	

	....
	....
	"scripts": {
    	"dev": "webpack-dev-server --tag development",
    	"stage": "webpack --tag stage",
    	"build": "webpack --tag production"
	},
	....
	.... 
	
##Run:
	npm run dev|stage|build