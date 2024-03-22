const meliConfig = {
	root_url: 'https://api.mercadolibre.com',
	auth_url: 'https://auth.mercadolibre.com/authorization',
	oauth_url: 'https://api.mercadolibre.com/oauth/token',
	redirect_uri : process.env.REDIRECT_URI,
	site_id : 'MLA'
};

module.exports = {
    meliConfig
}

