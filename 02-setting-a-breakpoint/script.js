
	const data = [
		{
			text: 'Free Code Camp',
			href: 'https://www.freecodecamp.orn'
		},
		{
			text: "Udacity",
			href: 'https://www.udacity.com'
		},
		{
			text: 'Code Academy',
			href: 'https://www.codecademy.com'
		},
		{
			text: 'SQL Zoo',
			href: 'https://sqlzoo.net/'
		},
		{
			text: "If you're seeing this link, congratulations!",
			href: 'https://charlottedevs.com/'
		}
	];
  
  
	for (var i = 0; i<data.length; i++) {
		if (data.text) {
			document.querySelector('#links').innerHTML += `<p><a href="${data.href}">${data.text}</a></p>`);
		}
	}

