For our official documentation go here: http://www.kontagent.com/docs/api-libraries/js-wrapper/

Overview
-----------------

This is a JavaScript wrapper around Kontagent's API. It provides methods to make the API calls for all the different message types supported by Kontagent.

Getting Started
-----------------

To get started with the Kontagent library, you will need to check-out the kontagent_api.js file and include it in your project. You will also need to instantiate and configure an instance of the Kontagent object.

    // include the library
	<script src="./kontagent_api.js"></script>
	
	<script>
	
		// configure and instantiate Kontagent object
		var ktApi = new KontagentApi(ktApiKey);
	
	</script>

Using The Library
-----------------

Once you've got your Kontagent object instantiated and configured you can start using the library. Essentially, there are two types of methods provided in the library: tracking methods and helper methods.

**Tracking Methods**

The tracking methods should get called by your application whenever you need to report an event to Kontagent. There is a tracking method available for every message type in the Kontagent API. A few examples are:

    <script>

		ktApi.trackPageRequest('1234567890', {pageAddress : '/game.html'}, function() {
			// request has been successfully sent
			console.log('pageview tracked');
		}); 

	   
		ktApi.trackEvent(
			'1234567890', 
			'mission_1', 
			{
				subtype1 : 'user_action', 
				subtype2 : 'game_played'
			},
			function() {
				console.log('event tracked');
			}
		);

    </script>

Everytime events happen within your application, you should make the appropriate call to Kontagent - we will then crunch and analyze this data in our systems and present them to you in your dashboard.

For a full list of the available tracking methods see the "Full Class Reference" section below.

**Helper Methods**

The library provides a few helper methods for common tasks. Currently the only ones available are:

    <script>

		var uTag = ktApi.genUniqueTrackingTag();

		var shortUTag = ktApi.genShortUniqueTrackingTag();

    </script>

Which will help you generate the tracking tag parameters required to link certain messages together (for example: invite sent -> invite response -> application added).
